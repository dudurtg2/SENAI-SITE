import { useLocation } from 'react-router-dom'

export const useHideSidebar = () => {
  const location = useLocation()
  const hiddenRoutes = ['/app/account']
  return hiddenRoutes.includes(location.pathname)
}
