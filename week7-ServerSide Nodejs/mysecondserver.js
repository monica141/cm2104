<<<<<<< HEAD

//This tells node to use our new module
//and then our myDateTime function
=======
>>>>>>> be3d48b5d303a5fd4acc574d93aa97443466de95
var http = require('http');
var currentdate = require('./mymodule');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + currentdate.myDateTime());
 res.end('Hello World!');
}).listen(8080);