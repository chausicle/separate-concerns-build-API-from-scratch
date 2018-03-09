const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')
const port = process.env.PORT || 3000

const app = express()

app.disable('x-powered-by')

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

const snacks = []

app.get('/snacks', getAll = (req, res, next) => {

})

app.get('/snacks/:id', getById = (req, res, next) => {

})

app.post('/snacks', create = (req, res, next) => {

})

app.put('/snacks/:id', update = (req, res, next) => {

})

app.delete('/snacks/:id', deleteSnack = (req, req, next) => {
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app
