import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com',
});

export default api;
