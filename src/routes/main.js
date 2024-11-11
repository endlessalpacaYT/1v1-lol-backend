// TODO: Check for the headers, such as auth header cuz i noticed it in the request on one
/*
the ones which have this response
reply.status(200).send({
    "status": "OK",
    "code": 200
});
are the ones which i couldnt figure out
*/
async function main(fastify, options) {
    fastify.post('/external-user-registration-service/public/registration/external-token', (request, reply) => {
        const { externalToken } = request.body;

        if (!externalToken) {
            reply.status(200).send({
                "installationToken": "Lightning",
                "loginToken": "Lightning",
                "firstRegistration": false
            });
        }

        reply.status(200).send({
            "installationToken": externalToken,
            "loginToken": externalToken,
            "firstRegistration": false
        });
    });

    fastify.post('/login-service/v2/login/mobile', (request, reply) => {
        const {
            clientLanguage,
            clientType,
            clientVersion,
            containerType,
            loginToken,
            marketType,
            platformType,
            timeZone
        } = request.body;

        if (!loginToken) {
            reply.status(200).send({
                "refreshToken": "Lightning",
                "sessionToken": "Lightning",
                "userReferenceId": "Lightning"
            });
        }

        reply.status(200).send({
            "refreshToken": loginToken,
            "sessionToken": loginToken,
            "userReferenceId": "Lightning"
        });
    });

    fastify.post('/login-tracking-service/public/v2/track/android', (request, reply) => {
        const {
            clientTime,
            clientType,
            guid,
            idForAdvertiser,
            osName,
            osVersion,
            wifi
        } = request.body;

        reply.status(200).send({
            "status": "OK",
            "code": 200
        });
    });

    fastify.post('/popups-service/public/popups/trigger', (request, reply) => {
        const { triggers } = request.body;
        reply.status(200).send({
            "triggeredPopups": []
        })
    })

    fastify.get('/login-service/me', (request, reply) => {
        // noticed the auth header in this one
        reply.status(200).send({
            "activeCredentialTypes": [
                "externalUserId",
                "installationId"
            ],
            "credentialType": "externalUserId",
            "credentialValue": "Lightning",
            "sessionId": "Lightning",
            "userId": "Lightning",
            "userReferenceId": "Lightning"
        })
    })

    fastify.post('/messaging-nucleus/public/match', (request, reply) => {
        reply.status(200).send({
            "status": "OK",
            "code": 200
        });
    })

    fastify.post('/client-event-stream/authenticated/events/file', (request, reply) => {
        reply.status(200).send({
            "status": "OK",
            "code": 200
        });
    })

    fastify.post('/client-event-stream/non-authenticated/events/file', (request, reply) => {
        reply.status(200).send({
            "status": "OK",
            "code": 200
        });
    })
}

module.exports = main;