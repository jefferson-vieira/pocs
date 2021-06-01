import db from '../../../config/db.js';

export default {
  roles(user) {
    return db('roles')
      .join('users_roles', 'roles.id', 'users_roles.role_id')
      .where({ user_id: user.id });
  },
};
