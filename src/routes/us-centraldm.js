async function usCentralDomain(fastify, options) {
    fastify.get('/v4710_remoteConfig/fetch', (request, reply) => {
        // that goddamn json took ages to fix
        reply.status(200).send(require("../responses/remoteconfigunmodified.json"));
    })

    fastify.post('/v4710_battlePass/getActivePassConfig', (request, reply) => {
        reply.status(200).send(require("../responses/activePassConfig.json"));
    })

    fastify.post('/v4710_progressionEvents/getActiveEventConfig', (request, reply) => {
        reply.status(200).send(require("../responses/activeEventConfig.json"));
    })

    fastify.post('/v4710_albums/getActiveAlbumConfig', (request, reply) => {
        reply.status(200).send(require("../responses/activeAlbumConfig.json"));
    })

    fastify.post('/v4710_battlePass/refreshBattlePass', (request, reply) => {
        reply.status(200).send(require("../responses/refreshBP.json"));
    })

    fastify.get('/v4710_challenges/getChallengesData', (request, reply) => {
        reply.status(200).send(require("../responses/challengesData.json"));
    })

    fastify.get('/v4710_player/login', (request, reply) => {
        reply.status(200).send(require("../DefaultProfiles/loginProfile.json"));
    })

    fastify.get('/v4710_friends', (request, reply) => {
        reply.status(200).send(require("../DefaultProfiles/friends.json"));
    })

    fastify.get('/v4710_player/getRegionInfo', (request, reply) => {
        reply.status(200).send({
            "Country": "GB",
            "Region": "",
            "AgeGateLimit": 18,
            "HasAgeGate": true,
            "IsBlocked": false
        });
    })

    const getFormattedDate = () => {
        const date = new Date();
        return date.toUTCString();
    };

    fastify.get('/v4710_userSettings/time', (request, reply) => {
        reply.status(200).send(getFormattedDate());
    })

    fastify.get('/v4710_leaderboards/getLeaderboardsData', (request, reply) => {
        reply.status(200).send(require("../responses/leaderboardsData.json"));
    })

    fastify.post('/v4710_analytics', {
        bodyLimit: 10485760
    }, (request, reply) => {
        reply.status(200).send({
            "status": "OK",
            "code": 200
        })
    });

    fastify.post('/game-event-stream/authenticated/events/file', (request, reply) => {
        reply.status(200).send({
            "status": "OK",
            "code": 200
        })
    })
}

module.exports = usCentralDomain;