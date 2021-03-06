/**
 * @Date:   2021-03-11T21:21:23+01:00
 * @Last modified time: 2021-03-11T21:28:04+01:00
 */
var http = require('http');
var formidable = require('formidable'); //Parse the Uploaded File
var fs = require('fs')//Save the File

http.createServer(function(req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/User/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
  }
  return res.end();
}).listen(8080);
