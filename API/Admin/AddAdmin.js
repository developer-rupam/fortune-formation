/*** importing variables from init ***/ 
const init=require('../utils/init');

/*** importing database***/
const db = require('../dbConfig');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing helper file ***/
const library = require('../utils/library');

/*** importing variable form code ***/
const code = require('../utils/code');


const collection = 'admin';

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
    const adminName = req.body.name;
    const adminEmail = req.body.email;
    const adminPassword = req.body.password;
    const adminCreated = Math.floor(new Date()/1000);
    const isAdminActive = true;

    if(adminName!=undefined && adminEmail!=undefined && adminPassword != undefined ){

        db.getDb().collection(collection).insert({name:adminName,email:adminEmail,password:adminPassword,created:adminCreated,active_status:isAdminActive},(err,result)=>{
            if(err){
                response.error.error_data=code.FAILURE;
                response.error.error_msg=err;
                library.resultData(response,res);
            }else{
                //res.json({result : result,document : result.ops[0]}); 
               response.error.error_data=code.SUCCESS;
               response.error.error_msg='';
               response.result=result.ops[0];
               library.resultData(response,res);
            }
        });
    }else{
        response.error.error_data=1;
        response.error.error_msg='All fields must be field with values';
        library.resultData(response,res);
    }
    
});

module.exports = router;