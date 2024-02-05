require('dotenv').config({path: './config/.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
const commentRoutes = require('./routes/comment')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/User')

const app = express()

const port = process.env.PORT || 4000

connectDB()

//enable CORS
app.use(cors())

//Serve static files
app.use(express.static('public'))

//Parse requests
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Set EJS as templating engine
app.set('view engine','ejs')

// Setup Sessions - stored in MongoDB
app.use(session({
    secret: 'This is Project Fashion',
    resave: false,
    saveUninitialized: false
}))

//Turn on passport and session
app.use(passport.initialize())
app.use(passport.session())

//Store authentication in User model
passport.use(new LocalStrategy(User.authenticate()))

//Scramble the password and unscramble the password
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//passing current user info to all routes
app.use((req,res,next) => {
    res.locals.currentUser = req.user
    next()
})

//Routes
app.use('/', mainRoutes)
app.use('/post', postRoutes)
app.use('/', userRoutes)
app.use('/comment', commentRoutes)

//Start the Server
//npm run dev
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})


