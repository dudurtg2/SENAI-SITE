import React, { useState } from 'react'
import { Award, Download, Plus, Search, Filter, Eye, Share2, Star, TrendingUp, Users, Calendar, CheckCircle, Clock, Zap, Medal, Trophy, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAlunos, useProjetos } from '../../../hooks/use-queries'

const TeacherCertificates = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Busca dados reais do backend
  const { data: alunos = [], isLoading: isLoadingAlunos } = useAlunos()
  const { data: projetos = [], isLoading: isLoadingProjetos } = useProjetos()

  const isLoading = isLoadingAlunos || isLoadingProjetos

  // Gera certificados baseados em projetos concluídos
  const certificates = React.useMemo(() => {
    if (!projetos || !alunos) return []
    
    return projetos
      .filter(projeto => projeto.status === 'CONCLUIDO' || projeto.status === 'FINALIZADO')
      .map((projeto) => {
        const student = alunos.find(aluno => aluno.uuid === projeto.liderProjeto?.uuid)
        
        return {
          id: projeto.uuid,
          studentName: student?.usuarios?.usuario || 'Aluno não encontrado',
          avatar: '👤',
          projectTitle: projeto.titulo,
          class: projeto.turma || 'Turma não informada',
          completionDate: new Date(projeto.atualizadoEm || projeto.criadoEm).toISOString().split('T')[0],
          status: 'issued',
          grade: 8.5,
          skills: [],
          mentor: 'Professor Responsável',
          downloadCount: 0,
          shareCount: 0,
          certificateNumber: `CERT-${projeto.uuid.substring(0, 8).toUpperCase()}`,
          workload: '40h',
          validationCode: `CERT-${projeto.uuid.substring(0, 8).toUpperCase()}`,
          description: projeto.descricao || 'Projeto concluído com sucesso'
        }
      })
  }, [projetos, alunos])

  const stats = {
    totalCertificates: certificates.length,
    issuedCertificates: certificates.filter(c => c.status === 'issued').length,
    pendingCertificates: certificates.filter(c => c.status === 'pending').length,
    averageGrade: certificates.length > 0 ? (certificates.reduce((acc, c) => acc + c.grade, 0) / certificates.length).toFixed(1) : '0.0',
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

  const filteredCertificates = certificates.filter(cert => {
    const matchesStatus = filterStatus === 'all' || cert.status === filterStatus
    const matchesSearch = cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600 mx-auto"></div>
            <Award className="h-8 w-8 text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Carregando certificados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificados</h1>
          <p className="text-gray-600">Gerencie e acompanhe os certificados dos seus alunos</p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCertificates}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Emitidos</p>
                <p className="text-2xl font-bold text-green-600">{stats.issuedCertificates}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pendingCertificates}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Média</p>
                <p className="text-2xl font-bold text-purple-600">{stats.averageGrade}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Downloads</p>
                <p className="text-2xl font-bold text-indigo-600">{stats.totalDownloads}</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Download className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar por aluno ou projeto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">Todos os Status</option>
                  <option value="issued">Emitidos</option>
                  <option value="pending">Pendentes</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de certificados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCertificates.length === 0 ? (
            <div className="col-span-full bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum certificado encontrado</h3>
              <p className="text-gray-600">
                {certificates.length === 0 
                  ? 'Nenhum projeto foi concluído ainda.'
                  : 'Tente ajustar os filtros de busca.'
                }
              </p>
            </div>
          ) : (
            filteredCertificates.map((cert) => {
              const statusInfo = getStatusColor(cert.status)
              const IconComponent = statusInfo.icon

              return (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(Number(cert.id))}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedCertificate(selectedCertificate === cert.id ? null : cert.id)}
                >
                  {/* Header do Card */}
                  <div className={`p-4 ${statusInfo.bg} border-b border-gray-100`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{cert.avatar}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{cert.studentName}</h4>
                          <p className="text-sm text-gray-600">{cert.class}</p>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${statusInfo.bg}`}>
                        <IconComponent className="h-4 w-4" />
                        <span className={`text-xs font-medium ${statusInfo.text}`}>
                          {cert.status === 'issued' ? 'Emitido' : 'Pendente'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.projectTitle}</h4>
                      <p className="text-gray-600 text-sm">Projeto concluído com sucesso</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Conclusão</span>
                        </div>
                        <p className="font-medium text-gray-900 mt-1">
                          {new Date(cert.completionDate).toLocaleDateString('pt-BR')}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="text-gray-600">Nota</span>
                        </div>
                        <p className="font-medium text-gray-900 mt-1">{cert.grade.toFixed(1)}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{cert.downloadCount}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 className="h-4 w-4" />
                          <span>{cert.shareCount}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default TeacherCertificates
