const Hapi = require('hapi');
const routes = require('./routes');
const plugins = require('./plugins');
const constants = require('./constants');
const port = constants.port;
const server = new Hapi.Server({ port });

server.register(plugins.mongoConnect)
.then(() => {
	server.start();
	server.route(routes);
})
.catch((err) => {
	console.log("error",err);
})
console.log(`Server Running at: ${server.info.uri}`);