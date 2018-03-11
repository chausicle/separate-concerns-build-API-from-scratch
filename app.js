const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')
const port = process.env.PORT || 3000

const app = express()

app.disable('x-powered-by')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())

const snackRoutes = require('./src/routes/snacks')
app.use('/snacks', snackRoutes)

app.use((err, req, res, next) => {
  const status = err.status

  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app
