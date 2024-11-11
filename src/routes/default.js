async function defaultRoutes(fastify, options) {
    fastify.all('/', (request, reply) => {
        return reply.status(200).send({
            status: "OK",
            code: 200
        })
    })
}

module.exports = defaultRoutes;