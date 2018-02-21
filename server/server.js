const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const path = require('path')

module.exports = (connection) => {
  var app = express()
  app.use(express.static('public'))
  app.set('connection', connection)

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

  app.use('/', routes)

  app.get('*', function(req, res) {
      res.sendFile(path.resolve(__dirname + '/../public/index.html'))
  })

  return app
}