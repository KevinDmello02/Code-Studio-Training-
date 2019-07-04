const Hapi = require('hapi');
const constants = require('./constants');
const port = constants.port;

const server = new Hapi.Server({
	port
});

server.route({
	method:'GET',
	path:'/welcome',
	handler(request, h) {
		return 'Hello Node!';
	}
})
server.start();
console.log(`Server running at: ${server.info.uri}`);

