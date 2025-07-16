const http = require('http');
const server = http.createServer((req,res)=> {
    if(req.url==='/'){
        res.end('welcome to the home page');
    }else if(req.url==='/ about me'){
        res.end(' About us, welcome to the  college');
    }else if(req.url==='/ about me'){
        res.end('meet the friends and staff');
    }else{
        res.end('routes are matching');
    }
});

server.listen(4000);