import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_BACKEND_AQUI/api', // Substituir pela URL real
  timeout: 5000,
});

export const createAlerta = (alerta) => api.post('/alertas', alerta);
export const getAlertas = () => api.get('/alertas');
export const updateAlerta = (id, alerta) => api.put(`/alertas/${id}`, alerta);
export const deleteAlerta = (id) => api.delete(`/alertas/${id}`);

export default api;
