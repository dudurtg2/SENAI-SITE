import React, { useState } from 'react'
import {
  MapPin,
  Bell,
  Calendar,
  Users,
  Search,
  Plus,
  Edit3,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  User
} from 'lucide-react'
import senailogo from '../../assets/senai-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useNotifications } from '../../contexts/notification-context'
// Header Component
const Header = () => {
  const { unreadCount } = useNotifications();
  const location = useLocation(); // Obter a localização atual

  const isActive = (path: string) => location.pathname === path; // Verificar se a rota está ativa

  return (
    <header className="bg-bg-layouts shadow-sm rounded-lg border-b m-3">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/app">
            <img src={senailogo} alt="Logo SENAI" className="w-auto h-auto transform transition-transform duration-200 hover:scale-105" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <Link
            to="/app"
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
              isActive('/app') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
            }`}
          >
            <Lightbulb size={16} />
            <span>Projetos</span>
          </Link>
          <Link
            to="/app/notifications"
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
              isActive('/app/notifications') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
            }`}
          >
            <div className="relative">
              <Bell size={16} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </div>
            <span>Notificações</span>
          </Link>
          <Link
            to="/app/calendar"
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
              isActive('/app/calendar') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
            }`}
          >
            <Calendar size={16} />
            <span>Calendário</span>
          </Link>
          <Link
            to="/app/community"
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
              isActive('/app/community') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
            }`}
          >
            <Users size={16} />
            <span>Comunidade</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/app/account" className="flex items-center space-x-2">
            <div className="text-right text-sm">
              <div className="text-gray-600">HOME</div>
              <div className="text-gray-800">
                Técnico de Desenvolvimento de Sistemas
              </div>
              <div className="text-gray-600">CLASSE</div>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={20} className="text-gray-600" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
