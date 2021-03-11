/**
 * @Date:   2021-03-11T22:08:38+01:00
 * @Last modified time: 2021-03-11T22:10:12+01:00
 */
 var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "localhost",
   user: "yourusername",
   password: "yourpassword",
   database: "mydb"
 });

 con.connect(function(err) {
   if (err) throw err;
   var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log(result);
   });
 });
