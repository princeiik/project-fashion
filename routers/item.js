const {Router} = require('express')
const Item = require('../models/Item')
const controller = require('../controllers/item')

const router = Router()

router.get('/', async (req, res) => {
    const items = await Item.find({})
    res.render('item', {items})
})

//Create
router.post('/', async (req, res) => {
    const newItem = new Item(req.body)
    try {
        await newItem.save()
        res.redirect('/item')
    } catch(err) {
        res.redirect('/item?error=true')
    }
})

//Update
router.post('/update/:id', async (req, res) => {
    const {id} = req.params
    const {name, description} = req.body
    try {
        await Item.findByIdAndUpdate(id, {name, description})
        res.redirect('/item')
    } catch(err) {
        res.redirect('/item?error=true')
    }
})

//Delete
router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params
    try {
        await Item.findByIdAndDelete(id)
        res.status(200).json({ message: 'Item deleted successfully' })
    } catch(err) {
        res.redirect('/item?error=true')
    }
})

module.exports = router