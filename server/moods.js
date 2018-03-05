module.exports = {
  averageByDay,
  newMood
}

function averageByDay (connection) {
  return connection('moods')
    .select(connection.raw("date_trunc('day', created_at) as day"), connection.raw('AVG(mood)')) 
    .groupByRaw('day')
    .orderBy('day', 'asc')
}

function newMood (user_id, mood, connection) {
  return connection('moods')
    .insert({
      user_id,
      mood
    })
}
