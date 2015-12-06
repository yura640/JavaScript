var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/mydb", function(err, db){
    var collection = db.collection("first_collection");
});