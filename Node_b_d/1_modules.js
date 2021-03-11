/**
 * @Date:   2021-03-11T18:34:32+01:00
 * @Last modified time: 2021-03-11T18:48:21+01:00
 */



/*
1. What is a Module in Node.js?
Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

2. Include Modules
To include a module, use the
'require()' function with the name of the module:
var http = require('http');
*/

/*create a new module
Use the 'exports' keyword to make properties and methods available outside the module file*/

exports.myDateTime = function() {
  return Date();
};
