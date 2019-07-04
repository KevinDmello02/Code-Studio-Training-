const http = require('http');
const Constants = require('./constants');
const port = Constants.port;

http.createServer((req,res) =>{
	res.end("Hello Node");
}).listen(port);

console.log(`Node is running at port:${port}`)