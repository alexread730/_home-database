
exports.up = function(knex, Promise) {
  return knex.schema.createTable('documents', table => {
    table.increments('id').primary();
    table.text('title').notNull();
    table.text('document_url').notNull();
    table.date('created_on').notNull();
    table.integer('property_id').references('property.id').unsigned().onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('documents');
};
