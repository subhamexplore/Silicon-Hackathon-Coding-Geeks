const userInfo = require('../models/userDetail')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'hqjshuhhiwbnjnkj()msdnlqjpdkqd;;skljdsqz'

const signup = async (req, res) => {
  const { name, email, password } = req.body
  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    const oldUser = await userInfo.find({ email })
    if (oldUser.length != 0) {
      return res.status(404).json({ error: 'User Already Exists' })
    }
    const register = await userInfo.create({
      name,
      email,
      password: encryptedPassword,
    })
    res.send({
      status: 'ok',
      data: { register },
    })
  } catch (error) {
    res.send({
      msg: error,
    })
  }
  // res.status(200).json({ success: true })
}

const login = async (req, res) => {
  const { email, password } = req.body
  const oldUser = await userInfo.findOne({ email })
  if (!oldUser) {
    res.status(404).json({
      msg: 'User Not Found',
    })
  }
  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({}, JWT_SECRET)
    if (res.status(201)) {
      return res.json({ status: 'ok', data: token })
    } else {
      return res.json({ error: 'error' })
    }
  }
  res.json({ status: 'error', error: 'Invalid Password' })
}

module.exports = { signup, login }
