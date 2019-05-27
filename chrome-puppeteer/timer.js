const timer = async (label, fn) => {
  console.time(label);
  await fn();
  console.timeEnd(label);
};

module.exports = timer;
