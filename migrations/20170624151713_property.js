
exports.up = function(knex, Promise) {
  return knex.schema.createTable('property', table => {
    table.increments('property_id').primary();
    table.text('address').notNull();
    table.integer('rent_price').notNull();
    table.text('bedrooms').notNull();
    table.text('bathrooms').notNull();
    table.text('square_footage').notNull();
    table.text('image');
    table.integer('landlord_id').references('account.id').unsigned().onDelete('cascade')
    table.integer('location_id').references('location.id').unsigned().onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('property');
};
