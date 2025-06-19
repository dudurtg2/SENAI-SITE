
import axios from "axios";
import Cookies from 'js-cookie';
import { showModalUnauthorized } from '../contexts/unauthorized-context';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get('accessTokenIntegrado');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;

});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response && error?.response?.status === 401) {
      if (error?.response?.data?.message === 'Não autorizado') {
        showModalUnauthorized();
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;