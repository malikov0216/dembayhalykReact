import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://95.59.24.136:8080'
});

export default instance;