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
  User,
  LogIn,
  UserPlus,
  Eye
} from 'lucide-react'
import senailogo from '../../assets/senai-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useNotifications } from '../../contexts/notification-context'
import { useAuth } from '../../contexts/auth-context'

// Header Component
const Header = () => {
  const { unreadCount } = useNotifications();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Função para obter tipo de usuário
  const getUserType = () => {
    if (!isAuthenticated || !user) return 'visitante';
    return user.tipo?.toLowerCase() || 'visitante';
  };

  const userType = getUserType();

  // Função para obter dados do usuário baseado no tipo
  const getUserDisplayData = () => {
    if (userType === 'visitante') {
      return {
        title: 'VISITANTE',
        subtitle: 'Navegando como convidado',
        info: 'Acesso limitado'
      };
    }
    
    if (userType === 'aluno' || userType === 'student') {
      return {
        title: user?.nome || 'Aluno',
        subtitle: user?.matricula ? `RA ${user.matricula}` : 'Estudante',
        info: user?.curso || 'Técnico em Desenvolvimento de Sistemas'
      };
    }
    
    if (userType === 'professor' || userType === 'teacher') {
      return {
        title: user?.nome || 'Professor',
        subtitle: user?.especialidade || 'Educador',
        info: user?.departamento || 'Departamento de TI'
      };
    }
    
    return {
      title: 'Usuário',
      subtitle: 'Sistema SENAI',
      info: ''
    };
  };

  const displayData = getUserDisplayData();

  return (
    <header className="bg-bg-layouts shadow-sm rounded-lg border-b m-3">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/app">
            <img src={senailogo} alt="Logo SENAI" className="w-auto h-auto transform transition-transform duration-200 hover:scale-105" />
          </Link>
        </div>        {/* Navigation */}
        <div className="flex items-center space-x-6">
          {/* Projetos - Todos os tipos podem ver */}
          <Link
            to="/app"
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
              isActive('/app') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
            }`}
          >
            <Lightbulb size={16} />
            <span>Projetos</span>
          </Link>
          
          {/* Notificações - Apenas usuários autenticados */}
          {isAuthenticated && (
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
          )}
          
          {/* Calendário - Apenas usuários autenticados */}
          {isAuthenticated && (
            <Link
              to="/app/calendar"
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
                isActive('/app/calendar') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
              }`}
            >
              <Calendar size={16} />
              <span>Calendário</span>
            </Link>
          )}
          
          {/* Comunidade - Apenas usuários autenticados */}
          {isAuthenticated && (
            <Link
              to="/app/community"
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transform transition-transform duration-200 hover:scale-105 ${
                isActive('/app/community') ? 'bg-gray-200 text-gray-800 font-bold' : 'text-button-primary hover:text-gray-800'
              }`}
            >
              <Users size={16} />
              <span>Comunidade</span>
            </Link>
          )}
        </div>        {/* Área do usuário */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            // Usuário autenticado
            <div className="flex items-center space-x-3">
              <Link to="/app/account" className="flex items-center space-x-2">
                <div className="text-right text-sm">
                  <div className="text-gray-600 text-xs uppercase">{displayData.title}</div>
                  <div className="text-gray-800 font-medium">{displayData.info}</div>
                  <div className="text-gray-600 text-xs">{displayData.subtitle}</div>
                </div>
                <div className="w-10 h-10 bg-button-primary rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
              </Link>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-gray-800 transition-colors"
                title="Sair"
              >
                <LogIn size={16} className="rotate-180" />
              </button>
            </div>
          ) : (
            // Visitante
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="text-right text-sm">
                  <div className="text-orange-600 text-xs uppercase flex items-center gap-1">
                    <Eye size={12} />
                    {displayData.title}
                  </div>
                  <div className="text-gray-600 text-xs">{displayData.subtitle}</div>
                  <div className="text-gray-500 text-xs">{displayData.info}</div>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Eye size={20} className="text-orange-600" />
                </div>
              </div>
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 px-3 py-2 text-sm bg-button-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <LogIn size={14} />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-1 px-3 py-2 text-sm border border-button-primary text-button-primary rounded-md hover:bg-button-primary hover:text-white transition-colors"
                >
                  <UserPlus size={14} />
                  <span>Cadastre-se</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
