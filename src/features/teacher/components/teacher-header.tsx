import React, { useState } from 'react'
import { Bell, Search, Settings, LogOut, User, ChevronDown, Zap, Star, Activity, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../contexts/user-context'

const TeacherHeader = () => {
  const navigate = useNavigate()
  const { setUserType, setIsAuthenticated, setUserInfo } = useUser()
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [notifications] = useState(3)

  const handleLogout = () => {
    setUserType(null)
    setIsAuthenticated(false)
    setUserInfo(null)
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e título modernizados */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SENAI
                </h1>
                <p className="text-xs text-gray-500 font-medium">Portal do Professor</p>
              </div>
            </div>
            
            {/* Breadcrumb dinâmico */}
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 font-medium">Dashboard</span>
              <span className="text-gray-400">•</span>
              <span className="text-blue-600 font-semibold">Visão Geral</span>
            </div>
          </div>

          {/* Barra de pesquisa modernizada */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Buscar projetos, estudantes, turmas..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 text-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded border">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Ações do usuário modernizadas */}
          <div className="flex items-center gap-3">
            {/* Quick Actions */}
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                <Zap className="h-4 w-4" />
              </button>
            </div>

            {/* Notificações modernizadas */}
            <button className="relative p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 group">
              <Bell className="h-5 w-5 text-gray-600 group-hover:text-gray-800" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-600 rounded-full text-xs text-white flex items-center justify-center font-semibold animate-pulse">
                  {notifications}
                </span>
              )}
            </button>

            {/* Configurações */}
            <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 group">
              <Settings className="h-5 w-5 text-gray-600 group-hover:text-gray-800 group-hover:rotate-90 transition-all duration-300" />
            </button>

            {/* Perfil do professor modernizado */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-2 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 group"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="hidden lg:block text-left">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">Prof. João Silva</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-500 font-medium">Nível 5</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Activity className="h-3 w-3 text-green-500" />
                    Professor Orientador
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Menu dropdown do perfil */}
              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Prof. João Silva</p>
                        <p className="text-sm text-gray-500">joao.silva@senai.br</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">Nível 5</span>
                          </div>
                          <span className="text-gray-300">•</span>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3 text-red-500 fill-current" />
                            <span className="text-xs text-gray-600">89% aprovação</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Meu Perfil
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Configurações
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Ajuda & Suporte
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-100 py-2">
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TeacherHeader
