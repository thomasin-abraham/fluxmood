module.exports = {
  newMood
}

function newMood (user_id, mood, connection) {
  return connection('moods')
    .insert({
      user_id,
      mood
    })
}
