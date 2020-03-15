"use strict";
const Fastify = require('fastify');
const app = Fastify({});
app.register(require('./app'));
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server is up and running on port 3000...');
});
module.exports = app;
//# sourceMappingURL=server.js.map