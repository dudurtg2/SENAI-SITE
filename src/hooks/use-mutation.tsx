import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { LoginMutation } from '../types/types-mutations'
import { Login } from '../api/mutations'

export function useLoginAuth(
  options?: UseMutationOptions<any, Error, LoginMutation>
) {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (payload: LoginMutation) => Login(payload),
    retry: 0,
    ...options
  })
}
