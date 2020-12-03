const mongoose = require('mongoose');

/**************** Schema for users **********************/
const serviceSchema = mongoose.Schema({
   
    service_name : {
        type : String,
        default: null,
    },
    service_description : {
        type : String,
        default : null,
    },
    created_by : {
        type : String,
        default:null,
    },
    is_active : {
        type : Boolean,
        default : false
    },
    created_on : {
        type : Date,
        default : Date.now()
    }

})



/**** Creating model and exposeing it to app ****/
module.exports = mongoose.model('services',serviceSchema);
