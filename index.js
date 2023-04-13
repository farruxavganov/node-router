const express = require("./expreslib/app");
const parseJson = require("./expreslib/parseJson");
const urlParser = require("./expreslib/urlParser");
const bodyParser = require("./expreslib/bodyParser");
const user = require("./routers/router");

const app = new express();
app.use(urlParser("http://localhost:3001"));
app.use(parseJson);
app.use(bodyParser);
app.addRouter(user);


app.listen(3001, ()=> {
	console.log("Listining port 3000")
})