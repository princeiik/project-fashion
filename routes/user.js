//Handles GET request
//Handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


//Add specific routes for specific tasks

router.get('/login', userController.loginPage)
router.post('/login', userController.loginUser)
router.get('/signup', userController.signupPage)
router.post('/signup', userController.signupUser)
router.get('/logout', userController.logoutUser)

module.exports = router