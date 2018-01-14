var http = require('http');
var optfile = require('./models/optfile');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== '/favicon.ico') {
        console.log('访问');
        res.write('hello world!');
        // optfile.readfile('./abc.txt');
        optfile.readfileSync('./abc.txt');
        console.log('我应该在abc后面');
        res.end('我是end');
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
