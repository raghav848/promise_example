const express = require('express')
const app = express();
const request = require('request');
const callbacks = require('./routes/routes.callbacks');
const promises = require('./routes/routes.promises');

app.use('/callback',callbacks);
app.use('/promise',promises);
// let url = 'https://api.github.com/users/narenaryan';

// function getData(url, cb) {
//     // Setting URL and headers for request
//     var options = {
//         url: url,
//         headers: {
//             'User-Agent': 'request'
//         }
//     };
//     request.get(options, function(err, resp, body){
//         console.log(body);
//         cb(err, body)
//     })


// }

// app.get('/',function(req,res){
//     getData(url, function(err, body){
//         res.send(body)
//     })
//     console.log(res);
// })

app.listen(8080,function(){
    console.log('server started !');
})