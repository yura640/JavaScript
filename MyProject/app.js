var express = require('express');
var swig = require("swig");
var http = require("http");
var user = require("./routes/users");

var app = express();

app.engine("html", swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(user);

swig.setDefaults({
    cache: false
});

var route = app.route("/user");

route.get(function (req, res, next) {
    res.send("Ok");
});

http.createServer(app).listen(process.env.PORT || 3000);

app.use(function(req, res){
    res.status(404).send("Page not found");
});

app.use(function(err, req, res, next){
    if(app.get("env") == "development"){
        res.render("index", {
            title: "Error page",
            message: err.message,
            stack: err.stack
        });
    } else {
        res.send("Sorry :((");
    }
});

//
//module.exports = app;