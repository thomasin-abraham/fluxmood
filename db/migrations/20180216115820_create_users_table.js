
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments()
    table.string('name').notNullable().unique()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')  
}
