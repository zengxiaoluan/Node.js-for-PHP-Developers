var http = require('http');
var static = require('node-static');
var file = new static.Server();
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    if (url.parse(req.url).pathname == '/admin') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('admin/index.njs' + util.inspect(req));
    } else {
        file.serve(req, res);        
    }
}).listen(1337, '127.0.0.1');

console.log('running!')