var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {
    'Content-Type': 'text/html'
});
 res.end('Hello World!');
})
.listen(8080);

//This tells node to use our new module
//and then our myDateTime function
var http = require('http');
var currentdate = require('./mymodule');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + currentdate.myDateTime());
 res.end('Hello World!');
}).listen(8080);
