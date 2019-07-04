const MongoClient = require('mongoose');
const constants = require('./constants');


exports.mongoConnect = {
	register(server, options){
		return MongoClient.connect(constants.mongodb.url)
		.then(function(client){
			console.log("Connected successfully to mongodb server");
			/**
			server.ext('onRequest', (request, reply)=>{
				request.dbInstance = client.db('test');
				return reply.continue;
			})
			**/
		return;
	})
.catch(function(err){
	console.log("An error occurred while connecting to mongodb!", err)
	return
})
},
name : "mongoConnect"
}