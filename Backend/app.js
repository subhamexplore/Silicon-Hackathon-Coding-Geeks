const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
const cors = require('cors')
app.use(cors())
const register = require('./routes/register')
const bcrypt = require('bcryptjs')

app.use(express.json())

app.use('/hackathon', register)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app is lsitening to port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
