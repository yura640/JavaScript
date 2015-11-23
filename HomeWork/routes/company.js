var express = require('express');
var router = express.Router();
var companyData = require('../data.json');

/* GET users listing. */

router.get("/company", function(req, res, next){
    if (req.query.count) {
        var companies = companyData.slice(0, req.query.count);
        res.render("patern", {
            collection: companies,
            title: "Curent Companies"
        });
    } else {
        res.render("patern", {
            collection: companyData,
            title: "ALL Companies"
        });
    }
});
router.get('/company/:id', function(req, res, next) {
  for(var i=0; i<companyData.length; i++){
    if(req.params.id == companyData[i]._id){
      res.render('curentCompany',{
            id: companyData[i].id,
            company: companyData[i].company,
            country: companyData[i].country,
            phone: companyData[i].phone,
            founding_date:  companyData[i].founding_date,
            discription: companyData[i].discription
        });
    }
  }
});

module.exports = router;
