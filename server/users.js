module.exports = {
  all
}

function all (connection) {
  return connection('users')
    .select()
}
