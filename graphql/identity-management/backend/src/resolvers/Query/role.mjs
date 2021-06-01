import db from '../../../config/db.js';

export default {
  roles() {
    return db('roles');
  },
  role(_, { filter }) {
    if (!filter) return null;

    const { id, name } = filter;

    if (id) {
      return db('roles').where({ id }).first();
    } else if (name) {
      return db('roles').where({ name }).first();
    } else {
      return null;
    }
  },
};
