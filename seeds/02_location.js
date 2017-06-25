
const location = require('../data_sets/location.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE location RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('location').insert(location);
    });
};
