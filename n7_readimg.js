var http = require('http');
var optfile = require('./models/optfile');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'iamge/jpeg'});
    if (req.url !== '/favicon.ico') {
        console.log('访问');
        optfile.readImg('./rhino.jpg', res);
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
