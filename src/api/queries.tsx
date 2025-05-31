import axiosInstance from '../services/axios-instance'

export async function getDashboard() {
  const token = localStorage.getItem('accessTokenIntegrado')
  const response = await axiosInstance.get('/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
