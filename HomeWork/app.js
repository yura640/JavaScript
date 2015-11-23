var express = require('express');
var http = require('http');
var app = express();
var swig = require('swig');
var user = require("./routes/company");
app.engine("html", swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(user);

swig.setDefaults({
    cache: false
});

http.createServer(app).listen(process.env.Port||8000);



//module.exports = app;
