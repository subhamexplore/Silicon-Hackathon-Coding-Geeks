const express = require('express')
const router = express.Router()
var multer = require('multer');
const authentication=require('../middleware/auth')

const { signup, login, homePage, updateLogin} = require('../controllers/control')
const {postCards,getCards} =require('../controllers/cardUser')
const {postUserDetail,getUserDetail,getNGOdetail,postNGOdetail}=require('../controllers/userDetail')



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'IMAGES/profileimages')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
      cb(null, Date.now()+'_'+file.originalname)
      // cb(null, file.fieldname + '-' + uniqueSuffix)
    },
})

var upload = multer({ storage })

router.route('/signup').post(signup)
router.route('/login').post(login).patch(authentication,updateLogin)
router.route('/home').get(authentication,homePage)
router.route('/card').post(authentication,postCards).get(getCards)
router.route('/user').post(upload.single('myFile'),authentication,postUserDetail).patch(authentication,postNGOdetail).get(authentication,getUserDetail).get(authentication,getNGOdetail)



module.exports = router
