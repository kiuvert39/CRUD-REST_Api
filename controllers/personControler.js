const Personmodule = require('../module/Person')
const {body , validationResult} = require('express-validator')

const validateInput =[
    body('name').isAlphanumeric().trim()
 ]

const createPerson = async(req, res) =>{

   try{
       const errors = validationResult(req)
        if(!errors.isEmpty()){
          return res.status(400).json({errors: errors.array()})
       }
      const person =  Personmodule( req.body)
      await person.save()
      .then(person =>{
         res.status(200).json(person)
         })
      .catch(error => {
         res.status(400).json({msg:"an error occured while saving"})
         res.json(error)})
   }
   catch(error){
    res.status(400).json({error:'name is required'})
   }

}
const getPerson = async (req, res) =>{
   try{ 
        const findPerson = await Personmodule.find({})
        .then(result => res.status(200).json(result))
        .catch(err => res.json({err:"person note found"}))
    }catch{
       res.status(400).json({error:'name is required'})
        
    }
 }

 const updatePerson = async( req, res) =>{
   
   try{
    const id = req.params.id
    const updatePerson = req.body
    await Personmodule.findByIdAndUpdate({_id:id},updatePerson)
    .then((updatedPerson) =>{
      if(!updatedPerson){ return res.status(400).json({msg:"person id not correct "})}
      res.status(200).json({msg:"person updated successfully",Personmodule:updatedPerson})
    })
    .catch((error)=>{
      res.status(400).json({msg:"unable to update person ",error})
    })
   }catch(error){
      
      res.status(400).json({msg:"unable to update person ",error})
   }
}

 const deletePerson = async(req, res) =>{
   try{
      const id = req.params.id
        Personmodule.findByIdAndDelete(id)
    
      .then( (deletPerson) =>{
         if(!deletPerson){ return res.status(400).json({msg:"person id not found"})}
        res.status(200).json({msg:"person deleted successfully",Personmodule:deletPerson})
      })
      .catch((error) =>{
         res.status(500).json({msg:"id not valide ",error})
      })
     
   }
   catch(error){
      res.status(400).json({msg:"unable to delete person ",error})
   }

 }


module.exports = {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
    validateInput
}