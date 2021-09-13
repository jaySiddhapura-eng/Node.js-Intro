const http = require('http');


// req : incoming request bound to the server
// res : response from the server to the client
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('home page');
        //res.end();
    }
    else if(req.url === '/about'){
        res.write('about section');
        //res.end();
    }
    else {
        res.write(`<h1>Oops</h1> 
        <a href="/"> back home</a>`);
    }
    res.end();
           
});

server.listen(5000);