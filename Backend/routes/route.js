const express = require('express')
const router = express.Router()
const authentication=require('../middleware/auth')

const { signup, login, homePage, updateLogin} = require('../controllers/control')
const {postCards,getCards} =require('../controllers/cardUser')
const {postUserDetail,getUserDetail,getNGOdetail,postNGOdetail}=require('../controllers/userDetail')

router.route('/signup').post(signup)
router.route('/login').post(login).patch(authentication,updateLogin)
router.route('/home').get(authentication,homePage)
router.route('/card').post(authentication,postCards).get(getCards)
router.route('/user').post(authentication,postUserDetail).patch(authentication,postNGOdetail).get(authentication,getUserDetail).get(authentication,getNGOdetail)



module.exports = router
