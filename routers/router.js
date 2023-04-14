const Router = require("../lib/router");

const user = new Router();

user.get("/user", (req, res) => {
	res.send({name: "farrux"})
})
user.post("/user", (req, res) => {
	
})

module.exports = user;