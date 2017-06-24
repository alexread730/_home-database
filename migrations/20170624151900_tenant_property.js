
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tenant_property', table => {
    table.increments('id').primary();
    table.integer('tenant_id').unsigned().references('id').inTable('account').onDelete('cascade');
    table.integer('property_id').unsigned().references('id').inTable('property').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tenant_property');
};
