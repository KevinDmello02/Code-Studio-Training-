exports.logRequest = {
	register(server, options){
		console.log("A plugin got called!");
		server.ext('onRequest', (request, reply)=>{
		console.log("Listening to request!");
		const path = request.url.path;
		const target = request.url.query.target;
		console.log(`The target is ${target} for url : ${path}`);
		return reply.continue;
		})
	},
	name : "logRequest"
}