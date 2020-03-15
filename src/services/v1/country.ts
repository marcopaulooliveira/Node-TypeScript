import {FastifyInstance} from 'fastify'

export = async (fastify: FastifyInstance, opts: any) => {
    fastify.get('/countries', async (request, reply) => {
        reply.send({message: 'Hello World'})
    })

    fastify.route({
        method: 'GET',
        url: '/world',
        handler: function(request, reply) {
            reply.send({hello: 'world'})
        }
    })
}