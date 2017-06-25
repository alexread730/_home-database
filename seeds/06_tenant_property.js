
const tenant_property = require('../data_sets/tenant_property.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE tenant_property RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('tenant_property').insert(tenant_property);
    });
};
