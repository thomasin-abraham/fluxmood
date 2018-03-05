import request from 'superagent'

module.exports = {
  getUsers,
  getMoods,
  newMood,
  newUser
}

export function getUsers(callback) {
  request
    .get('/allUsers')
    .end(callback)
}

export function getMoods(callback) {
  request
    .get('/allMoods')
    .end(callback)
}

export function newMood(user_id, mood, callback) {
  request
    .post('/newMood')
    .send({ 
      user_id,
      mood
    })
    .end(callback)
}

export function newUser(name, callback) {
  request
    .post('/newUser')
    .send({ 
      name
    })
    .end(callback)
}