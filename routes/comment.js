const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

router.post('/createComment/:id', commentController.createComment)
router.delete('/deleteComment/:id', commentController.deleteComment)

module.exports = router