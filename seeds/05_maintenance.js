
const maintenance = require('../data_sets/maintenance.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE maintenance RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('maintenance').insert(maintenance);
    });
};
