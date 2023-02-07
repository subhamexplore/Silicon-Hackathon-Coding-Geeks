const userInfo = require('../models/userDetail')
const bcrypt = require('bcryptjs')

const signup = async (req, res) => {
  const { username, email, password } = req.body
  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    const oldUser = await userInfo.find({ email })
    console.log(oldUser);
    if (oldUser.length!=0) {
      return res.status(404).json({ error: 'User Already Exists' })
    }
    const register = await userInfo.create({
      username,
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
}

module.exports = signup
