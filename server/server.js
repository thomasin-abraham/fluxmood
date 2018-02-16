const express = require('express')

module.exports = (connection) => {
  var app = express()
  app.use(express.static('public'))
  app.set('connection', connection)

  return app
}