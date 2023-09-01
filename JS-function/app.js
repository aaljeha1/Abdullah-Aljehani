const fs = require('fs');
const http= require('http');

const port = 8080;
const host = 'localhost';

const server = http.createServer((req,res)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            console.log('url::'+req.url);

            let path= './';
            if(req.url==='/contact'){
                path=path+ 'views/contact.html';
            }
            else if(req.url==='/about'){
                path=path+ 'views/about.html';
            }
            else{
                path=path+ 'views/404.html';
            }


            fs.readFile(path,(err,data)=>{
                if(err){
                    console.log(err);
                    res.end();
                }
                else{
                    res.write(data);
                    res.end();
                }

            });

});

server.listen(port, host, () =>{
        console.log('the server is running at port',port);
});