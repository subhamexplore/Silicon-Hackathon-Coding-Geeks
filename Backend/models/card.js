const mongoose = require('mongoose')
const card = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Title Must be provided'],
    maxlength: [10, 'Title cant be more than 10 characters'],
  },
  description: {
    type: String,
    required: [true, 'description Must be provided'],
    maxlength: [50, 'description cant be more than 50 characters'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount must be specified'],
  },
  day: {
    type: Number,
    required: [true, 'day must be specified'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  img: {
    type: String,
  },
  slug:{
    type:String,
  },
  user:{
    type : String,
  },
  amountRaised : {
    type : Number,
    default : 0,
  },
  category : {
    type : String,
  }
})

module.exports = mongoose.model('card', card)