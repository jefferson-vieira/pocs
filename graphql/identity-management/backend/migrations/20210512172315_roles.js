/**
 * @param {import('knex').Knex} knex
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('roles', (table) => {
    table.increments('id').primary();
    table.string('name').notNull().unique();
    table.string('label').notNull();
  });
};

/**
 * @param {import('knex').Knex} knex
 */
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('roles');
};
