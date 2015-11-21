var express = require('express');
var router = express.Router();
var myJson = require('/home/yura/work/HomeWork/data.json');


/* GET users listing. */

router.get("/company", function(req, res, next){
    if (req.query.count) {
        myJson.length = req.query.count;
        res.render("shablon", {
            collection: myJson,
            title: "Curent Companies"
        });
    } else {
        res.render("shablon", {
            collection: myJson,
            title: "ALL Companies"
        });
    }
});
router.get('/company/:id', function(req, res, next) {
  for(var i=0; i<myJson.length; i++){
    if(req.params.id == myJson[i]._id){
      res.render('companyShablon',{
            id: myJson[i].id,
            company: myJson[i].company,
            country: myJson[i].country,
            phone: myJson[i].phone,
            founding_date:  myJson[i].founding_date,
            discription: myJson[i].discription
        });
    }
  }
});

module.exports = router;
