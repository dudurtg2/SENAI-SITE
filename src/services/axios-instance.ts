
import axios from "axios";

import Cookies from 'js-cookie';
import { showModalUnauthorized } from '../contexts/unauthorized-context';


declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL: string;
  }
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
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