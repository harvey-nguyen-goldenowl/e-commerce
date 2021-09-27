import axios from 'axios';

import envs from '../config/env';

axios.defaults.baseURL = envs.BACKEND;
console.log(envs.BACKEND);

export default axios;
