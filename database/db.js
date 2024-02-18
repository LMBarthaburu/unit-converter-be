require('dotenv').config()
const mongoose = require ('mongoose')
const uri = process.env.MONGODB_URI

const connectDB = async () =>{
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}

connectDB()