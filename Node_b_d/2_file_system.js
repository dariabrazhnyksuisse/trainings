/**
 * @Date:   2021-03-11T20:29:50+01:00
 * @Last modified time: 2021-03-11T20:40:53+01:00
 */



var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('0_demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();




  });
}).listen(8080);
