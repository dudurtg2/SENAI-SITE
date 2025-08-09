import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Clock,
  MessageSquare,
  FileCheck,
  Award,
  BarChart3,
  GraduationCap,
  Target,
  Bell
} from 'lucide-react'

interface User {
  uuid: string
  nome: string
  email: string
  tipo: string
  departamento?: string
  especialidade?: string
}

interface TeacherDashboardProps {
  user: User
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header do professor */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Bem-vindo, Prof. {user.nome}! 👨‍🏫
              </h1>
              <p className="text-gray-600">
                {user.departamento || 'Professor'} • {user.especialidade || 'SENAI'}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/teacher/students"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Users className="h-5 w-5 mr-2" />
                Meus Alunos
              </Link>
              <Link
                to="/teacher/evaluations"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileCheck className="h-5 w-5 mr-2" />
                Avaliações
              </Link>
            </div>
          </div>
        </div>

        {/* Estatísticas do professor */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Alunos Ativos</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Projetos Orientados</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avaliações Pendentes</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Taxa de Aprovação</p>
                <p className="text-2xl font-bold text-gray-900">92%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projetos sob orientação */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Projetos sob Orientação</h2>
                <Link 
                  to="/teacher/projects"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver todos →
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Sistema de IoT para Indústria 4.0",
                    student: "João Silva",
                    status: "Em Desenvolvimento",
                    progress: 65,
                    deadline: "20 dias",
                    priority: "alta"
                  },
                  {
                    title: "App Mobile para Delivery",
                    student: "Maria Santos",
                    status: "Revisão Final",
                    progress: 90,
                    deadline: "5 dias",
                    priority: "alta"
                  },
                  {
                    title: "Dashboard de Analytics",
                    student: "Pedro Costa",
                    status: "Planejamento",
                    progress: 25,
                    deadline: "45 dias",
                    priority: "media"
                  }
                ].map((project, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-600">Por: {project.student}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          project.priority === 'alta' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}></span>
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>Progresso: {project.progress}%</span>
                      <span>Prazo: {project.deadline}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gráfico de performance da turma */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Performance da Turma</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Excelente", value: 15, color: "bg-green-500" },
                  { label: "Bom", value: 20, color: "bg-blue-500" },
                  { label: "Regular", value: 8, color: "bg-yellow-500" },
                  { label: "Precisa Melhorar", value: 2, color: "bg-red-500" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`h-20 ${item.color} rounded-lg mb-2 flex items-end justify-center text-white font-bold`}>
                      {item.value}
                    </div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar do professor */}
          <div className="space-y-6">
            {/* Agenda do dia */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Agenda de Hoje</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { event: "Aula - Programação Web", time: "08:00 - 10:00", room: "Lab 2" },
                  { event: "Orientação TCC", time: "14:00 - 15:00", room: "Sala 101" },
                  { event: "Reunião Pedagógica", time: "16:00 - 17:00", room: "Auditório" }
                ].map((item, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{item.event}</p>
                    <p className="text-xs text-gray-500">{item.time} • {item.room}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/teacher/calendar"
                className="block text-center text-blue-600 hover:text-blue-700 font-medium text-sm mt-4"
              >
                Ver calendário completo →
              </Link>
            </div>

            {/* Avaliações pendentes */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Avaliações Pendentes</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { student: "Ana Clara", project: "Sistema de Estoque", days: "2 dias" },
                  { student: "Carlos Alberto", project: "App de Delivery", days: "4 dias" },
                  { student: "Sofia Lima", project: "Dashboard Analytics", days: "1 semana" }
                ].map((evaluation, index) => (
                  <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{evaluation.student}</p>
                    <p className="text-xs text-gray-600">{evaluation.project}</p>
                    <p className="text-xs text-yellow-700 mt-1">Há {evaluation.days}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/teacher/evaluations"
                className="block text-center text-purple-600 hover:text-purple-700 font-medium text-sm mt-4"
              >
                Ver todas →
              </Link>
            </div>

            {/* Mensagens recentes */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Mensagens</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { from: "João Silva", message: "Dúvida sobre o projeto final", time: "1h atrás" },
                  { from: "Maria Santos", message: "Solicitação de reunião", time: "3h atrás" },
                  { from: "Pedro Costa", message: "Envio de documentação", time: "1 dia atrás" }
                ].map((message, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">{message.from}</p>
                    <p className="text-xs text-gray-600">{message.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/teacher/messages"
                className="block text-center text-green-600 hover:text-green-700 font-medium text-sm mt-4"
              >
                Ver todas →
              </Link>
            </div>

            {/* Quick actions para professor */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
              
              <div className="space-y-3">
                <Link
                  to="/teacher/students"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Gerenciar Alunos</span>
                </Link>
                
                <Link
                  to="/teacher/evaluations"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Fazer Avaliação</span>
                </Link>
                
                <Link
                  to="/teacher/reports"
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Relatórios</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
