var express = require('express');
var swig = require('swig');
var http = require('http');
var app = express();
app.engine("html", swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
http.createServer(app).listen(process.env.Port||8000);

app.use(function(req, res, next){
  if (req.url == "/user") {
    res.send(200, "Hello User");
  } else {
      next();
  }
});

app.use(function(req, res, next){
    if(req.url == "/somepage"){
        throw new Error("some error222");
    } else {
        next();
    }
});

app.use(function (err, req, res, next){
    if (app.get("env") == "development"){
        res.status(500).render("index.html",{
            title: "Error page",
            message: err.message,
            stack: err.stack
        });
    } else {
        res.send("sorry ((");
    }
});

//module.exports = app;
