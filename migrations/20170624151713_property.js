
exports.up = function(knex, Promise) {
  return knex.schema.createTable('property', table => {
    table.increments('id').primary();
    table.text('address').notNull();
    table.integer('rent_price').notNull();
    table.text('bedrooms').notNull();
    table.text('bathrooms').notNull();
    table.text('square_footage').notNull();
    table.text('image');
    table.integer('landlord_id').unsigned().references('id').inTable('account').onDelete('cascade')
    table.integer('location_id').unsigned().references('id').inTable('location').onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('property');
};
