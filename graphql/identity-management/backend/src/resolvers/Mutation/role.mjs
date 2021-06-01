import db from '../../../config/db.js';

import query from '../Query/index.mjs';

export default {
  async createRole(_, { data }) {
    try {
      const [persistedRole] = await db('roles').insert(data, '*');
      return persistedRole;
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
  async deleteRole(_, args) {
    try {
      const role = await query.role(_, args);

      if (role) {
        // await db('users_roles').where({ role_id: role.id }).delete();
        await db('roles').where({ id: role.id }).delete();
      }

      return role;
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
  async editRole(_, { filter, data }) {
    try {
      const role = await query.role(_, { filter });

      if (role) {
        await db('roles').where({ id: role.id }).update(data);
      }

      return { ...role, ...data };
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
};
