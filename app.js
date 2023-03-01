const express = require('express')
const app = express()

const cors = require('cors')

const bodyParser = require('body-parser')
const todoRoutes = require('./routes/todos')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/todos', todoRoutes)


module.exports = app



