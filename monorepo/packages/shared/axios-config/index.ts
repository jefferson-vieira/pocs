import axios from 'axios';

const apiGateway = axios.create({
  baseURL: 'http://localhost:1800',
});

export { apiGateway };
