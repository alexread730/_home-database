
exports.up = function(knex, Promise) {
  return knex.schema.createTable('maintenance', table => {
    table.increments('id').primary();
    table.text('title').notNull();
    table.text('request').notNull();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.text('status').defaultTo('pending');
    table.integer('property_id').unsigned().references('id').inTable('property').onDelete('cascade');
    table.integer('tenant_id').unsigned().references('id').inTable('account').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('maintenance');
};
