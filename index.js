const express = require("./lib/app");
const parseJson = require("./lib/parseJson");
const urlParser = require("./lib/urlParser");
const bodyParser = require("./lib/bodyParser");
const user = require("./routers/router");

const app = new express();
app.use(urlParser("http://localhost:3001"));
app.use(parseJson);
app.use(bodyParser);
app.addRouter(user);


app.listen(3000, ()=> {
	console.log("Listining port 3000")
})
//todo