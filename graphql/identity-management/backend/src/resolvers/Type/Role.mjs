import db from '../../../config/db.js';

export default {
  users(role) {
    return db('users')
      .join('users_roles', 'users.id', 'users_roles.user_id')
      .where({ role_id: role.id });
  },
};
