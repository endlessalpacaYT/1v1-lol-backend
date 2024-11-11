const fs = require('fs');
const path = require('path');

async function justbuildAPI(fastify, options) {
    // exluded too, not sure why i thought it was a good idea to emulate a cdn with a backend
    fastify.get('/justbuild/1v1Assets/:platform/Prod/4.707/:filename', (request, reply) => {
        const { platform, filename } = request.params;
        const filePath = path.join(__dirname, '..', 'static', filename);

        fs.exists(filePath, (exists) => {
            if (exists) {
                reply.header('Content-Disposition', 'attachment; filename="' + filename + '"')
                    .send(fs.createReadStream(filePath));
            } else {
                reply.status(404).send('File not found');
            }
        });
    });

    // Exluded in fiddlerscript for now. reason: broken af :skull
    fastify.get('/justbuild/1v1Images/Lootbox/Shop-bundles/Champions/NewShopBoxes/:filename', (request, reply) => {
        const { filename } = request.params;
        console.log(filename);
        const filePath = path.join(__dirname, '..', 'public', filename);

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                reply.status(404).send('File not found');
            } else {
                reply.type('image/jpeg');
                fs.createReadStream(filePath).pipe(reply.raw);
            }
        });
    });

    fastify.get('/1v1Images/*', (request, reply) => {
        const filePath = path.join(__dirname, 'public', "1.jpg");

        if (fs.existsSync(filePath)) {
            reply.sendFile(filePath);
        } else {
            reply.status(404).send('Image not found');
        }
    });

    fastify.get('/justbuild/1v1Images/*', (request, reply) => {
        const filePath = path.join(__dirname, 'public', "1.jpg");

        if (fs.existsSync(filePath)) {
            reply.sendFile(filePath);
        } else {
            reply.status(404).send('Image not found');
        }
    });
}

module.exports = justbuildAPI;