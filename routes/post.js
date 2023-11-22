const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')


router.get('/', postController.getAllPosts)
router.post('/', postController.createPost)
router.post('/update/:id', postController.updatePost)
router.delete('/delete/:id',postController.deletePost)

module.exports = router