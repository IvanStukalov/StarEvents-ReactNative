import axios from 'axios';

export const host = '192.168.0.155'

export const axiosInstance = axios.create({ baseURL: `http://${host}:8080/api` });
