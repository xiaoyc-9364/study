var http = require('http');
var url = require('url');
var router = require('./models/touter');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== '/favicon.ico') {
        pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        // console.log(router.login);
        router[pathname](req, res);
        // res.end();
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
