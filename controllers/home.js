const Post = require('../models/Post')

const getIndex = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: "desc" }).limit(3);
        res.render('index', { posts: posts, user: req.user })
    } catch (err) {
        console.log(err)        
    }
}

module.exports = {
    getIndex
}