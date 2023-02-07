const userInfo = require('../models/userDetail')
const bcrypt = require('bcryptjs')

const signup = async (req, res) => {
  const { name, email, password } = req.body
  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    const oldUser = userInfo.find({ email })
    if (oldUser) {
      return res.status(404).json({ error: 'User Already Exists' })
    }
    const register = await userInfo.create({
      name,
      email,
      password: encryptedPassword,
      // req.body
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

module.exports = signup
