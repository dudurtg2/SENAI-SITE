import React, { useState, useEffect } from 'react'
import { Search, Filter, Star, Calendar, Download, Eye, Edit, ClipboardCheck, TrendingUp, Users, Clock, CheckCircle, AlertCircle, Target, Zap, BookOpen, Award, BarChart3, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TeacherEvaluations = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterClass, setFilterClass] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEvaluation, setSelectedEvaluation] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const evaluations = [
    {
      id: 1,
      studentName: 'João Silva',
      avatar: '👨‍💻',
      projectTitle: 'Sistema de Gestão Escolar',
      class: 'TDS-2024-A',
      submissionDate: '2025-06-08',
      evaluationDate: '2025-06-09',
      grade: 8.5,
      status: 'evaluated',
      priority: 'high',
      feedback: 'Excelente trabalho! Demonstrou domínio das tecnologias utilizadas.',
      criteria: {
        technical: 9,
        creativity: 8,
        presentation: 8,
        documentation: 8
      },
      technologies: ['React', 'Node.js', 'MongoDB'],
      timeSpent: '12h',
      complexity: 'high',
      improvements: 2
    },
    {
      id: 2,
      studentName: 'Maria Santos',
      avatar: '👩‍💻',
      projectTitle: 'App de Controle Financeiro',
      class: 'TDS-2024-A',
      submissionDate: '2025-06-07',
      evaluationDate: null,
      grade: null,
      status: 'pending',
      priority: 'high',
      feedback: '',
      criteria: {
        technical: 0,
        creativity: 0,
        presentation: 0,
        documentation: 0
      },
      technologies: ['React Native', 'Firebase'],
      timeSpent: '0h',
      complexity: 'medium',
      improvements: 0
    }
  ]

  const stats = {
    totalEvaluations: evaluations.length,
    pending: evaluations.filter(e => e.status === 'pending').length,
    evaluated: evaluations.filter(e => e.status === 'evaluated').length,
    averageGrade: evaluations.filter(e => e.grade).reduce((acc, e) => acc + (e.grade || 0), 0) / evaluations.filter(e => e.grade).length
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'evaluated':
        return { bg: 'bg-green-100', text: 'text-green-700', badge: 'bg-green-500', icon: CheckCircle }
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-500', icon: Clock }
      case 'revision':
        return { bg: 'bg-orange-100', text: 'text-orange-700', badge: 'bg-orange-500', icon: AlertCircle }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', badge: 'bg-gray-500', icon: Clock }
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600 mx-auto"></div>
            <ClipboardCheck className="h-8 w-8 text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Carregando avaliações...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Ultra-Moderno */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Avaliações
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-600">Sistema sincronizado</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Nova Avaliação</span>
            </button>
          </div>

          {/* Filtros */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por estudante ou projeto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
              />
            </div>
            
            <div className="flex bg-white rounded-2xl shadow-lg p-1">
              {[
                { key: 'all', label: 'Todos' },
                { key: 'pending', label: 'Pendentes' },
                { key: 'evaluated', label: 'Avaliados' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilterStatus(key)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    filterStatus === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stats.totalEvaluations}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
                  <ClipboardCheck className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
                  <div className="text-sm text-gray-600">Pendentes</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">{stats.evaluated}</div>
                  <div className="text-sm text-gray-600">Avaliados</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">{stats.averageGrade.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">Nota Média</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Avaliações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {evaluations.map((evaluation) => {
            const statusColors = getStatusColor(evaluation.status)
            const StatusIcon = statusColors.icon
            
            return (
              <div
                key={evaluation.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedEvaluation(selectedEvaluation === evaluation.id ? null : evaluation.id)}
              >
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{evaluation.avatar}</div>
                      <div>
                        <h3 className="text-xl font-bold">{evaluation.studentName}</h3>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${statusColors.badge} rounded-full`}></div>
                          <span className="text-sm opacity-90 capitalize">{evaluation.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {evaluation.grade ? (
                        <>
                          <Star className="h-5 w-5 text-yellow-300 mb-1" />
                          <div className="text-2xl font-bold">{evaluation.grade}</div>
                        </>
                      ) : (
                        <Clock className="h-8 w-8 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{evaluation.projectTitle}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📅 {new Date(evaluation.submissionDate).toLocaleDateString('pt-BR')}</span>
                      <span>🎓 {evaluation.class}</span>
                    </div>
                  </div>

                  {/* Tecnologias */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {evaluation.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Critérios de Avaliação */}
                  {evaluation.status === 'evaluated' && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-2xl">
                      <h5 className="font-semibold text-gray-900 mb-3">Critérios de Avaliação</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Técnico</span>
                            <span className="font-bold">{evaluation.criteria.technical}/10</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                              style={{ width: `${evaluation.criteria.technical * 10}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Criatividade</span>
                            <span className="font-bold">{evaluation.criteria.creativity}/10</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                              style={{ width: `${evaluation.criteria.creativity * 10}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ações */}
                  <div className="flex space-x-3">
                    {evaluation.status === 'pending' ? (
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                        <Edit className="h-4 w-4" />
                        <span>Avaliar</span>
                      </button>
                    ) : (
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>Ver Detalhes</span>
                      </button>
                    )}
                    <button className="px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Feedback expandido */}
                  {selectedEvaluation === evaluation.id && evaluation.feedback && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl animate-in slide-in-from-top duration-300">
                      <h5 className="font-semibold text-gray-900 mb-2">Feedback do Professor</h5>
                      <p className="text-gray-700 text-sm">{evaluation.feedback}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TeacherEvaluations
