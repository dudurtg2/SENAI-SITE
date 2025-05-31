import axiosInstance from '../services/axios-instance'
import type { LoginMutation, RegisterMutation } from '../types/types-mutations'

export async function Login(payload: LoginMutation) {
  const response = await axiosInstance.post('/login', payload, {})
  return response.data
}

export async function Register(payload: RegisterMutation) {
  const response = await axiosInstance.post('/register', payload, {})
  return response.data
}
