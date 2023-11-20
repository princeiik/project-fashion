const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item')


router.get('/item', itemController.getAllItems)
router.post('/item', itemController.createItem)
router.post('/item/update/:id', itemController.updateItem)
router.delete('/item/delete/:id',itemController.deleteItem)

module.exports = router