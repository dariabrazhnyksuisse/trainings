/**
 * @Date:   2021-03-11T21:58:26+01:00
 * @Last modified time: 2021-03-11T21:58:27+01:00
 */
 var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "localhost",
   user: "yourusername",
   password: "yourpassword",
   //Make sure you define the name of the database when you create the connection:
   database: "mydb"
 });

 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Table created");
   });
 });
