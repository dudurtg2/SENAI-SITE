import React, { useState, useEffect } from 'react'
import { Calendar, Clock, Users, MapPin, Video, FileText, Plus, ChevronLeft, ChevronRight, Filter, Search, Bell, Zap, BookOpen, Star, ArrowRight, TrendingUp, Target, Activity, Layers, Eye, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TeacherCalendar = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState('day') // day, week, month
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const [filterType, setFilterType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => setIsLoading(false), 800)
  }, [])
  const events = [
    {
      id: 1,
      title: 'Aula de React - Fundamentos',
      time: '08:00 - 09:40',
      class: 'TDS-2024-A',
      room: 'Lab 01',
      type: 'aula',
      students: 28,
      status: 'em-andamento',
      priority: 'high',
      description: 'Introdução aos conceitos fundamentais do React e JSX',
      progress: 75,
      nextAction: 'Revisar componentes'
    },
    {
      id: 2,
      title: 'Orientação de Projetos',
      time: '10:00 - 11:40',
      class: 'TDS-2024-B',
      room: 'Sala 205',
      type: 'orientacao',
      students: 15,
      status: 'agendado',
      priority: 'medium',
      description: 'Orientação individual para desenvolvimento dos projetos finais',
      progress: 40,
      nextAction: 'Definir cronograma'
    },
    {
      id: 3,
      title: 'Reunião Pedagógica',
      time: '14:00 - 15:00',
      class: 'Professores',
      room: 'Auditório',
      type: 'reuniao',
      students: 12,
      status: 'agendado',
      priority: 'high',
      description: 'Discussão sobre novas metodologias de ensino',
      progress: 0,
      nextAction: 'Preparar apresentação'
    },
    {
      id: 4,
      title: 'Aula de Node.js - API Rest',
      time: '15:20 - 17:00',
      class: 'TDS-2023',
      room: 'Lab 02',
      type: 'aula',
      students: 25,
      status: 'agendado',
      priority: 'medium',
      description: 'Desenvolvimento de APIs RESTful com Node.js e Express',
      progress: 0,
      nextAction: 'Configurar ambiente'
    }
  ]

  const upcomingEvents = [
    { title: 'Workshop JavaScript', date: 'Amanhã', time: '09:00', type: 'workshop' },
    { title: 'Avaliação Final', date: 'Sexta', time: '14:00', type: 'avaliacao' },
    { title: 'Reunião Coordenação', date: 'Segunda', time: '10:00', type: 'reuniao' }
  ]

  const getEventColor = (type: string, isHovered?: boolean) => {
    const colors = {
      aula: {
        bg: `bg-gradient-to-br from-blue-50 to-indigo-100 ${isHovered ? 'from-blue-100 to-indigo-200' : ''}`,
        border: 'border-l-blue-500',
        text: 'text-blue-700',
        icon: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        badge: 'bg-blue-100 text-blue-700',
        ring: 'ring-blue-500/20'
      },
      orientacao: {
        bg: `bg-gradient-to-br from-green-50 to-emerald-100 ${isHovered ? 'from-green-100 to-emerald-200' : ''}`,
        border: 'border-l-green-500',
        text: 'text-green-700',
        icon: 'bg-gradient-to-r from-green-500 to-emerald-600',
        badge: 'bg-green-100 text-green-700',
        ring: 'ring-green-500/20'
      },
      reuniao: {
        bg: `bg-gradient-to-br from-purple-50 to-violet-100 ${isHovered ? 'from-purple-100 to-violet-200' : ''}`,
        border: 'border-l-purple-500',
        text: 'text-purple-700',
        icon: 'bg-gradient-to-r from-purple-500 to-violet-600',
        badge: 'bg-purple-100 text-purple-700',
        ring: 'ring-purple-500/20'
      }
    }
    return colors[type as keyof typeof colors] || colors.aula
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'em-andamento':
        return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      case 'agendado':
        return <div className="w-3 h-3 bg-blue-500 rounded-full" />
      case 'concluido':
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />
      default:
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />
    }
  }

  const getEventIcon = (type: string) => {
    const iconClass = "h-5 w-5 text-white"
    switch (type) {
      case 'aula':
        return <Video className={iconClass} />
      case 'orientacao':
        return <Users className={iconClass} />
      case 'reuniao':
        return <FileText className={iconClass} />
      default:
        return <Calendar className={iconClass} />
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Zap className="h-4 w-4 text-red-500" />
      case 'medium':
        return <Target className="h-4 w-4 text-yellow-500" />
      case 'low':
        return <Activity className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto"></div>
            <Calendar className="h-8 w-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Carregando cronograma...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Ultra-Moderno */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Cronograma
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-600">Sistema sincronizado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de Visualização */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-white rounded-2xl shadow-lg p-1">
                {['day', 'week', 'month'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                      viewMode === mode
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {mode === 'day' ? 'Dia' : mode === 'week' ? 'Semana' : 'Mês'}
                  </button>
                ))}
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Novo Evento</span>
              </button>
            </div>
          </div>

          {/* Barra de Pesquisa e Filtros */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar eventos, turmas ou salas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
              />
            </div>
            
            <div className="flex bg-white rounded-2xl shadow-lg p-1">
              {[
                { key: 'all', label: 'Todos', icon: Layers },
                { key: 'aula', label: 'Aulas', icon: Video },
                { key: 'orientacao', label: 'Orientações', icon: Users },
                { key: 'reuniao', label: 'Reuniões', icon: FileText }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setFilterType(key)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                    filterType === key
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data de Hoje - Card Ultra-Moderno */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {new Date().toLocaleDateString('pt-BR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-5 w-5" />
                      <span>{events.length} compromissos hoje</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>
                        {new Date().toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold mb-1">
                    {events.filter(e => e.status === 'em-andamento').length}
                  </div>
                  <div className="text-sm opacity-90">Em andamento</div>
                </div>
              </div>
            </div>

            {/* Estatísticas Rápidas */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {events.filter(e => e.type === 'aula').length}
                  </div>
                  <div className="text-sm text-gray-600">Aulas</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {events.filter(e => e.type === 'orientacao').length}
                  </div>
                  <div className="text-sm text-gray-600">Orientações</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {events.filter(e => e.type === 'reuniao').length}
                  </div>
                  <div className="text-sm text-gray-600">Reuniões</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {events.reduce((acc, e) => acc + e.students, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Estudantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Eventos Principal */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Eventos de Hoje</h3>
            
            {events.map((event) => {
              const colors = getEventColor(event.type, hoveredEvent === event.id)
              return (
                <div
                  key={event.id}
                  className={`${colors.bg} rounded-3xl shadow-xl border-l-4 ${colors.border} overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer group ${colors.ring} hover:ring-8`}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-2xl ${colors.icon} shadow-lg`}>
                          {getEventIcon(event.type)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {event.title}
                            </h3>
                            {getPriorityIcon(event.priority)}
                            {getStatusIcon(event.status)}
                          </div>
                          
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="font-medium">{event.time}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full">
                              <BookOpen className="h-4 w-4 text-gray-500" />
                              <span className="font-medium">{event.class}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span className="font-medium">{event.room}</span>
                            </div>
                            
                            {event.type !== 'reuniao' && (
                              <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full">
                                <Users className="h-4 w-4 text-gray-500" />
                                <span className="font-medium">{event.students} estudantes</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <button 
                          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                          onClick={() => navigate('/teacher/classroom')}
                        >
                          <Eye className="h-4 w-4" />
                          <span>Entrar</span>
                        </button>
                        <button className="px-6 py-2 bg-white/80 text-gray-700 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                          <Settings className="h-4 w-4" />
                          <span>Editar</span>
                        </button>
                      </div>
                    </div>

                    {/* Progresso do Evento */}
                    <div className="bg-white/60 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progresso</span>
                        <span className="text-sm font-bold text-gray-900">{event.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${event.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        Próxima ação: <span className="font-medium">{event.nextAction}</span>
                      </div>
                    </div>

                    {/* Detalhes Expandidos */}
                    {selectedEvent === event.id && (
                      <div className="mt-4 p-4 bg-white/80 rounded-2xl animate-in slide-in-from-top duration-300">
                        <h4 className="font-semibold text-gray-900 mb-3">Detalhes do Evento</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">Status:</span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${colors.badge}`}>
                              {event.status}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">Prioridade:</span>
                            <span className="ml-2 capitalize">{event.priority}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex space-x-2">
                          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
                            Marcar como Concluído
                          </button>
                          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sidebar com Próximos Eventos */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Próximos Eventos</h3>
                <p className="opacity-90">Fique por dentro da agenda</p>
              </div>
              
              <div className="p-6 space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Card de Insights */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Insights da Semana</h3>
                <p className="opacity-90">Sua performance</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">95% Presença</div>
                      <div className="text-sm text-gray-600">+5% esta semana</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Star className="h-8 w-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">4.8 Avaliação</div>
                      <div className="text-sm text-gray-600">Média dos alunos</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">12 Projetos</div>
                      <div className="text-sm text-gray-600">Em orientação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCalendar
