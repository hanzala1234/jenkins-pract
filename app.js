var fs= require('fs');
var http= require('http');
console.log('start serving on 8060');
http.createServer(function(request,response){
    
	return response.end('Hello world');
}).listen(8060);

