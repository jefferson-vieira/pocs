import db from '.././../../config/db.js';

export default {
  users() {
    return db('users');
  },
  user(_, { filter }) {
    if (!filter) return null;

    const { id, email } = filter;

    if (id) {
      return db('users').where({ id }).first();
    } else if (email) {
      return db('users').where({ email }).first();
    } else {
      return null;
    }
  },
};
