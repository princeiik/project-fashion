const passport = require('passport')
const User = require('../models/User')

const loginPage = (req, res) => {
    res.render('login')
}

const signupPage = (req, res) => {
    res.render('signup')
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
        await User.signup(user,password)
        passport.authenticate('local')(req,res, function() {
            res.redirect('/')
        })
    } catch (err) {
        console.log(err);
        res.redirect('/signup')
    }
}

const logoutUser = (req, res) => {
    res.logout(function(err) {
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