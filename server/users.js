module.exports = {
  all,
  newUser
}

function all (connection) {
  return connection('users')
    .select()
}

function newUser (name, connection) {
  return connection('users')
    .insert({
      name
    })
}
