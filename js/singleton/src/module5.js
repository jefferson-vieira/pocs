import axios from 'axios';

const run = async () => {
  const request5 = await axios
    .get('https://httpbin.org/uuid')
    .then(resp => resp.data);
  console.log('request5', request5);
};

run();
