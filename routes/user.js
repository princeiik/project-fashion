const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/login', userController.loginPage)
router.post('/login', userController.loginUser)
router.get('/signup', userController.signupPage)
router.get('/logout', userController.logoutUser)

module.exports = router