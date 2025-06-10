import React, { useState, useEffect } from 'react'
import { Award, Download, Plus, Search, Filter, Eye, Share2, Star, TrendingUp, Users, Calendar, CheckCircle, Clock, Zap, Medal, Trophy, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TeacherCertificates = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const certificates = [
    {
      id: 1,
      studentName: 'João Silva',
      avatar: '👨‍💻',
      projectTitle: 'Sistema de Gestão Escolar',
      class: 'TDS-2024-A',
      completionDate: '2025-06-01',
      status: 'issued',
      grade: 9.5,
      skills: ['React', 'Node.js', 'MongoDB'],
      mentor: 'Prof. Ana Costa',
      downloadCount: 12,
      shareCount: 5,
      validationCode: 'CERT-2024-001',
      description: 'Projeto completo de sistema de gestão com interface moderna e backend robusto'
    },
    {
      id: 2,
      studentName: 'Maria Santos',
      avatar: '👩‍💻',
      projectTitle: 'App de Controle Financeiro',
      class: 'TDS-2024-A',
      completionDate: '2025-05-28',
      status: 'issued',
      grade: 9.8,
      skills: ['React Native', 'Firebase', 'TypeScript'],
      mentor: 'Prof. Carlos Silva',
      downloadCount: 8,
      shareCount: 3,
      validationCode: 'CERT-2024-002',
      description: 'Aplicativo mobile completo para gestão financeira pessoal'
    }
  ]

  const stats = {
    totalCertificates: certificates.length,
    issuedCertificates: certificates.filter(c => c.status === 'issued').length,
    pendingCertificates: certificates.filter(c => c.status === 'pending').length,
    averageGrade: (certificates.reduce((acc, c) => acc + c.grade, 0) / certificates.length).toFixed(1),
    totalDownloads: certificates.reduce((acc, c) => acc + c.downloadCount, 0)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'issued':
        return { bg: 'bg-green-100', text: 'text-green-700', badge: 'bg-green-500', icon: CheckCircle }
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-500', icon: Clock }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', badge: 'bg-gray-500', icon: Clock }
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-yellow-200 rounded-full animate-spin border-t-yellow-600 mx-auto"></div>
            <Award className="h-8 w-8 text-yellow-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Carregando certificados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Ultra-Moderno */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Certificados
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-600">Sistema ativo</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Novo Certificado</span>
            </button>
          </div>

          {/* Barra de Pesquisa */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por estudante ou projeto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-200 focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stats.totalCertificates}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">{stats.issuedCertificates}</div>
                  <div className="text-sm text-gray-600">Emitidos</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">{stats.averageGrade}</div>
                  <div className="text-sm text-gray-600">Nota Média</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">{stats.totalDownloads}</div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
                  <Download className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Certificados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((cert) => {
            const statusColors = getStatusColor(cert.status)
            const StatusIcon = statusColors.icon
            
            return (
              <div
                key={cert.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedCertificate(selectedCertificate === cert.id ? null : cert.id)}
              >
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{cert.avatar}</div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.studentName}</h3>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${statusColors.badge} rounded-full`}></div>
                          <span className="text-sm opacity-90 capitalize">{cert.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Trophy className="h-5 w-5 text-yellow-300 mb-1" />
                      <div className="text-2xl font-bold">{cert.grade}</div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.projectTitle}</h4>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-2xl p-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{cert.class}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{new Date(cert.completionDate).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex space-x-3">
                    <button 
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                      disabled={cert.status !== 'issued'}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>Visualizar</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TeacherCertificates
