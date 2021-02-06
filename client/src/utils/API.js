import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:5000',
});

const setAuthToken = token => {
  if (token) {
    API.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete API.defaults.headers.common['x-auth-token'];
  }
};

export default API;
export { setAuthToken }
