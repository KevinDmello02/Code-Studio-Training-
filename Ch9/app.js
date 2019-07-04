const Hapi = require('hapi');
const constants = require('./constants');
const routes = require('./routes');
const plugins = require('./plugins');
const port = constants.port;
const server = new Hapi.Server({ port });
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(constants.mongodb.url, function(err, client){
	if(err)
		throw err;
	console.log("Connected Successfully to mongodb server");
});
server.route(routes);
server.register(plugins.mongoConnect)
	.then(() => {
		server.start();
	})
	.catch((err) => {
		console.log("error",err);
	})
console.log(`Server Running at: ${server.info.uri}`);