const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')
const upload = require("../middleware/multer");


router.get('/:id', postController.getPost)
router.post('/', upload.single("file"), postController.createPost)
router.post('/update/:id', postController.updatePost)
router.delete('/delete/:id',postController.deletePost)

module.exports = router