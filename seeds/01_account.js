
const account = require('../data_sets/account.json');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE account RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('account').insert(account);
    });
};
