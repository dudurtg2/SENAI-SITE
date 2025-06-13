import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Settings, 
  Award,
  ClipboardList,
  MessageSquare,
  FileText,
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  Bell,
  Star,
  Activity,
  Shield
} from 'lucide-react'

const TeacherSidebar = () => {
  const location = useLocation()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems = [
    {
      path: '/teacher/dashboard',
      icon: Home,
      label: 'Dashboard',
      description: 'Visão geral',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      count: null
    },
    {
      path: '/teacher/projects',
      icon: BookOpen,
      label: 'Projetos',
      description: 'Avaliar e gerenciar',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      count: 15
    },
    {
      path: '/teacher/students',
      icon: Users,
      label: 'Estudantes',
      description: 'Gerenciar turmas',
      gradient: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      count: null
    },
    {
      path: '/teacher/calendar',
      icon: Calendar,
      label: 'Cronograma',
      description: 'Aulas e eventos',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      count: 6
    },
    {
      path: '/teacher/evaluations',
      icon: ClipboardList,
      label: 'Avaliações',
      description: 'Notas e feedback',
      gradient: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      count: null
    },
    {
      path: '/teacher/reports',
      icon: BarChart3,
      label: 'Relatórios',
      description: 'Análises e métricas',
      gradient: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      count: null
    },
    {
      path: '/teacher/certificates',
      icon: Award,
      label: 'Certificados',
      description: 'Emitir certificados',
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      count: null
    },
    {
      path: '/teacher/messages',
      icon: MessageSquare,
      label: 'Mensagens',
      description: 'Comunicação',
      gradient: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      count: 3
    },
    {
      path: '/teacher/resources',
      icon: FileText,
      label: 'Recursos',
      description: 'Material didático',
      gradient: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      count: null
    },
    {
      path: '/teacher/settings',
      icon: Settings,
      label: 'Configurações',
      description: 'Preferências',
      gradient: 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-600',      count: null
    }
  ]

  return (
    <aside className="w-72 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 min-h-screen flex flex-col shadow-lg">
      {/* Header Modernizado */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SENAI
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Portal do Professor
            </p>
          </div>
        </div>
        
        {/* Status do Professor */}
        <div className="mt-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Online</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-xs text-gray-600">Prof. Nível 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de Navegação Ultra-Moderno */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            const isHovered = hoveredItem === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group relative flex items-center w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg border-0`
                    : `${item.bgColor} hover:shadow-md border border-gray-100 hover:border-gray-200`
                }`}
              >
                {/* Background Effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } bg-gradient-to-r ${item.gradient} opacity-5`}></div>
                
                {/* Icon Container */}
                <div className={`relative flex-shrink-0 p-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-white bg-opacity-20 shadow-md' 
                    : `${item.bgColor} group-hover:${item.bgColor} shadow-sm`
                }`}>
                  <Icon 
                    size={20} 
                    className={`transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : `${item.textColor} group-hover:scale-110`
                    }`} 
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 ml-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-sm font-semibold block transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-800'
                      }`}>
                        {item.label}
                      </span>
                      <span className={`text-xs transition-colors duration-300 ${
                        isActive ? 'text-white text-opacity-80' : 'text-gray-500'
                      }`}>
                        {item.description}
                      </span>
                    </div>
                    
                    {/* Badge e Arrow */}
                    <div className="flex items-center gap-2">
                      {item.count && (
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                          isActive 
                            ? 'bg-white bg-opacity-20 text-white' 
                            : `bg-gradient-to-r ${item.gradient} text-white shadow-sm`
                        }`}>
                          {item.count}
                        </span>
                      )}
                      <ChevronRight 
                        size={16} 
                        className={`transition-all duration-300 ${
                          isActive 
                            ? 'text-white translate-x-1' 
                            : `${item.textColor} group-hover:translate-x-1 group-hover:text-gray-700`
                        }`} 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Ação Rápida Modernizada */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-5 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white bg-opacity-20 rounded-xl">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Modo Turbo</h4>
              <p className="text-xs text-white text-opacity-80">Avaliação express</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Projetos pendentes</span>
              <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">15</span>
            </div>
            
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '60%'}}></div>
            </div>
            
            <Link 
              to="/teacher/projects"
              className="group flex items-center justify-center w-full bg-white bg-opacity-20 hover:bg-opacity-30 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg"
            >
              <Target className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Avaliar Agora
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Mini Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="text-lg font-bold text-gray-900">89%</div>
            <div className="text-xs text-gray-500">Aprovação</div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="text-lg font-bold text-gray-900 flex items-center justify-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              +12%
            </div>
            <div className="text-xs text-gray-500">Este mês</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default TeacherSidebar
