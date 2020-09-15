/*** Initializing App *****/
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
const path = require('path');

const db = require('./dbConfig');
const init = require('./utils/init')
const collection = "fortune_formation";
module.exports = collection;




db.connect((err)=>{
    if(err){
        console.log('Unable to connect to database');
        process.exit(1);
    }else{
        app.listen(init.PORT,()=>{
            console.log('Database connected successfully, app listening on port ' + init.PORT);
        });
    }
});

 app.use('/Admin/AdminLogin',require('./Admin/AdminLogin'));
 app.use('/Admin/AddAdmin',require('./Admin/AddAdmin'));
