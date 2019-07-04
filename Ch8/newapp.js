const Hapi = require('hapi');
const constants = require('./constants')
const routes = require('./routes');
const port = constants.port;

const server = new Hapi.Server({
	port
});

server.route(routes);
server.start();
console.log(`Server running at: ${server.info.uri}`);