exports.seed = function (knex, Promise) {
  return knex('moods').del()
    .then(function () {
      return Promise.all([
        knex('moods').insert({id: 300, mood: 1, created_at: '2018-02-23 15:22:30', user_id: 200 }),
        knex('moods').insert({id: 301, mood: 5, created_at: '2018-02-22 15:22:30', user_id: 200 }),
        knex('moods').insert({id: 302, mood: 4, created_at: '2018-02-20 15:22:30', user_id: 200 }),
        knex('moods').insert({id: 303, mood: 2, created_at: '2018-02-23 15:22:30', user_id: 201 }),
        knex('moods').insert({id: 305, mood: 3, created_at: '2018-02-22 15:22:30', user_id: 201 }),
        knex('moods').insert({id: 306, mood: 4, created_at: '2018-02-20 15:22:30', user_id: 201 }),
        knex('moods').insert({id: 304, mood: 1, created_at: '2018-02-23 15:22:30', user_id: 202 }),
        knex('moods').insert({id: 307, mood: 5, created_at: '2018-02-22 15:22:30', user_id: 202 }),
        knex('moods').insert({id: 308, mood: 2, created_at: '2018-02-20 15:22:30', user_id: 202 })
      ])
    })
}