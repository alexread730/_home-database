
const property = require('../data_sets/property.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE property RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('property').insert(property);
    });
};
