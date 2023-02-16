const mongoose = require('mongoose')

const UserPyer = new mongoose.Schema(
  {
    username: {type:String},
    email: { type: String},
    amount:{type:Number},
    slug:{type:String},
  },
  {
    collection: 'payments',
  }
)

module.exports = mongoose.model('payments', UserPyer)
