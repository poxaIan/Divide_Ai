import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.155:3333', // Atualize conforme seu IP local
});

export const getGrupos = () => api.get('/grupos');
