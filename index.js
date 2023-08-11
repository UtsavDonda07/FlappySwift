
const http=require('node:http');

const server=http.createServer(function(req,resp){
     
        resp.writeHead(200,{'Content-Type':'text/html'});
        resp.write('<h1>hello world</h1>');
        resp.end();
});


server.listen(3000);
