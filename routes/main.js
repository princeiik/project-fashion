//Handles GET request
//Handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const postController = require('../controllers/post')

//Add specific routes for specific tasks

router.get('/', homeController.getIndex)
router.get('/profile', postController.getProfile)

module.exports = router