const express = require('express');
const request = require('request');
const router = express.Router();
const profile_url = 'https://api.github.com/users/narenaryan';

function getData(url){
    var option = {
        url: url,
        headers: {
            'User-Agent':'request'
        }
    };
    return "yo"

    // return new Promise(function(resolve,reject){
    //     request.get(option,function(err,resp,body){
    //         if(err) reject(err)
    //         resolve(body)
    //     });
    // });

}

router.get('/profile',async function(req,res){
    try
    {
       let result = await getData(profile_url);
       let details = result;
    //    let details = JSON.parse(result);
       res.send(details);
    }
    catch(err)
    {
        res.status(500).send('error !')
    }
});

router.get('/followers',async function(req,res){
    let details;
    try
    {
        let result = await getData(profile_url);
        result = 'haha'
         result = JSON.parse(result);
        let result1 = await getData(details.followers_url);
        details = JSON.parse(result1);
        res.send(details);
     }
     catch(err)
     {
         res.status(500).send('Error: '+ err)
     }
    
});

module.exports = router;
