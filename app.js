const express = require('express');
const path = require('path')
const http = require('http');
const logger = require('morgan');
require('dotenv').config();
const appRoute = require('./routes/index')
var cors = require('cors')



/****************** Set up the express app ******************/
const app = express();
const port = process.env.PORT || 8081;
app.set('port', port);
const server = http.createServer(app);
app.use(cors())



/******************* Server listening **********************/
server.listen(port, function (err, data) {
    console.log(`Server running on port ${port}`)
});


/************* Connecting to mongo db database ***********/
(async () =>{
    try{
        await require(path.join(__dirname, 'database', 'mongoose'))();
    }catch(error){
        console.log('Hey, you are in error block in where calling my mongo db connection to make it open once:: ', error);
    }
})()

/*** Log request to console ***/
app.use(logger('dev'));
app.use('/',appRoute)

