"use strict";
module.exports = async (fastify, opts) => {
    fastify.get('/countries', async (request, reply) => {
        reply.send({ message: 'Hello World' });
    });
    fastify.route({
        method: 'GET',
        url: '/world',
        handler: function (request, reply) {
            reply.send({ hello: 'world' });
        }
    });
};
//# sourceMappingURL=country.js.map