// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const routes = require('./controllers/submissions_controller');

// CONFIGURATION/MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/submissions', routes); //to use the routes

// // ROOT
// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: ""
//     })
// })

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
})