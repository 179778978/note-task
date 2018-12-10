const SafeRequest = require("../utils/SafeRequest")


class Request{
	getData(){
		const safeRequest = new SafeRequest('book/index')
		return safeRequest.fetch({})
	}

	saveData(options){
		const safeRequest = new SafeRequest("book/create")
		return safeRequest.fetch({
			method:"post",
			params:options.params
		})
	}

	searchData(options){
		const safeRequest = new SafeRequest("book/index")
		return safeRequest.fetch({
			method:"post",
			params:options.params
		})
	}
}

module.exports = Request