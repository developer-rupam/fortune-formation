const router = require('express').Router();
const bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');
const schema = require('./services.model');

/************* Setup middleware **********/
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : true}));


/***** Add Service *****/
router.post('/addService',(req,res)=>{
    schema.create({
        service_name : req.body.service_name,
        service_description : req.body.service_description,
        created_by : req.body.created_by,
    },(error,result)=>{
        if(error){
            return res.json({
                status : 500,
                message : 'Failed to create service',
                error : error
            })
        }else{
            return res.json({
                status : 200,
                message : 'Service created successfully',
                result : result,
            })
        }

    })
});

/***********  Update service  *************/
router.post('/updateService',[
    check('_id').not().isEmpty().trim().escape(),
    check('service_name').not().isEmpty().trim().escape(),
    check('service_description').not().isEmpty().trim().escape(),
    check('created_by').not().isEmpty().trim().escape(),
    check('is_active').not().isEmpty().trim().escape(),
],(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            status : 422,
            message : 'Validation error',
            errors: errors.array()
        })
    }
    
    schema.findOneAndUpdate({_id:req.body._id},{$set : {service_name:req.body.service_name,service_description:req.body.service_description,is_active:req.body.is_active}},{returnOriginal : false},(error,result)=>{
        if(error){
            return res.json({
                status : 500,
                message : 'Failed to update service',
            })
        }

        if(result){
            return res.json({
                status : 200,
                message : 'Service created successfully',
                result : result,
            })
         }else{
             return res.json({
                 status : 201,
                 message : 'User not found ',
             })  
         }

    })

})


/************* Exporting module to app.js *************/
module.exports = router;