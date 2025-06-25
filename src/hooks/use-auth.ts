import { useMutation } from '@tanstack/react-query'
import { authApi, LoginRequest, RegisterRequest, AuthResponse } from '../api/auth'

// Hook para login
export const useLoginAuth = (options?: {
  onSuccess?: (data: AuthResponse) => void
  onError?: (error: Error) => void
}) => {
  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  })
}

// Hook para registro
export const useRegisterAuth = (options?: {
  onSuccess?: (data: AuthResponse) => void
  onError?: (error: Error) => void
}) => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => authApi.register(data),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  })
}

// Hook para logout
export const useLogout = (options?: {
  onSuccess?: () => void
  onError?: (error: Error) => void
}) => {
  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  })
}

// Hook para refresh token
export const useRefreshToken = (options?: {
  onSuccess?: (data: AuthResponse) => void
  onError?: (error: Error) => void
}) => {
  return useMutation({
    mutationFn: (refreshToken: string) => authApi.refreshToken(refreshToken),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  })
}
