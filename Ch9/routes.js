const Boom = require('boom');
const models = require('./model');

module.exports = [{
	method: 'POST',
	path:'/customer/add',
	handler(request, h) {
		const requestBody = request.payload;
		return (async ()=>{
			try{
				/**
				* Native mongodb code
				* const dbInstance = request.dbInstance;
				* const customerCollection =
				dbInstance.collection('customer');
				* return customerCollection.insert(requestBody)
				**/
				const customersModel = models.customers;
				const customersModelInstance = new models.customers(requestBody);
				let error = new models.customers_address(requestBody).validateSync();
				if(error)
					return Boom.boomify(error, { statusCode: 422 });
				
				await customersModelInstance.save();
				const customerList = await customersModel.find({});
				return {
					message : "customer added successfully",customerList};
				}catch(e){
					console.log(e.stack);
					throw Boom.boomify(e, {statusCode: 500});
				}
		})();
	}
}]
