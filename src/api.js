import request from 'superagent'

module.exports = {
  getUsers
}

export function getUsers (callback) {
  request
    .get('/allUsers')
    .end(callback)
}