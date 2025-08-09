import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Plus, 
  TrendingUp, 
  Users,
  Bell,
  FileText,
  Award
} from 'lucide-react'
import { useProjetos } from '@/hooks/use-queries'
import { useNotifications } from '@/hooks/use-queries'

interface User {
  uuid: string
  nome: string
  email: string
  tipo: string
  matricula?: string
  curso?: string
}

interface StudentDashboardProps {
  user: User
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ user }) => {
  // Busca projetos reais do usuário
  const { data: projetos = [], isLoading: isLoadingProjetos } = useProjetos()
  const { data: notificationsResponse, isLoading: isLoadingNotifications } = useNotifications()

  // Filtra projetos do usuário (como líder)
  const userProjects = projetos.filter(projeto => 
    projeto.liderProjeto?.uuid === user.uuid
  )

  // Calcula estatísticas reais
  const totalProjects = userProjects.length
  const completedProjects = userProjects.filter(p => p.status === 'CONCLUIDO' || p.status === 'FINALIZADO').length
  const inProgressProjects = userProjects.filter(p => p.status === 'EM_ANDAMENTO' || p.status === 'INICIADO').length

  // Pega os 3 projetos mais recentes (ordenado por data de criação)
  const recentProjects = userProjects
    .sort((a, b) => new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime())
    .slice(0, 3)

  // Pega as 3 notificações mais recentes
  const notifications = notificationsResponse?.data || []
  const recentNotifications = notifications.slice(0, 3)

  // Função para mapear status do backend para display
  const getProjectStatus = (status: string) => {
    switch (status) {
      case 'CONCLUIDO':
      case 'FINALIZADO':
        return { text: 'Concluído', color: 'green', progress: 100 }
      case 'EM_ANDAMENTO':
      case 'INICIADO':
        return { text: 'Em Andamento', color: 'yellow', progress: 75 }
      case 'PAUSADO':
        return { text: 'Pausado', color: 'orange', progress: 50 }
      default:
        return { text: 'Não Iniciado', color: 'gray', progress: 0 }
    }
  }

  // Calcula progresso médio (simplificado)
  const calculateProgress = (projeto: any) => {
    const status = getProjectStatus(projeto.status)
    return status.progress
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header do estudante */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Olá, {user.nome}! 👋
              </h1>
              <p className="text-gray-600">
                {user.curso || 'Estudante'} • Matrícula: {user.matricula || 'N/A'}
              </p>
            </div>
            <Link
              to="/app/create-project"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Novo Projeto
            </Link>
          </div>
        </div>        {/* Estatísticas do estudante */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Meus Projetos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {isLoadingProjetos ? '...' : totalProjects}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Concluídos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {isLoadingProjetos ? '...' : completedProjects}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Em Andamento</p>
                <p className="text-2xl font-bold text-gray-900">
                  {isLoadingProjetos ? '...' : inProgressProjects}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Progresso Médio</p>
                <p className="text-2xl font-bold text-gray-900">
                  {isLoadingProjetos ? '...' : 
                    totalProjects > 0 ? 
                      Math.round(userProjects.reduce((acc, p) => acc + calculateProgress(p), 0) / totalProjects) + '%' 
                      : '0%'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meus projetos recentes */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Meus Projetos Recentes</h2>
                <Link 
                  to="/app"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver todos →
                </Link>
              </div>              <div className="space-y-4">
                {isLoadingProjetos ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-gray-500 mt-2">Carregando projetos...</p>
                  </div>
                ) : recentProjects.length === 0 ? (
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Nenhum projeto encontrado</p>
                    <Link 
                      to="/app/create-project"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-2 inline-block"
                    >
                      Criar primeiro projeto →
                    </Link>
                  </div>
                ) : (
                  recentProjects.map((projeto) => {
                    const status = getProjectStatus(projeto.status)
                    const progress = calculateProgress(projeto)
                    const createdDate = new Date(projeto.criadoEm).toLocaleDateString('pt-BR')
                    
                    return (
                      <div key={projeto.uuid} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{projeto.titulo}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            status.color === 'green' ? 'bg-green-100 text-green-700' :
                            status.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                            status.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {status.text}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{projeto.descricao}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <span>Progresso: {progress}%</span>
                          <span>Criado em: {createdDate}</span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              status.color === 'green' ? 'bg-green-500' :
                              status.color === 'yellow' ? 'bg-yellow-500' :
                              status.color === 'orange' ? 'bg-orange-500' :
                              'bg-gray-500'
                            }`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Próximas atividades */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Próximas Atividades</h3>
              </div>
                <div className="space-y-3">
                {isLoadingProjetos ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-xs text-gray-500 mt-1">Carregando...</p>
                  </div>
                ) : userProjects.length === 0 ? (
                  <div className="text-center py-4">
                    <Calendar className="h-8 w-8 text-gray-300 mx-auto mb-1" />
                    <p className="text-xs text-gray-500">Nenhuma atividade</p>
                  </div>
                ) : (
                  userProjects
                    .filter(p => p.status === 'EM_ANDAMENTO' || p.status === 'INICIADO')
                    .slice(0, 3)
                    .map((projeto) => {
                      const isUrgent = new Date(projeto.criadoEm) < new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Mais de 7 dias
                      const daysSinceCreation = Math.floor((Date.now() - new Date(projeto.criadoEm).getTime()) / (1000 * 60 * 60 * 24))
                      
                      return (
                        <div key={projeto.uuid} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div className={`w-2 h-2 rounded-full ${isUrgent ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{projeto.titulo}</p>
                            <p className="text-xs text-gray-500">
                              {daysSinceCreation === 0 ? 'Hoje' : 
                               daysSinceCreation === 1 ? 'Ontem' : 
                               `${daysSinceCreation} dias atrás`}
                            </p>
                          </div>
                        </div>
                      )
                    })
                )}
              </div>
            </div>

            {/* Notificações recentes */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Notificações</h3>
              </div>
                <div className="space-y-3">
                {isLoadingNotifications ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto"></div>
                    <p className="text-xs text-gray-500 mt-1">Carregando...</p>
                  </div>
                ) : recentNotifications.length === 0 ? (
                  <div className="text-center py-4">
                    <Bell className="h-8 w-8 text-gray-300 mx-auto mb-1" />
                    <p className="text-xs text-gray-500">Nenhuma notificação</p>
                  </div>
                ) : (
                  recentNotifications.map((notification) => (
                    <div key={notification.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900">{notification.project?.name || 'Nova notificação'}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(notification.createdAt).toLocaleString('pt-BR')}
                      </p>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  ))
                )}
              </div>
              
              <Link 
                to="/app/notifications"
                className="block text-center text-blue-600 hover:text-blue-700 font-medium text-sm mt-4"
              >
                Ver todas →
              </Link>
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
              
              <div className="space-y-3">
                <Link
                  to="/app/create-project"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Plus className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Novo Projeto</span>
                </Link>
                
                <Link
                  to="/app/calendar"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Ver Calendário</span>
                </Link>
                
                <Link
                  to="/app/community"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Comunidade</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
