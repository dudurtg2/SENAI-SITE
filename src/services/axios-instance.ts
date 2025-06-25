
import axios from "axios";
import Cookies from 'js-cookie';
import { showModalUnauthorized } from '../contexts/unauthorized-context';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
});

axiosInstance.interceptors.request.use((config) => {
  // Tentar buscar token dos cookies primeiro, depois do localStorage
  const token = Cookies.get('accessToken') || localStorage.getItem('accessTokenIntegrado');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response && error?.response?.status === 401) {
      // Não mostrar modal de unauthorized para endpoints públicos ou visitantes
      const isPublicEndpoint = 
        error.config?.url?.includes('/demo/') ||
        error.config?.url?.includes('/projeto/findAll') ||
        error.config?.url?.includes('/disciplina/findAll') ||
        error.config?.url?.includes('/unidadeCurricular/findAll')
        
      const isGuest = localStorage.getItem('isGuest') === 'true'
      
      if (!isPublicEndpoint && !isGuest && error?.response?.data?.message === 'Não autorizado') {
        showModalUnauthorized();
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;