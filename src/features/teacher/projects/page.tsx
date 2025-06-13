import React, { useState } from 'react'
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, MessageSquare } from 'lucide-react'

const TeacherProjects = () => {
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão Escolar',
      student: 'João Silva',
      class: 'TDS-2024-A',
      status: 'pending',
      submittedAt: '2025-06-08T10:30:00Z',
      description: 'Sistema completo para gerenciamento de notas, frequência e comunicação escolar.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      priority: 'high'
    },
    {
      id: 2,
      title: 'App de Controle Financeiro',
      student: 'Maria Santos',
      class: 'TDS-2024-A',
      status: 'approved',
      submittedAt: '2025-06-07T14:15:00Z',
      description: 'Aplicativo mobile para controle de gastos pessoais com relatórios detalhados.',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      priority: 'medium'
    },
    {
      id: 3,
      title: 'E-commerce de Livros',
      student: 'Pedro Costa',
      class: 'TDS-2023',
      status: 'revision',
      submittedAt: '2025-06-06T09:20:00Z',
      description: 'Plataforma de venda de livros online com sistema de recomendações.',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      priority: 'low'
    },
    {
      id: 4,
      title: 'Sistema de Agendamento',
      student: 'Ana Oliveira',
      class: 'TDS-2024-B',
      status: 'pending',
      submittedAt: '2025-06-09T08:45:00Z',
      description: 'Sistema para agendamento de consultas médicas com notificações automáticas.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      priority: 'high'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-700 bg-green-100'
      case 'pending':
        return 'text-yellow-700 bg-yellow-100'
      case 'revision':
        return 'text-red-700 bg-red-100'
      default:
        return 'text-gray-700 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4" />
      case 'pending':
        return <Clock className="h-4 w-4" />
      case 'revision':
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Aprovado'
      case 'pending':
        return 'Pendente'
      case 'revision':
        return 'Revisão'
      default:
        return 'Desconhecido'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500'
      case 'medium':
        return 'border-l-yellow-500'
      case 'low':
        return 'border-l-green-500'
      default:
        return 'border-l-gray-500'
    }
  }

  const filteredProjects = projects.filter(project => {
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gerenciar Projetos</h1>
          <p className="text-gray-600 mt-2">Avalie e acompanhe os projetos dos estudantes</p>
        </div>

        {/* Filtros e busca */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar por projeto ou estudante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Filtro por status */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todos os Status</option>
                <option value="pending">Pendentes</option>
                <option value="approved">Aprovados</option>
                <option value="revision">Em Revisão</option>
              </select>
            </div>
          </div>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {projects.filter(p => p.status === 'pending').length}
                </p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Aprovados</p>
                <p className="text-2xl font-bold text-green-600">
                  {projects.filter(p => p.status === 'approved').length}
                </p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Em Revisão</p>
                <p className="text-2xl font-bold text-red-600">
                  {projects.filter(p => p.status === 'revision').length}
                </p>
              </div>
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Lista de projetos */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-sm border-l-4 ${getPriorityColor(project.priority)} hover:shadow-md transition-shadow`}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>Por: <strong>{project.student}</strong></span>
                          <span>Turma: <strong>{project.class}</strong></span>
                          <span>
                            Submetido: {new Date(project.submittedAt).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span>{getStatusText(project.status)}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-2 lg:ml-6">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>Visualizar</span>
                    </button>
                    
                    {project.status === 'pending' && (
                      <>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          <CheckCircle className="h-4 w-4" />
                          <span>Aprovar</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>Solicitar Revisão</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Eye className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum projeto encontrado</h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termo de busca para encontrar projetos.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeacherProjects
