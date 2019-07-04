const Hapi = require('hapi');
const port = 5000;

const server = new Hapi.Server({
	port
});
server.start();
console.log(`Server running at: ${server.info.uri}`);