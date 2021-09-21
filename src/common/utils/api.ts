import axios from 'axios';

// config
import { API_SERVER } from 'config/constants';

const http = axios.create({
  baseURL: API_SERVER,
});

export default http;
