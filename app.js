const express = require('express')
const app = express();
const request = require('request');
const callbacks = require('./routes/routes.callbacks');
const promises = require('./routes/routes.promises');
const async = require('./routes/routes.async')

app.use('/callback',callbacks);
app.use('/promise',promises);
app.use('/async',async);

app.listen(8080,function(){
    console.log('server started !');
})