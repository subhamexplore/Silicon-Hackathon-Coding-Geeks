const express = require('express')
const router = express.Router()
const authentication=require('../middleware/auth')

const { signup, login, homePage} = require('../controllers/control')
const {postCards,getCards} =require('../controllers/cardUser')
const {postUserDetail,getUserDetail}=require('../controllers/userDetail')

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/home').get(authentication,homePage)
router.route('/card').post(authentication,postCards).get(getCards)
router.route('/user').post(authentication,postUserDetail).get(authentication,getUserDetail)



module.exports = router
