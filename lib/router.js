class Router {
	constructor() {
		this.endpoints = {};
	}

	requests(path, method, handler) {
		if(!this.endpoints[path]){
			this.endpoints[path] = {}
		}

		const endpoint = this.endpoints[path];

		if(endpoint[method]){
			throw new Error("bu method oldin royxatda bor")
		}

		endpoint[method] = handler
	}

	get(path, handler){
		this.requests(path, "GET", handler)
	}
	post(path, handler){
		this.requests(path, "POST", handler)
	}
}

module.exports = Router;