
/*
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file.
*/

var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
