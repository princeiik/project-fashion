const cloudinary = require("../middleware/cloudinary");
const Post = require('../models/Post')
const Comment = require('../models/Comment')

const getProfile = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.render('profile', {posts, user: req.user})
    } catch (err) {
        console.log(err);
    }
}

const getFeed = async (req, res) => {
    // const posts = await Post.find({})
    // res.render('profile', {posts})
    try {
      const posts = await Post.find().populate('createdBy').sort({ createdAt: "desc" });
      res.render('feed.ejs', { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('createdBy');
        const comments = await Comment.find({post: req.params.id}).populate('createdBy').sort({ createdAt: "asc" })
        res.render('post.ejs', {post: post, user: req.user, comment: comments})
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
            description: req.body.description,
            createdBy: req.user.id
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
        let userPost = await Post.findById(req.params.id)
        if(userPost.createdBy.equals(req.user._id)) {
            await Post.findByIdAndUpdate(id, {title, description})
        }
        res.redirect('/profile')
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

const deletePost = async (req, res) => {
    const {id} = req.params
    try {
        let userPost = await Post.findById(req.params.id)
        if(userPost.createdBy.equals(req.user._id)) {
            await Post.findByIdAndDelete(id)
        }
        res.status(200).json({ message: 'Post deleted successfully' })
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

module.exports = {
    getProfile,
    getFeed,
    getPost,
    createPost,
    updatePost,
    deletePost
}
