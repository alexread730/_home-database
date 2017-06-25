
const documents = require('../data_sets/documents.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE documents RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('documents').insert(documents);
    });
};
