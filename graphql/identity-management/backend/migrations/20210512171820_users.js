/**
 * @param {import('knex').Knex} knex
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('email').notNull().unique();
    table.string('password', 60);
    table.boolean('active').notNull().defaultTo(true);
    table.timestamps(true, true);
  });
};

/**
 * @param {import('knex').Knex} knex
 */
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
