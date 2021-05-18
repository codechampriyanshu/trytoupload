const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync('try.html')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent);
});