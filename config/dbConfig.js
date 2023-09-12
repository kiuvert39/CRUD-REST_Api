const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
       await mongoose.connect('mongodb://127.0.0.1:27017/person',{useNewUrlParser:true,useUnifiedTopology:true})
    }catch(err) {
        console.log("error connecting to the database");
        console.log(err);
    }
}

module.exports = connectDB