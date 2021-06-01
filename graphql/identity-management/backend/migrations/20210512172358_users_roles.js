/**
 * @param {import('knex').Knex} knex
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users_roles', (table) => {
    table.integer('user_id').unsigned();
    table.integer('role_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.foreign('role_id').references('roles.id');
    table.primary(['user_id', 'role_id']);
  });
};

/**
 * @param {import('knex').Knex} knex
 */
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users_roles');
};
