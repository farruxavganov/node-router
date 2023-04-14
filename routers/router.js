const Router = require("../lib/router");

const user = new Router();

user.get("/user", (req, res) => {
	console.log(req.params)
	res.send({name: "farrux"})
})
user.post("/user", (req, res) => {
	
})

module.exports = user;