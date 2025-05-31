import { getDashboard } from '../api/queries'
import { useQueries, UseQueryOptions } from '@tanstack/react-query'
export function useDashboard(options?: UseQueryOptions<any, Error>) {
  return useQueries({
    queries: [
      {
        queryKey: ['getDashboard'],
        queryFn: () => getDashboard(),
        retry: 0,
        ...options
      }
    ]
  })
}
