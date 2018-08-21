const express = require('express');
const request = require('request');
const router = express.Router();
const profile_url = 'https://api.github.com/users/narenaryan';

function getData(url, cb) {
    // Setting URL and headers for request
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };
    request.get(options, function(err, resp, body){
        // cb(err, body);
        var error = "Server Crashed! ";
        cb(error);
    })


}

router.get('/profile',function(req,res){

    getData(profile_url,function(err,body){
        if(err) res.status(500).send(err)
        res.status(200).send(body);
    });
});



router.get('/followers',function(req,res){
    getData(profile_url,function(err,body){
        if(err) res.status(500).send(err);
        	
        let details = JSON.parse(body);
        
        let followers_url = details.followers_url;

        getData(followers_url,function(err,body){
            if(err) res.send('Error !');
            let followers = JSON.parse(body);
            res.send(followers);
        })    
    });
});



module.exports = router;