import React from 'react'
import { useGuest } from '../contexts/guest-context'
import { useAuth } from '../contexts/auth-context'
import { useLocation } from 'react-router-dom'

const GuestDebug = () => {
  const { isGuest, guestLimitations } = useGuest()
  const { isAuthenticated, user, isLoading } = useAuth()
  const location = useLocation()

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">🔍 Debug Info</h3>
      <div className="space-y-1">
        <div>📍 Path: {location.pathname}</div>
        <div>🔗 Search: {location.search}</div>
        <div>👤 isAuthenticated: {isAuthenticated ? '✅' : '❌'}</div>
        <div>⏳ isLoading: {isLoading ? '⏳' : '✅'}</div>
        <div>🎯 isGuest: {isGuest ? '👻' : '❌'}</div>
        <div>👤 User: {user ? user.nome : 'null'}</div>
        <div>🍪 localStorage.isGuest: {localStorage.getItem('isGuest')}</div>
      </div>
    </div>
  )
}

export default GuestDebug
