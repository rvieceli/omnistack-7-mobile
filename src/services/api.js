import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.99.1:3333',
  //baseURL: 'http://10.0.3.2:3333',
});

export default api;
