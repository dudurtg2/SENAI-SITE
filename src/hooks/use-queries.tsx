import { getDashboard, getNotifications, getCalendarEvents } from '../api/queries'
import { useQueries, UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Notification, CalendarEvent } from '../types/types-queries'

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

export function useNotifications(params?: { 
  startDate?: string; 
  endDate?: string 
}, options?: UseQueryOptions<{ data: Notification[] }, Error>) {
  return useQuery({
    queryKey: ['getNotifications', params],
    queryFn: () => getNotifications(params),
    retry: 1,
    ...options
  })
}

export function useCalendarEvents(params?: { 
  month?: number; 
  year?: number; 
  type?: string 
}, options?: UseQueryOptions<{ data: CalendarEvent[] }, Error>) {
  return useQuery({
    queryKey: ['getCalendarEvents', params],
    queryFn: () => getCalendarEvents(params),
    retry: 1,
    ...options
  })
}
