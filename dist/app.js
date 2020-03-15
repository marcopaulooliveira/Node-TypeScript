"use strict";
const autoload = require("fastify-autoload");
const path = require("path");
module.exports = async (fastify, opts) => {
    fastify.register(autoload, {
        dir: path.join(__dirname, 'services'),
        options: { prefix: 'api/' }
    });
    fastify.ready().then(() => {
        console.log(fastify.printRoutes());
    });
};
//# sourceMappingURL=app.js.map