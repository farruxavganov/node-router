const http = require("http");
const EventEmitter = require("events");

class App {
	constructor() {
		this.event = new EventEmitter();
		this.server = this._createServer();
		this.medillwhers = [];
	}

	_createServer() {
		return http.createServer((req,res) => {
			this.medillwhers.forEach(medillwher => {
						medillwher(req, res);
			})
			const bool = this.event.emit(this._createMaska(req.pathname, req.method), req, res);
			if(!bool){
				res.end("topilmadi")
			}
		})
	}

	listen(port, callback) {
		this.server.listen(port, callback);
	}

	use(medillwhers) {
		this.medillwhers.push(medillwhers);
	}

	addRouter(router) {
		Object.keys(router.endpoints).forEach(path => {
			const endpoint = router.endpoints[path];
			Object.keys(endpoint).forEach(method => {
				const handler = endpoint[method];
				this.event.on(this._createMaska(path, method), (req, res) => {
					req.on("end", () => {
						handler(req,res);
					})
				})
			})
		})
	}

	_createMaska(path, method) {
		return `[${path}]:[${method}]`
	}
}

module.exports = App;