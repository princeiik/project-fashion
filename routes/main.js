//Handles GET request
//Handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//Add specific routes for specific tasks

router.get('/', homeController.getIndex)

module.exports = router