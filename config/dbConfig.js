const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
       await mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    }catch(err) {
        console.log("error connecting to the database");
        console.log(err.message);
    }
}

module.exports = connectDB;