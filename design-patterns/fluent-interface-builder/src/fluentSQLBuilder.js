export default class FluentSQLBuilder {
  static #INSTANCE;

  static getInstance(database) {
    // return (
    //   FluentSQLBuilder.#INSTANCE ||
    //   (FluentSQLBuilder.#INSTANCE = new FluentSQLBuilder({ database }))
    // );

    return new FluentSQLBuilder({ database });
  }

  #database = [];

  #select = [];
  #where = {};
  #orderBy = '';
  #limit = 0;

  constructor({ database }) {
    this.#database = database;
  }

  select(props) {
    this.#select = props;

    return this;
  }

  where(query) {
    const regexQueryValues = Object.entries(query).map(([field, value]) => [
      field,
      value instanceof RegExp ? value : new RegExp(value),
    ]);

    this.#where = { ...this.#where, ...Object.fromEntries(regexQueryValues) };

    return this;
  }

  orderBy(field) {
    this.#orderBy = field;

    return this;
  }

  limit(max) {
    this.#limit = max;

    return this;
  }

  build() {
    const results = [];

    for (const data of this.#database) {
      if (!this.#performWhere(data)) continue;

      results.push(this.#performSelect(data));

      if (this.#performLimit(results)) break;
    }

    return this.#performOrderBy(results);
  }

  #performSelect(data) {
    if (!this.#select.length) {
      return data;
    }

    const prunedData = {};

    for (const [field, value] of Object.entries(data)) {
      if (!this.#select.includes(field)) continue;

      prunedData[field] = value;
    }

    return prunedData;
  }

  #performWhere(data) {
    for (const field in this.#where) {
      if (!this.#where[field].test(data[field])) {
        return false;
      }
    }

    return true;
  }

  #performOrderBy(results) {
    if (!this.#orderBy) return results;

    return results.sort((prev, next) => prev[this.#orderBy].localeCompare(next[this.#orderBy]));
  }

  #performLimit(results) {
    return this.#limit && results.length === this.#limit;
  }
}
