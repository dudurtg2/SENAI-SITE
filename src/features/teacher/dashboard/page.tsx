import React, { useState, useEffect } from 'react'
import { Users, BookOpen, Calendar, TrendingUp, Award, Bell, Clock, ArrowUpRight, Star, ChevronRight, Activity, Target, CheckCircle, AlertCircle, BarChart3, Zap, Heart, MessageSquare, Settings, Filter } from 'lucide-react'

const TeacherDashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [notifications, setNotifications] = useState(3)

  useEffect(() => {
    // Simular carregamento inicial
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Carregando seu dashboard...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{/* Header aprimorado com animações */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Dashboard do Professor
                  </h1>
                  <p className="text-gray-600 mt-2 text-lg">Bem-vindo de volta! Vamos fazer a diferença hoje. ✨</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Activity className="h-5 w-5 text-green-500 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Online agora</span>
                    <p className="text-xs text-gray-500">Última atividade: agora</p>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <Settings className="h-5 w-5 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>        {/* Cards de estatísticas revolucionados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 - Estudantes */}
          <div 
            className={`group relative bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden ${activeCard === 'students' ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setActiveCard(activeCard === 'students' ? null : 'students')}
            onMouseEnter={() => setActiveCard('students')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Total de Estudantes</p>
                <p className="text-4xl font-bold text-gray-900 mb-3">142</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-semibold">+12%</span>
                  </div>
                  <span className="text-xs text-gray-500">este mês</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">+139 ativos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Projetos */}
          <div 
            className={`group relative bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden ${activeCard === 'projects' ? 'ring-2 ring-green-500' : ''}`}
            onClick={() => setActiveCard(activeCard === 'projects' ? null : 'projects')}
            onMouseEnter={() => setActiveCard('projects')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Projetos Ativos</p>
                <p className="text-4xl font-bold text-gray-900 mb-3">28</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-blue-600 font-semibold">15</span>
                  </div>
                  <span className="text-xs text-gray-500">para avaliar</span>
                </div>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000" style={{width: '54%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Aulas */}
          <div 
            className={`group relative bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden ${activeCard === 'classes' ? 'ring-2 ring-yellow-500' : ''}`}
            onClick={() => setActiveCard(activeCard === 'classes' ? null : 'classes')}
            onMouseEnter={() => setActiveCard('classes')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Aulas Hoje</p>
                <p className="text-4xl font-bold text-gray-900 mb-3">6</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-orange-600 font-semibold">14:00</span>
                  </div>
                  <span className="text-xs text-gray-500">próxima aula</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="px-2 py-1 bg-orange-100 rounded-full">
                    <span className="text-xs text-orange-600 font-medium">React Avançado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Aprovações */}
          <div 
            className={`group relative bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden ${activeCard === 'approval' ? 'ring-2 ring-purple-500' : ''}`}
            onClick={() => setActiveCard(activeCard === 'approval' ? null : 'approval')}
            onMouseEnter={() => setActiveCard('approval')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Taxa de Aprovação</p>
                <p className="text-4xl font-bold text-gray-900 mb-3">89%</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600 font-semibold">Excelente!</span>
                  </div>
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                </div>
                <div className="mt-3 flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`h-3 w-3 ${i <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Seção de Insights Avançados */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Insights da Semana</h2>
                    <p className="text-sm text-gray-600">Métricas que importam para seu ensino</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <Filter className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="px-4 py-2 bg-white text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-200 shadow-sm">
                    Ver Relatório Completo
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-500 rounded-xl">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-700">94%</p>
                      <p className="text-xs text-blue-600">Engajamento</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Taxa de participação nas aulas aumentou</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">+8% esta semana</span>
                  </div>
                </div>

                <div className="group p-5 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-500 rounded-xl">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-700">127</p>
                      <p className="text-xs text-green-600">Feedback</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Comentários construtivos enviados</p>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-red-600 font-medium">98% positivos</span>
                  </div>
                </div>

                <div className="group p-5 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-500 rounded-xl">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-700">23</p>
                      <p className="text-xs text-purple-600">Projetos</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Entregas dentro do prazo</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">92% no prazo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid principal aprimorado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projetos Recentes */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Projetos Recentes para Avaliação</h2>
                    <p className="text-sm text-gray-600 mt-1">3 novos projetos aguardando avaliação</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {/* Projeto 1 */}
                  <div className="group p-5 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                          <h3 className="font-semibold text-gray-900 text-lg">Sistema de Gestão Escolar</h3>
                        </div>
                        <p className="text-gray-600 mb-1">Por: <span className="font-medium">João Silva</span> - Turma TDS-2024</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Submetido há 2 horas</span>
                        </div>
                      </div>
                      <div className="flex space-x-3 ml-4">
                        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Aprovar
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl text-sm font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-sm hover:shadow-md">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Revisar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Projeto 2 */}
                  <div className="group p-5 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                          <h3 className="font-semibold text-gray-900 text-lg">App de Controle Financeiro</h3>
                        </div>
                        <p className="text-gray-600 mb-1">Por: <span className="font-medium">Maria Santos</span> - Turma TDS-2024</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Submetido há 5 horas</span>
                        </div>
                      </div>
                      <div className="flex space-x-3 ml-4">
                        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Aprovar
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl text-sm font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-sm hover:shadow-md">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Revisar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Projeto 3 */}
                  <div className="group p-5 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                          <h3 className="font-semibold text-gray-900 text-lg">E-commerce de Livros</h3>
                        </div>
                        <p className="text-gray-600 mb-1">Por: <span className="font-medium">Pedro Costa</span> - Turma TDS-2023</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Submetido ontem</span>
                        </div>
                      </div>
                      <div className="flex space-x-3 ml-4">
                        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Aprovar
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl text-sm font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-sm hover:shadow-md">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Revisar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão Ver Todos */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-xl font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group">
                    Ver todos os projetos
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>          {/* Sidebar com notificações e ações rápidas ultra-moderna */}
          <div className="space-y-6">
            {/* Notificações Interativas */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mr-3 shadow-lg">
                      <Bell className="h-5 w-5 text-white" />
                    </div>
                    Notificações
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                      {notifications}
                    </span>
                    <button 
                      onClick={() => setNotifications(0)}
                      className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
                    >
                      <CheckCircle className="h-4 w-4 text-gray-400 hover:text-green-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="group p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-l-4 border-blue-500 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 animate-pulse"></div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-blue-900">3 novos projetos aguardando avaliação</p>
                        <p className="text-xs text-blue-700 mt-1 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Há 2 horas
                        </p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 bg-blue-200 rounded-lg hover:bg-blue-300 transition-all duration-200">
                        <ArrowUpRight className="h-3 w-3 text-blue-700" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="group p-4 bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl border-l-4 border-green-500 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-green-900">Aula de React às 14h hoje</p>
                        <p className="text-xs text-green-700 mt-1">Sala 201 - 30 estudantes confirmados</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 bg-green-200 rounded-lg hover:bg-green-300 transition-all duration-200">
                        <ArrowUpRight className="h-3 w-3 text-green-700" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="group p-4 bg-gradient-to-r from-yellow-50 to-orange-100 rounded-2xl border-l-4 border-yellow-500 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1"></div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-yellow-900">Reunião pedagógica amanhã às 9h</p>
                        <p className="text-xs text-yellow-700 mt-1">Coordenação pedagógica - Pauta: Novos projetos</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition-all duration-200">
                        <ArrowUpRight className="h-3 w-3 text-yellow-700" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-2xl text-sm font-medium hover:from-gray-100 hover:to-gray-200 transition-all duration-200 group border border-gray-200">
                  Ver todas as notificações
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Ações Rápidas Gamificadas */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mr-3 shadow-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  Ações Rápidas
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <button className="w-full group p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-semibold">Avaliar Projetos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-400 text-xs px-2 py-1 rounded-full">15</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full group p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5" />
                        <span className="font-semibold">Gerenciar Turmas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-400 text-xs px-2 py-1 rounded-full">3</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full group p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5" />
                        <span className="font-semibold">Ver Cronograma</span>
                      </div>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </button>
                  
                  <button className="w-full group p-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-5 w-5" />
                        <span className="font-semibold">Gerar Relatórios</span>
                      </div>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Progresso Gamificado */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mr-3 shadow-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  Progresso Hoje
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700">Projetos Avaliados</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">8/15</span>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">53%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 shadow-sm relative" style={{width: '53%'}}>
                        <div className="absolute right-0 top-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700">Feedback Enviado</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">12/20</span>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-green-600">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 shadow-sm relative" style={{width: '60%'}}>
                        <div className="absolute right-0 top-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700">Aulas Ministradas</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">4/6</span>
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">67%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 shadow-sm relative" style={{width: '67%'}}>
                        <div className="absolute right-0 top-0 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>

                  {/* Conquistas */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700">Conquistas</span>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">Professor Dedicado</p>
                        <p className="text-xs text-gray-500">89% de aprovação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Progresso das Turmas Modernizado */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <div className="p-2 bg-purple-100 rounded-xl mr-3">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    Progresso das Turmas
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">Acompanhe o desempenho de cada turma</p>
                </div>
                <button className="px-4 py-2 bg-white text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-all duration-200 shadow-sm">
                  Ver Detalhes
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Turma TDS-2024-A */}
                <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900">TDS-2024-A</h3>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      32 alunos
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Projetos Concluídos</span>
                      <span className="text-sm font-bold text-blue-600">75%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 shadow-sm" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">24 de 32 projetos</span>
                    <div className="flex items-center text-blue-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-medium">+5% esta semana</span>
                    </div>
                  </div>
                </div>

                {/* Turma TDS-2024-B */}
                <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900">TDS-2024-B</h3>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      28 alunos
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Projetos Concluídos</span>
                      <span className="text-sm font-bold text-green-600">85%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 shadow-sm" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">24 de 28 projetos</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-medium">+8% esta semana</span>
                    </div>
                  </div>
                </div>

                {/* Turma TDS-2023 */}
                <div className="group p-6 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900">TDS-2023</h3>
                    <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      30 alunos
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Projetos Concluídos</span>
                      <span className="text-sm font-bold text-purple-600">95%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 shadow-sm" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">28 de 30 projetos</span>
                    <div className="flex items-center text-purple-600">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="font-medium">Excelente!</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resumo Geral */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-gray-900">90</p>
                      <p className="text-sm text-gray-600">Total de Estudantes</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-blue-600">76</p>
                      <p className="text-sm text-gray-600">Projetos Concluídos</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-green-600">84%</p>
                      <p className="text-sm text-gray-600">Taxa Média</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-purple-600">14</p>
                      <p className="text-sm text-gray-600">Pendentes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      </div>
    </div>
  )
}

export default TeacherDashboard
