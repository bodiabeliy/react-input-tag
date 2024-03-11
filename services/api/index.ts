import axios from 'axios';

export default axios.create({
  baseURL: "https://652f91320b8d8ddac0b2b62b.mockapi.io",
  responseType: 'json',
});