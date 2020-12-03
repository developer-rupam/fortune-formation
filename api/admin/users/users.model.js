const mongoose = require('mongoose');

/**************** Schema for users **********************/
const userSchema = mongoose.Schema({
   
    name : {
        type : String,
        default: null,
    },
    email : {
        type : String,
        default : null,
        unique : true
    },
    password : {
        type : String,
        default : null
    },
    user_type : {
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
module.exports = mongoose.model('users',userSchema);
