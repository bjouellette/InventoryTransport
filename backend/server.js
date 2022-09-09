// DEPENDENCIES
const express = require('express')
const app = express()
const bodyParser = require('body-parser'); app.use(bodyParser.json());
const { Sequelize } = require('sequelize')
const routes = require('./controllers/submissions_controller');

// CONFIGURATION/MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//to use the routes
// Add Access Control Allow Origin headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();      
  }); 
app.use('/submissions', routes); 


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: ""
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
})