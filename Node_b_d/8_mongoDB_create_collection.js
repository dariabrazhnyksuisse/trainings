/**
 * @Date:   2021-03-11T22:12:47+01:00
 * @Last modified time: 2021-03-11T22:12:57+01:00
 */
 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";

 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   dbo.createCollection("customers", function(err, res) {
     if (err) throw err;
     console.log("Collection created!");
     db.close();
   });
 });
