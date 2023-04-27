const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://parass:Paras_123@nodeexpressproject.axqx7rz.mongodb.net/SIGNUP?retryWrites=true&w=majority")
const cors = require('cors')
app.use(cors())
const router = require('./routes/route')
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended : false}))

app.use(express.json())

app.use('/hackathon', router)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB("mongodb+srv://parass:Paras_123@nodeexpressproject.axqx7rz.mongodb.net/SIGNUP?retryWrites=true&w=majority")
    app.listen(port, console.log(`app is listening to port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
