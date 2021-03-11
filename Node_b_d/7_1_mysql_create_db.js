/**
 * @Date:   2021-03-11T21:52:44+01:00
 * @Last modified time: 2021-03-11T22:01:43+01:00
 */



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Create a database named "mydb":
  //Use SQL statements to read from (or write to) a MySQL database. 
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
