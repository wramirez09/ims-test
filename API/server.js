require('dotenv').config()
// const fetch = require('node-fetch')
// global.fetch = fetch
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const bodyParser = require('body-parser')
// create application/json parser
// const { Sequelize } = require('sequelize')


require('../API/routes/routes')(app)

/** 
 * TO DO: if time allows wire up a DB
 */
// const sequelize = new Sequelize(
//     `${process.env.aws_rds_db}`,
//     `${process.env.aws_rds_username}`,
//     `${process.env.aws_rds_pass}`,
//     {
//         host: `${process.env.aws_rds_host}`,
//         dialect: 'postgres',
//     }
// )

// sequelize
//     .authenticate()
//     .then(function (err) {
//         console.log('Connection has been established successfully.')
//     })
//     .catch(function (err) {
//         console.log('Unable to connect to the database:', err)
//     })

app.listen(8000)

console.log('listening to 8000')
