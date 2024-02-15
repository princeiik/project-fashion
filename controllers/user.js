const passport = require('passport')
const User = require('../models/User')

const loginPage = (req, res) => {
    res.render('login', {user: req.user})
}

const signupPage = (req, res) => {
    res.render('signup', {user: req.user})
}

const loginUser = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: false
})

const signupUser = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = new User({username})
        await user.setPassword(password) // setPassword is provided by passport-local-mongoose
        await user.save();
        passport.authenticate('local')(req,res, function() {
            res.redirect('/')
        })
    } catch (err) {
        console.log(err);
        res.redirect('/signup')
    }
}

const logoutUser = (req, res) => {
    req.logout(function(err) {
        if (err) {return next(err)}
        res.redirect('/')
    })
}

module.exports = {
    loginPage,
    signupPage,
    loginUser,
    signupUser,
    logoutUser
}