const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('hi,college server');
});
server.listen(3000);