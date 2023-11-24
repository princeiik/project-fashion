const Post = require('../models/Post')

const getProfile = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.render('profile', {posts})
    } catch (err) {
        console.log(err);
    }
}

const getAllPosts = async (req, res) => {
    // const posts = await Post.find({})
    // res.render('profile', {posts})
}

const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        await newPost.save()
        res.redirect('/profile')
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

const updatePost = async (req, res) => {
    const {id} = req.params
    const {title, description} = req.body
    try {
        await Post.findByIdAndUpdate(id, {title, description})
        res.redirect('/profile')
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

const deletePost = async (req, res) => {
    const {id} = req.params
    try {
        await Post.findByIdAndDelete(id)
        res.status(200).json({ message: 'Post deleted successfully' })
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

module.exports = {
    getProfile,
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}
