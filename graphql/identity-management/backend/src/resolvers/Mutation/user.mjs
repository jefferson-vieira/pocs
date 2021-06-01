import bcrypt from 'bcrypt-nodejs';

import db from '../../../config/db.js';

import query from '../Query/index.mjs';

export default {
  async createUser(_, { data }) {
    try {
      const salt = bcrypt.genSaltSync();
      data.password = bcrypt.hashSync(data.password, salt);

      const [persistedUser] = await db('users').insert(data, '*');

      if (!data.roles?.length) {
        data.roles = [{ name: 'STANDARD' }];
      }

      for (let roleFilter of data.roles) {
        const role = await query.role(_, { filter: roleFilter });

        if (role)
          await db('users_roles').insert({
            role_id: role.id,
            user_id: persistedUser.id,
          });
      }

      return persistedUser;
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
  async deleteUser(_, args) {
    try {
      const user = await query.user(_, args);

      if (user) {
        await db('users').where({ id: user.id }).delete();
      }

      return user;
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
  async editUser(_, { filter, data }) {
    try {
      const user = await query.user(_, { filter });

      if (user) {
        if (data.roles) {
          await db('users_roles').where({ user_id: user.id }).delete();

          for (let roleFilter of data.roles) {
            const role = await query.role(_, { filter: roleFilter });

            if (role) {
              await db('users_roles').insert({
                role_id: role.id,
                user_id: user.id,
              });
            }
          }
        }

        delete data.roles;

        await db('users').where({ id: user.id }).update(data);
      }

      return !user ? null : { ...user, ...data };
    } catch (e) {
      throw new Error(e);
    }
  },
};
