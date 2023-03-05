const dotenv = require("dotenv")
const mongoose = require('mongoose')
const express = require('express')
const app = express()
// const cors = require('cors')

// app.use(cors)


dotenv.config({path:'./config.env'})
require('./db/conn')
//const User = require('./model/userSchema')

//with this we can receive json data 
app.use(express.json())

//we link the router files
app.use(require('./router/auth'))

const PORT = process.env.PORT


//Middleware

const middleware = (req,res,next) => {
    console.log('My middleware')
    next()
}


// app.get('/',(req,res) => {
//     res.send("Hello World from the server app.js")
// })

// app.get('/download', middleware, (req,res) => {
//     res.send("Hello World from the server")
// })

app.get('/Intro',(req,res) => {
    res.cookie("Gaven", "'Luffy")
    res.send("Hello World from the server")
})

app.get('/Form',(req,res) => {
    res.send("Hello World from the server")
})

app.get('/registration',(req,res) => {
    res.send("Hello World from the server")
})

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})