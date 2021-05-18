const http=require('http');
const fs = require('fs');

const hostname='127.0.0.1';
const port=3000;
const home=fs.readFileSync('./try.html');
const about=fs.readFileSync('./try.html');
const services=fs.readFileSync('./try.html');
const contact=fs.readFileSync('./try.html');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;

    res.statuscode =200;
    res.setHeader('content-type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url='/about'){
        res.end(about);
    }
    else if(url='/services'){
        res.end(contact);
    }
    else{
        res.ctatuscode=404;
        res.end("<h1>404 error found</h1>");;
    }

});

server.listen(port,hostname ,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});