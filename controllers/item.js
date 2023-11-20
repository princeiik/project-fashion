const Item = require('../models/Item')

const getAllItems = async (req, res) => {
    const items = await Item.find({})
    res.render('item', {items})
}

const createItem = async (req, res) => {
    const newItem = new Item(req.body)
    try {
        await newItem.save()
        res.redirect('/item')
    } catch(err) {
        res.redirect('/item?error=true')
    }
}

const updateItem = async (req, res) => {
    const {id} = req.params
    const {name, description} = req.body
    try {
        await Item.findByIdAndUpdate(id, {name, description})
        res.redirect('/item')
    } catch(err) {
        res.redirect('/item?error=true')
    }
}

const deleteItem = async (req, res) => {
    const {id} = req.params
    try {
        await Item.findByIdAndDelete(id)
        res.status(200).json({ message: 'Item deleted successfully' })
    } catch(err) {
        res.redirect('/item?error=true')
    }
}

module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
}
