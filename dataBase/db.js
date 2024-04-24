const mongoose = require('mongoose')
require('dotenv').config()


const connectDb = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log('data base connected successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb