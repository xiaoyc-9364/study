var http = require('http');
var otherfun = require("./models/otherfuns.js");
// console.log(otherfun);

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== '/favicon.ico') {
        otherfun.controller(req, res);
    }
    

}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');