const express = require('express')
const router = express.Router()

const users = require('./users')
const moods = require('./moods')

// Routes

router.get('/allUsers', (req, res) => {
  users.all(req.app.get('connection'))
    .then((users) => {
      res.json(users)
      res.end()
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.get('/allMoods', (req, res) => {
  moods.averageByDay(req.app.get('connection'))
    .then((moods) => {
      res.json(moods)
      res.end()
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.post('/newMood', ({ app, body }, res) => {
  moods.newMood(body.user_id, body.mood, app.get('connection'))
    .then((mood) => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.post('/newUser', ({ app, body }, res) => {
  users.newUser(body.name, app.get('connection'))
    .then((mood) => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router