import { requestFn } from './promise';

const run = async () => {
  const request1 = await requestFn;
  console.log('request1', request1);
};

run();
