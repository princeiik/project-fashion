//Handles GET request
//Handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

//Add specific routes for specific tasks

router.post('/createComment/:id', commentController.createComment)
router.delete('/deleteComment/:id', commentController.deleteComment)

module.exports = router