const mongoose = require('mongoose')

const personSchema= new mongoose.Schema({
   name:{
    type:String,
    required:true
   }
})

const Personmodule = mongoose.model("person", personSchema)
module.exports = Personmodule