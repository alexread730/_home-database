
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.text('first_name').notNull();
    table.text('last_name').notNull();
    table.unique('email').notNull();
    table.text('password').notNull();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('is_landlord').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account')
};
