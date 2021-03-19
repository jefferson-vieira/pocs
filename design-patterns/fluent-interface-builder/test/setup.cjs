const faker = require('faker');

module.exports = async () => {
  const seed = Date.now();

  console.log(`[faker] seed gerada, seed=${seed}`);

  faker.seed(seed);
};
