
exports.up = function(knex, Promise) {
  return knex.schema.createTable('moods', function(table) {
    table.increments()
    table.integer('mood').notNullable()
    table.integer('user_id').unsigned().notNullable()
    table.foreign('user_id').references('id').inTable('users')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('moods')
};
