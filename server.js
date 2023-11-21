require('dotenv').config({path: './config/.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const itemRoutes = require('./routes/item')

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

//Routes
app.use('/', mainRoutes)
app.use('/item', itemRoutes)

//Start the Server
//npm run dev
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})


