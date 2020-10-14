const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8001
const corsOptions = {
  origin: 'http://146.59.144.55:3000',
}

app.use(cors(corsOptions))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


module.exports = app