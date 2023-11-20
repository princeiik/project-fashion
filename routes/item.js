const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item')


router.get('/', itemController.getAllItems)
router.post('/', itemController.createItem)
router.post('/update/:id', itemController.updateItem)
router.delete('/delete/:id',itemController.deleteItem)

module.exports = router