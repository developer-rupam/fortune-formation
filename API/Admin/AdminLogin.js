
/*** importing variables from init ***/ 
const init=require('../utils/init');

/*** importing database ****/
const db = require('../dbConfig');

/*** Initializing router ***/
const router = require('express').Router();

/*** importing library file ***/
const library = require('../utils/library');

/*** importing variable form code ***/
const code = require('../utils/code');

const collection = 'admin';

/*** Initialing API response object ***/
let response={error:{},result:{}};

/*** login using post ***/
router.post('/',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(email!='' && password!=''){
        
        db.getDb().collection(collection).find({email:email,password:password}).toArray((err,document)=>{
            if(err){
                response.error.error_data=code.FAILURE;
                response.error.error_msg=err;
                library.resultData(response,res);
            }else{
                //res.json({result : result,document : result.ops[0]}); 
               response.error.error_data=code.SUCCESS;
               response.error.error_msg='';
                response.result=document;
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