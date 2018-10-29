const http = require('http');
const fs = require('fs')

var port = 8080

// READ config file to read port and assign to a var port
// fs.readFile('./files/config.json', (err, config)=>{
//     console.log(''+ config);
//     console.log(config)
//     var config = JSON.parse(config);
//     console.log(config.ip);
//     console.log(config.port)
//     port = config.port
// })
var config = fs.readFileSync('./files/config.json')
var config = JSON.parse(config);
port = config.port;

const server = http.createServer((req, res)=> {
    console.log(req.url)
    fs.readFile('./files'+ req.url, (err, data)=>{

        if(err){
            console.log(err);
            res.statusCode = 404
            res.end('Page Not Found!!')
        }
        else{
            res.statusCode = 200
            res.end('' + data)
        }    
    })
})
// use the var port
server.listen(port, ()=> console.log('listening on port : ' + port));