import React, { useState, useEffect } from 'react'
import { BarChart3, Download, Users, BookOpen, TrendingUp, Filter, Eye, FileText, Calendar, Target, Award, Activity, Zap, PieChart, LineChart, ArrowUp, ArrowDown, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TeacherReports = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedReport, setSelectedReport] = useState('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('current-semester')
  const [selectedClass, setSelectedClass] = useState('all')

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const reportTypes = [
    { id: 'overview', name: 'Visão Geral', icon: BarChart3, color: 'from-blue-500 to-indigo-600' },
    { id: 'students', name: 'Desempenho dos Estudantes', icon: Users, color: 'from-green-500 to-emerald-600' },
    { id: 'projects', name: 'Relatório de Projetos', icon: BookOpen, color: 'from-purple-500 to-pink-600' },
    { id: 'classes', name: 'Relatório por Turma', icon: TrendingUp, color: 'from-orange-500 to-red-600' },
    { id: 'performance', name: 'Performance Mensal', icon: LineChart, color: 'from-teal-500 to-cyan-600' }
  ]

  const overviewData = {
    totalStudents: 142,
    totalProjects: 78,
    approvedProjects: 65,
    averageGrade: 8.2,
    completionRate: 83.3,
    monthlyGrowth: 12.5,
    engagementRate: 89.2,
    certificatesIssued: 58
  }

  const classData = [
    { 
      name: 'TDS-2024-A', 
      students: 28, 
      projects: 25, 
      approved: 22, 
      average: 8.5,
      engagement: 92,
      trend: 'up',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'TDS-2024-B', 
      students: 32, 
      projects: 28, 
      approved: 24, 
      average: 8.1,
      engagement: 87,
      trend: 'up',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'TDS-2023', 
      students: 25, 
      projects: 25, 
      approved: 19, 
      average: 7.8,
      engagement: 78,
      trend: 'down',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const monthlyData = [
    { month: 'Jan', projects: 12, approved: 10, grade: 8.1 },
    { month: 'Fev', projects: 15, approved: 13, grade: 8.3 },
    { month: 'Mar', projects: 18, approved: 16, grade: 8.4 },
    { month: 'Abr', projects: 14, approved: 12, grade: 8.2 },
    { month: 'Mai', projects: 19, approved: 14, grade: 8.0 },
    { month: 'Jun', projects: 22, approved: 20, grade: 8.6 }
  ]

  const topStudents = [
    { name: 'Ana Carolina', avatar: '👩‍🎓', grade: 9.8, projects: 5, improvement: '+0.8' },
    { name: 'João Silva', avatar: '👨‍💻', grade: 9.5, projects: 4, improvement: '+0.5' },
    { name: 'Maria Santos', avatar: '👩‍💻', grade: 9.2, projects: 4, improvement: '+0.3' },
    { name: 'Pedro Costa', avatar: '👨‍🎓', grade: 9.0, projects: 3, improvement: '+0.2' }
  ]

  const techStats = [
    { tech: 'React', usage: 85, projects: 34, color: 'bg-blue-500' },
    { tech: 'Node.js', usage: 72, projects: 28, color: 'bg-green-500' },
    { tech: 'MongoDB', usage: 58, projects: 23, color: 'bg-green-600' },
    { tech: 'TypeScript', usage: 45, projects: 18, color: 'bg-blue-600' },
    { tech: 'Vue.js', usage: 32, projects: 12, color: 'bg-emerald-500' }
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-emerald-200 rounded-full animate-spin border-t-emerald-600 mx-auto"></div>
            <BarChart3 className="h-8 w-8 text-emerald-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Gerando relatórios...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Ultra-Moderno */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Relatórios
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-600">Dados atualizados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300"
              >
                <option value="current-semester">Semestre Atual</option>
                <option value="last-semester">Semestre Anterior</option>
                <option value="current-year">Ano Atual</option>
              </select>

              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Exportar</span>
              </button>
            </div>
          </div>

          {/* Tipos de Relatório */}
          <div className="flex items-center space-x-4 mt-6 overflow-x-auto pb-2">
            {reportTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedReport(type.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap ${
                    selectedReport === type.id
                      ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{type.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Métricas Principais */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{overviewData.totalStudents}</div>
                  <div className="text-sm text-gray-600">Total de Estudantes</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <ArrowUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 text-sm font-medium">+{overviewData.monthlyGrowth}%</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{overviewData.totalProjects}</div>
                  <div className="text-sm text-gray-600">Projetos Submetidos</div>
                  <div className="text-green-600 text-sm font-medium">
                    {overviewData.approvedProjects} aprovados
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{overviewData.averageGrade}</div>
                  <div className="text-sm text-gray-600">Nota Média Geral</div>
                  <div className="text-blue-600 text-sm font-medium">
                    {overviewData.completionRate}% conclusão
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{overviewData.engagementRate}%</div>
                  <div className="text-sm text-gray-600">Taxa de Engajamento</div>
                  <div className="text-orange-600 text-sm font-medium">
                    {overviewData.certificatesIssued} certificados
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl">
                  <Activity className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance por Turma */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Performance por Turma</h3>
                <p className="opacity-90">Análise comparativa das turmas</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {classData.map((classItem, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 bg-gradient-to-r ${classItem.color} rounded-2xl text-white`}>
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{classItem.name}</h4>
                            <p className="text-sm text-gray-600">{classItem.students} estudantes</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {classItem.trend === 'up' ? (
                            <ArrowUp className="h-5 w-5 text-green-500" />
                          ) : (
                            <ArrowDown className="h-5 w-5 text-red-500" />
                          )}
                          <span className={`text-sm font-medium ${
                            classItem.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {classItem.engagement}%
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-white rounded-xl">
                          <div className="text-xl font-bold text-blue-600">{classItem.projects}</div>
                          <div className="text-xs text-gray-600">Projetos</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-xl">
                          <div className="text-xl font-bold text-green-600">{classItem.approved}</div>
                          <div className="text-xs text-gray-600">Aprovados</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-xl">
                          <div className="text-xl font-bold text-purple-600">{classItem.average}</div>
                          <div className="text-xs text-gray-600">Média</div>
                        </div>
                      </div>

                      {/* Barra de Progresso */}
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Taxa de Aprovação</span>
                          <span className="font-medium">{Math.round((classItem.approved / classItem.projects) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${classItem.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${(classItem.approved / classItem.projects) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar com Estatísticas */}
          <div className="space-y-6">
            {/* Top Estudantes */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Top Estudantes</h3>
                <p className="opacity-90">Melhores performances</p>
              </div>
              
              <div className="p-6 space-y-4">
                {topStudents.map((student, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{student.avatar}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-600">{student.projects} projetos</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{student.grade}</div>
                      <div className="text-xs text-green-600">{student.improvement}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tecnologias Mais Usadas */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Tecnologias</h3>
                <p className="opacity-90">Mais utilizadas</p>
              </div>
              
              <div className="p-6 space-y-4">
                {techStats.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{tech.tech}</span>
                      <span className="text-sm text-gray-600">{tech.projects} projetos</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${tech.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${tech.usage}%` }}
                      />
                    </div>
                    <div className="text-right text-sm text-gray-600">{tech.usage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gráfico de Performance Mensal */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Performance Mensal</h3>
              <p className="opacity-90">Evolução ao longo do tempo</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-6 gap-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                      <div className="text-sm font-medium text-gray-600 mb-2">{month.month}</div>
                      
                      {/* Bar Chart Visual */}
                      <div className="flex items-end justify-center space-x-1 h-16 mb-2">
                        <div 
                          className="bg-blue-500 rounded-t w-3"
                          style={{ height: `${(month.projects / 25) * 64}px` }}
                          title={`Projetos: ${month.projects}`}
                        />
                        <div 
                          className="bg-green-500 rounded-t w-3"
                          style={{ height: `${(month.approved / 25) * 64}px` }}
                          title={`Aprovados: ${month.approved}`}
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600">
                          {month.projects} proj.
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          {month.approved} aprov.
                        </div>
                        <div className="text-xs text-purple-600 font-bold">
                          ★ {month.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherReports
