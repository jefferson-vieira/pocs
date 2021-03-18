import faker from 'faker';

import FluentSQLBuilder from '../src/fluentSQLBuilder';

import database from '../database/data.json';

describe('test suit for FluentSQLBuilder', () => {
  describe('FluentSQLBuilder#getInstance', () => {
    test('should return a FluentSQLBuilder instance', () => {
      const received = FluentSQLBuilder.getInstance(database);

      expect(received).toBeInstanceOf(FluentSQLBuilder);
      expect(received).toStrictEqual(new FluentSQLBuilder({ database }));
      expect(received).toStrictEqual(FluentSQLBuilder.getInstance(Symbol()));
    });

    test('should instance be singleton', () => {});
  });

  describe('FluentSQLBuilder#build', () => {
    test('should return all data', () => {
      const received = FluentSQLBuilder.getInstance(database).build();

      expect(received).toStrictEqual(database);
    });
  });

  describe('FluentSQLBuilder#select', () => {
    test('should return only specific fields', () => {
      const randomFields = faker.random.arrayElements(Object.keys(database[0]));

      const received = FluentSQLBuilder.getInstance(database).select(randomFields).build();

      const expected = database.map((data) => {
        return randomFields.reduce((prunedData, field) => {
          return { ...prunedData, [field]: data[field] };
        }, {});
      });

      expect(received).toStrictEqual(expected);
    });
  });

  describe('FluentSQLBuilder#where', () => {
    test('should filter data', () => {
      const randomField = faker.random.arrayElement(Object.keys(database[0]));
      const randomValue = faker.random.arrayElement(database.map((data) => data[randomField]));

      const received = FluentSQLBuilder.getInstance(database)
        .where({ [randomField]: randomValue })
        .build();

      const expected = database.filter((data) => data[randomField] === randomValue);

      expect(received).toStrictEqual(expected);
    });

    test('should filter data with regex', () => {
      const randomField = faker.random.arrayElement(Object.keys(database[0]));
      const randomValue = faker.random.arrayElement(database.map((data) => data[randomField]));

      const received = FluentSQLBuilder.getInstance(database)
        .where({ [randomField]: new RegExp(randomValue) })
        .build();

      const expected = database.filter((data) => data[randomField] === randomValue);

      expect(received).toStrictEqual(expected);
    });
  });

  describe('FluentSQLBuilder#limit', () => {
    test('should limit results', () => {
      const limit = faker.random.number({ min: 1, max: database.length });

      const received = FluentSQLBuilder.getInstance(database).limit(limit).build();
      const expected = database.slice(0, limit);

      expect(received.length).toBeLessThanOrEqual(limit);
      expect(received.every((d) => expected.includes(d))).toBe(true);
    });
  });

  describe('FluentSQLBuilder#orderBy', () => {
    test('should order results by filed', () => {
      const randomField = faker.random.arrayElement(Object.keys(database[0]));

      const received = FluentSQLBuilder.getInstance(database).orderBy(randomField).build();

      const expected = database.sort((prev, next) => {
        return prev[randomField] < next[randomField] ? -1 : prev[randomField] > next[randomField] ? 1 : 0;
      });

      expect(received).toStrictEqual(expected);
    });
  });
});
