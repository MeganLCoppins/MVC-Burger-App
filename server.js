const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
// static content for app
app.use(express.static("public"));
// parse app body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server so it begins listening to client requests
app.listen(PORT, function(){
    // log when server has started
    console.log("Server listening on: http://localhost:" + PORT);
})