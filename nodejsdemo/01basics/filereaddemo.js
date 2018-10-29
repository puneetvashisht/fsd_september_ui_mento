var fs = require('fs');


console.log('starting of flow...')
fs.readFile('./files/config.json', (err, config)=>{
    console.log(''+ config);
    console.log(config)
    var config = JSON.parse(config);
    console.log(config.ip);
    console.log(config.port)

})


console.log('finishing the flow...')
