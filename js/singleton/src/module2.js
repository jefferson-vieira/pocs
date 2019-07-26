import { requestFn } from './promise';

const run = async () => {
  const request2 = await requestFn;
  console.log('request2', request2);
};

run();
