require('dotenv').config({path: './config/.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const connectDB = require('./config/database')

const app = express()

const port = process.env.PORT || 4000

const {ItemRouter} = require('./routers')

connectDB()

//Middleware

//enable CORS
app.use(cors())

//Serve static files
app.use(express.static('public'))

//Parse requests
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/item', ItemRouter)

//Set EJS as templating engine
app.set('view engine','ejs')

//Routes
app.get('/',(req, res) => {
    res.render('index')
})



//Start the Server
//npm run dev
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})


