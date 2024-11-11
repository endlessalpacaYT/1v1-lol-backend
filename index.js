const fastify = require('fastify')();
const formbody = require('@fastify/formbody');
const fs = require("fs");
const zlib = require('zlib');
require("dotenv").config();
const logger = require("./src/utils/logger");
const path = require("path");

const PORT = 3551;
const IP = "0.0.0.0";

fastify.register(formbody);
fastify.addContentTypeParser('application/octet-stream', { parseAs: 'buffer' }, (req, payload, done) => {
    done(null, payload);
});

fs.readdirSync(path.resolve(__dirname, "./src/routes")).forEach(fileName => {
    try {
        fastify.register(require(path.resolve(__dirname, "./src/routes", fileName)));
        logger.backend(`Registered Route: ${fileName}`);
    } catch (err) {
        console.error(`Error Registering Route: ${fileName}, Error: ` + err);
    }
});

fastify.setNotFoundHandler((request, reply) => {
    console.warn(`404 Not Found - ${request.method} ${request.url}`);
    reply.status(404).send({
        error: '1v1lol.errors.common.not_found',
        error_description: "The route you requested is unavailable!",
        code: 404
    });
});

fastify.setErrorHandler((error, request, reply) => {
    console.error(request.url);
    console.error(error);
    reply.status(500).send({
        error: "1v1lol.errors.common.server_error",
        error_description: "An internal server error has ocurred!",
        code: 500
    })
});

async function startBackend() {
    fastify.listen({ port: PORT, host: IP }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        logger.backend(`1v1-lol Backend Running On ${address}`);
    });
}

startBackend();