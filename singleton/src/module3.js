import { request } from './promise';

const run = async () => {
  const request3 = await request();
  console.log('request3', request3);
};

run();
