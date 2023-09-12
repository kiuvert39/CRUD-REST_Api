const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const connectDb = require('./config/dbConfig')
const personRoute = require('./routs/personRoute')
const app = express()
const PORT = 3000
connectDb()

app.use(express.json())
app.use(cors())
app.use("/api",personRoute)

app.all('*', (req, res) =>{
    res.status(400).send("route not found")
})

mongoose.connection.once("open",() =>{
    console.log("connected to database");
    app.listen(PORT,()=>console.log(`listening at ${PORT}`))
})
