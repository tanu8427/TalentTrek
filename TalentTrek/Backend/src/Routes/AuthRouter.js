const router = require('express').Router()
const {signup,login} = require('../Controllers/AuthControllers')
const{signupValidation} = require('../MiddleWare/AuthValidation')
const{loginValidation} = require('../MiddleWare/AuthValidation')



router.post('/login',loginValidation,login)
router.post('/signup',signupValidation,signup)

module.exports = router