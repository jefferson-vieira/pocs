import { request } from './promise';

const run = async () => {
  const request4 = await request();
  console.log('request4', request4);
};

run();
