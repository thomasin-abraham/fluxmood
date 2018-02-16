exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 200, name: 'bbq' }),
        knex('users').insert({id: 201, name: 'auusie' }),
        knex('users').insert({id: 202, name: 'catdog' }),
        knex('users').insert({id: 203, name: 'prawn fritter' }),
        knex('users').insert({id: 204, name: 'skkrt' })
      ])
    })
}