const Comment = require('../models/Comment')

const createComment = async (req, res) => {
    try {
        await Comment.create({
            comment: req.body.comment,
            createdBy: req.user.id,
            post: req.params.id
        });
        console.log(req.body);
        res.redirect(`/post/${req.params.id}`)
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

const deleteComment = async (req, res) => {
    const {id} = req.params
    try {
        let userComment = await Comment.findById(req.params.id)
        if(userComment.createdBy.equals(req.user._id)) {
            await Comment.findByIdAndDelete(id)
        }
        res.status(200).json({ message: 'Comment deleted successfully' })
    } catch(err) {
        res.redirect('/profile?error=true')
    }
}

module.exports = {
    createComment,
    deleteComment
}
