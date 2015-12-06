var express = require('express');
var router = express.Router();
var companyData = require('../data.json');

router.get("/company", function(req, res, next) {
    if (req.query.confirmName) {
        for (var i = 0; i < companyData.length; i++) {
            if (req.query.confirmName == companyData[i].company) {
                res.render("curentCompany", {
                    id: companyData[i]._id,
                    company: companyData[i].company,
                    country: companyData[i].country,
                    phone: companyData[i].phone,
                    founding_date: companyData[i].founding_date,
                    discription: companyData[i].discription
                })
            }
        }
        console.log("1");
    }
    if (req.query.count) {
        var companies = companyData.slice(0, req.query.count);
        res.render("patern", {
            collection: companies,
            title: "Curent Companies"
        });
        console.log("2");
    }
    if (req.query.companyName){
        //console.log(req.query.companyName);
        var reqLenght = req.query.companyName.length;
        var reqCompanyName = req.query.companyName.toLowerCase();
        var resArray = [];
        for(var i=0; i<companyData.length; i++){
          if(reqCompanyName == companyData[i].company.toLowerCase().substring(0, reqLenght)){
              resArray.push(companyData[i].company);
                //console.log(req.query.companyName)
            }
        }
         res.json(resArray);
        console.log("3");
    //} if (req.query == undefined)  Здесь должно быть условие при котором выводится весь список!!!
    //     {
    //    res.render("patern", {
    //        collection: companyData,
    //        title: "ALL Companies"
    //    });
    //    console.log("4")
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
