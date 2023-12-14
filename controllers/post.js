const cloudinary = require("../middleware/cloudinary");
const Post = require('../models/Post')

const getProfile = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.render('profile', {posts})
    } catch (err) {
        console.log(err);
    }
}

const getFeed = async (req, res) => {
    // const posts = await Post.find({})
    // res.render('profile', {posts})
    try {
      const posts = await Post.find().sort({ createdAt: "desc" });
      res.render('feed.ejs', { posts: posts });
    } catch (err) {
      console.log(err);
    }
}

const createPost = async (req, res) => {
    // const newPost = new Post(req.body)
    const result = await cloudinary.uploader.upload(req.file.path);

    try {
        await Post.create({
            title: req.body.title,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            description: req.body.description
        });
        // await newPost.save()
        console.log(req.body);
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
    getFeed,
    createPost,
    updatePost,
    deletePost
}
