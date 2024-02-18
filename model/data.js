const { ObjectId} = require('mongodb')
const {Schema, model}= require('mongoose')

const conversion = new Schema({
  value1: String,
  value2: String,
  text1: String,
  text2: String,
  _id: {
    type: ObjectId,
    default: () => new ObjectId()
  }
})

module.exports = model('Conversion' , conversion)