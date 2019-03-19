import axios from 'axios';

const request = () =>
  axios.get('https://httpbin.org/uuid').then(resp => resp.data);

const requestFn = request();

export { request, requestFn };
