/**
 * @param {import('knex').Knex} knex
 */
exports.seed = function (knex, Promise) {
  return knex('roles')
    .del()
    .then(function () {
      return knex('roles').insert([
        { name: 'STANDARD', label: 'Comum' },
        { name: 'ADMIN', label: 'Administrador' },
      ]);
    });
};
