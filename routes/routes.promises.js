const express = require('express');
const request = require('request');
const router = express.Router();
const profile_url = 'https://api.github.com/users/narenaryan';

function getData(url){
    var options = {
        url: url,
        headers:{
            'User-Agent':'request'
        }
    };


    return new Promise(function(resolve,reject){
        // resolve('hi');
        reject('hi');
        // request.get(options,function(err,resp,body){
        //     if(err) reject(err)
        //     resolve(body)
        // })
    })
}

router.get('/profile',function(req,res){
    let details;
    getData(profile_url).then(function(result){
        console.log(result)
        details = JSON.parse(result);
        console.log(details)
        res.send(details);
    },errHandler(res))
});

var errHandler = function(res){
    res.send('error !');
}

router.get('/followers',function(req,res){
    let details;
    getData(profile_url)
    
    .then(function(result){
        details = JSON.parse(result);
        const followers_url = details['followers_url'];

        return getData(followers_url);
    },errHandler)
    
    .then(function(result1){
        console.log("result1")
        console.log(result1)
        res.send(result1);
    },errHandler(res));

});


module.exports = router;