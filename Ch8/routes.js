module.exports = [{
	method: 'GET',
	path:'/greetings',
	handler: function(request, h) {
		return `<b>hello readers!</b>`;
	}
}]