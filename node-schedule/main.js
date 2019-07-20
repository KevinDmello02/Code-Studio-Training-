const Hapi = require('hapi');
const mysql = require('mysql');
const schedule = require('node-schedule');

//creating connection

const db = mysql.createConnection({
	host	: "localhost",
  	user	: "root",
  	password: "root",
  	database: "test_db"
});

//connect db

db.connect(function(err){
	if(err){
		throw err;
	}
	console.log('Successfully Connected to Mysql Database!');
});


var s1 = schedule.scheduleJob('*/30 * * * * *', function(){
	let sql = "SELECT First_Name FROM Employee"
	let query = db.query(sql, function(err, result){
			if(err) throw err;
			console.log(result);
		});
	console.log('schedule1 is on time');
});

var s2 = schedule.scheduleJob('*/1 * * * *', function(){
	let sql = "SELECT Last_Name FROM Employee"
	let query = db.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
	console.log('schedule2 is on time');
});

var s3 = schedule.scheduleJob('*/2 * * * *', function(){
	let sql = "SELECT First_Name, Last_Name FROM Employee"
	let query = db.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
	console.log('schedule3 is on time');
})
s1.schedule();
s2.schedule();
s3.schedule();