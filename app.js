var fs= require('fs');
var http= require('http');
console.log('start serving on 8060');
http.createServer(function(request,response){
    
	return response.end('<h1>Congratulations you have successfully completed</h1>');
}).listen(8060);


