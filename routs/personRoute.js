const express = require('express')
const router = express.Router()
const personController = require("../controllers/personControler")

router.post("/",personController.validateInput, personController.createPerson)
router.get("/user_id", personController.getPerson)
router.put("/user_id/:id",personController.validateInput, personController.updatePerson)
router.delete("/user_id/:id", personController.deletePerson)
       
module.exports = router