//Handles GET request
//Handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')
const upload = require("../middleware/multer");

//Add specific routes for specific tasks

router.get('/:id', postController.getPost)
router.post('/', upload.single("file"), postController.createPost)
router.post('/update/:id', postController.updatePost)
router.delete('/delete/:id',postController.deletePost)

module.exports = router