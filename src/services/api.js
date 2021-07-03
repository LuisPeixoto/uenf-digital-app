import axios from 'axios';

const api = axios.create({
  baseURL: 'https://uenf-digital-api.herokuapp.com'
});

export default api;
