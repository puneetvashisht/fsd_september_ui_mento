var fs = require('fs');


fs.readFile('./files/test.txt', (err, data)=>{
    console.log(''+ data);
})

testAsync(function(res){
    console.log(res)
})