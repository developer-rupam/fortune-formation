const mongoose = require('mongoose');

/*** Defining database credentials to setup mongo db connection ***/
module.exports = async () => {
    try{
        await mongoose.connect('mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_DATABASE,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true 
          })
          console.log('Yes, Mongo DB connected successfully, have fun!');
    }catch(error){
        console.error('Error connecting the database : '+error)
    }
}