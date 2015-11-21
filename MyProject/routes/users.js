var express = require('express');
var router = express.Router();
var util = require("util");

/* GET users listing. */
router.get('/user/:id', function(req, res, next) {
  res.send(util.format('user id: %s', req.params.id));
});

router.get("/user", function(req, res, next){
  res.send("Ok");
});

module.exports = router;
