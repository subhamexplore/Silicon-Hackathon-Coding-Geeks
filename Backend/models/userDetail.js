const mongoose = require('mongoose')

const UserDetailSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: 'userInfo',
  }
)

module.exports = mongoose.model('userInfo', UserDetailSchema)
