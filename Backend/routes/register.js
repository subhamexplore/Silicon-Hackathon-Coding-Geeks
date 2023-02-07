const express = require('express')
const router = express.Router()

const signup = require('../controllers/register')

router.route('/register').post(signup)

module.exports = router
