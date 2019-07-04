const mongoose = require('mongoose');
module.exports.customers = mongoose.model('customers',{
	"firstname": String,
	"lastname": String
	});
/**
	const Address = mongoose.model('customers_address', {
		"pincode": Number,
		"street": String,
		"city": String
	});
**/
module.exports.customers_address = mongoose.model('customers_address', {
	"pincode": {
		type: Number,
		validate:{
			validator: function(v){
				return `${v}`.length == 6;
			},
			message: '{VALUE} is not a valid pincode!'
		}
	},
	"street": String,
	"city": String
});

