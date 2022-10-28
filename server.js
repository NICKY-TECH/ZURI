const http=require('http');

const fs=require('fs');

const path=require('path');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readFile(path.join(__dirname,'.','views','home.html'),'utf8',((err,data)=>{
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
           return  res.end(data)
        }))
        
    }
    else if(req.url=='/contact'){
            fs.readFile(path.join(__dirname,'.','views','contact.html'),'utf8',((err,data)=>{
                res.writeHead(200,{
                    'Content-Type':'text/html'
                });
              return   res.end(data)
            }))
    }
    else if(req.url=='/about'){
            fs.readFile(path.join(__dirname,'.','views','about.html'),'utf8',((err,data)=>{
                res.writeHead(200,{
                    'Content-Type':'text/html'
                });
                return  res.end(data)
            }))
    }else if(req.url=='/home'){
        res.writeHead(302, {
            'Location': '/',
            'Content-Type':'text/html'
          });
          res.end();

    }

});

server.listen(3000,()=>{
    console.log('server running on port 3000');
})