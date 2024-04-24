const express = require('express')
const connectDb = require('./dataBase/db')
const studentRoute = require('./routes/studentRoute')
const bodyParser = require('body-parser')
connectDb()



const app = express()
require('dotenv').config()
const port = process.env.PORT





app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(studentRoute)






app.listen (port, ()=>{
    console.log('server stated successfully')
})