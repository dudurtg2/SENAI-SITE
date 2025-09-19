import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import Private from './private-router'
import AuthGuard from '../components/auth-guard'
import '../index.css'
import LandingPage from '../features/visitor/landing-page/page'
import Dashboard from '../features/student/dashboard/page'
import ProjectsPage from '../features/student/projects/page'
import AccountPage from '../features/student/account/page'
import LoginPage from '../features/auth/login/page'
import RegisterPage from '../features/auth/register/page'
import GoogleCallback from '../features/auth/google-callback'
import ProjectDetailPage from '../features/student/project-detail/page'
import CreateProjectPage from '../features/student/create-project/NewPage'
import NotificationsPage from '../features/shared/notifications/notifications-page'
import { NotificationProvider } from '../contexts/notification-context'
import { UserProvider } from '../contexts/user-context'
import { AuthProvider } from '../contexts/auth-context'
import { GuestProvider } from '../contexts/guest-context'
import CalendarPage from '../features/student/calendar/calendar-page'
import CommunityPage from '../features/student/community/community-page'
import TeacherLayout from '../features/teacher/layout/teacher-layout'
import TeacherDashboard from '../features/teacher/dashboard/page'
import TeacherProjects from '../features/teacher/projects/page'
import TeacherStudents from '../features/teacher/students/page'
import TeacherCalendar from '../features/teacher/calendar/page'
import TeacherEvaluations from '../features/teacher/evaluations/page'
import TeacherMessages from '../features/teacher/messages/page'
import TeacherReports from '../features/teacher/reports/page'
import TeacherCertificates from '../features/teacher/certificates/page'
import TeacherResources from '../features/teacher/resources/page'
import TeacherSettings from '../features/teacher/settings/page'
import SectionLayout from '../features/visitor/layout/SectionLayout'
import { 
  ComunidadeMaker, 
  BibliotecaMaker, 
  LaboratorioMaker, 
  ProjetosInovadores, 
  EducacaoTecnologica,
  Sobre,
  Equipe,
  Contato
} from '../features/visitor/sections'

const Routers: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <GuestProvider>
          <UserProvider>
            <Routes>
              {/* Landing page sem NotificationProvider para evitar chamadas de API */}
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/sobre-projeto" element={<AboutProjectPage />} /> */}
                
                {/* Páginas das Seções */}
                <Route path="/comunidade-maker" element={<ComunidadeMaker />} />
                <Route path="/biblioteca-maker" element={<BibliotecaMaker />} />
                <Route path="/laboratorio-maker" element={<LaboratorioMaker />} />
                <Route path="/projetos-inovadores" element={<ProjetosInovadores />} />
                <Route path="/educacao-tecnologica" element={<EducacaoTecnologica />} />
                
                {/* Novas páginas */}
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/politica-de-privacidade" element={
                  <SectionLayout>
                    <div className="min-h-screen bg-gray-50">
                      {/* Hero Section with LGPD Banner */}
                      <section className="relative h-[40vh] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
                        <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
                        <div className="relative z-10 flex items-center justify-center h-full">
                          <div className="text-center text-white max-w-4xl px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
                              Política de Privacidade
                            </h1>
                            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                              Central de Repositórios e Expositor de Projetos SENAI - LGPD Compliance
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* Content Section */}
                      <section className="py-12 px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                          
                          {/* Introduction */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introdução</h2>
                            <p className="text-gray-600 leading-relaxed">
                              Esta Política de Privacidade descreve como a Central de Repositórios e Expositor de Projetos SENAI 
                              coleta, usa, armazena e protege suas informações pessoais em conformidade com a Lei Geral de 
                              Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais regulamentações aplicáveis.
                            </p>
                          </div>

                          {/* Data Collection */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Informações que Coletamos</h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">2.1 Dados de Identificação</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                  <li>Nome completo</li>
                                  <li>E-mail institucional ou pessoal</li>
                                  <li>CPF (quando aplicável)</li>
                                  <li>Número de matrícula (estudantes)</li>
                                  <li>Número de registro profissional (professores)</li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">2.2 Dados Acadêmicos</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                  <li>Curso de vinculação</li>
                                  <li>Turma e período</li>
                                  <li>Projetos desenvolvidos</li>
                                  <li>Anexos e documentos acadêmicos</li>
                                  <li>Histórico de atividades na plataforma</li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">2.3 Dados Técnicos</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                  <li>Endereço IP</li>
                                  <li>Logs de acesso</li>
                                  <li>Informações do navegador</li>
                                  <li>Dispositivo utilizado</li>
                                  <li>Cookies e tecnologias similares</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Data Usage */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Como Utilizamos seus Dados</h2>
                            <div className="space-y-3">
                              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-semibold text-gray-800 mb-2">Operação da Plataforma</h3>
                                <p className="text-gray-600 text-sm">
                                  Para criar e manter contas de usuário, autenticar acessos e fornecer 
                                  funcionalidades da plataforma de repositório de projetos.
                                </p>
                              </div>
                              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-semibold text-gray-800 mb-2">Gestão Acadêmica</h3>
                                <p className="text-gray-600 text-sm">
                                  Para organizar projetos por curso e turma, facilitar a avaliação 
                                  por professores e gerar relatórios acadêmicos.
                                </p>
                              </div>
                              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-semibold text-gray-800 mb-2">Comunicação</h3>
                                <p className="text-gray-600 text-sm">
                                  Para enviar notificações sobre projetos, atualizações da plataforma 
                                  e comunicações institucionais relevantes.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* User Rights */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Seus Direitos sob a LGPD</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">✓ Acesso aos Dados</h3>
                                <p className="text-gray-600 text-sm">
                                  Solicitar informações sobre quais dados pessoais processamos sobre você.
                                </p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">✓ Correção de Dados</h3>
                                <p className="text-gray-600 text-sm">
                                  Solicitar a correção de dados pessoais incompletos ou inexatos.
                                </p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">✓ Exclusão de Dados</h3>
                                <p className="text-gray-600 text-sm">
                                  Solicitar a exclusão de dados pessoais desnecessários ou excessivos.
                                </p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">✓ Portabilidade</h3>
                                <p className="text-gray-600 text-sm">
                                  Solicitar a portabilidade de dados para outro fornecedor de serviço.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Data Security */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Segurança dos Dados</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
                              seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="text-center p-4 border rounded-lg">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-blue-600 text-xl">🔒</span>
                                </div>
                                <h3 className="font-semibold text-gray-800 text-sm">Criptografia</h3>
                                <p className="text-gray-600 text-xs mt-1">
                                  Dados sensíveis protegidos por criptografia avançada
                                </p>
                              </div>
                              <div className="text-center p-4 border rounded-lg">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-green-600 text-xl">🛡️</span>
                                </div>
                                <h3 className="font-semibold text-gray-800 text-sm">Acesso Controlado</h3>
                                <p className="text-gray-600 text-xs mt-1">
                                  Autenticação de dois fatores e controle de acesso
                                </p>
                              </div>
                              <div className="text-center p-4 border rounded-lg">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-purple-600 text-xl">📊</span>
                                </div>
                                <h3 className="font-semibold text-gray-800 text-sm">Monitoramento</h3>
                                <p className="text-gray-600 text-xs mt-1">
                                  Logs de auditoria e monitoramento contínuo
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contato e Exercício de Direitos</h2>
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                              <h3 className="font-semibold text-gray-800 mb-3">📧 Encarregado de Proteção de Dados (DPO)</h3>
                              <div className="space-y-2 text-gray-600">
                                <p><strong>E-mail:</strong> lgpd@senai.br</p>
                                <p><strong>Telefone:</strong> (11) 3555-5555</p>
                                <p><strong>Endereço:</strong> Av. Paulista, 1313 - Bela Vista, São Paulo - SP</p>
                              </div>
                              <p className="text-gray-600 text-sm mt-4">
                                Para exercer qualquer um de seus direitos ou esclarecer dúvidas sobre esta política, 
                                entre em contato conosco através dos canais acima. Responderemos sua solicitação 
                                em até 15 dias úteis.
                              </p>
                            </div>
                          </div>

                          {/* Updates */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Atualizações desta Política</h2>
                            <p className="text-gray-600 leading-relaxed">
                              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças 
                              em nossas práticas de tratamento de dados ou por exigências legais. Notificaremos sobre 
                              alterações significativas através da plataforma ou por e-mail.
                            </p>
                          </div>

                          {/* Final Information */}
                          <div className="border-t pt-6 mt-8">
                            <div className="text-center text-gray-500 text-sm space-y-2">
                              <p><strong>Última atualização:</strong> Janeiro de 2024</p>
                              <p><strong>Versão:</strong> 2.1</p>
                              <p className="mt-4">
                                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                                e demais regulamentações aplicáveis à proteção de dados pessoais no Brasil.
                              </p>
                            </div>
                          </div>

                        </div>
                      </section>
                    </div>
                  </SectionLayout>
                } />
                
                {/* Rotas que precisam do NotificationProvider */}
                <Route path="/*" element={
                  <NotificationProvider>
                    <Routes>
                      <Route 
                        path="/login" 
                        element={
                          <AuthGuard redirectIfAuthenticated={true}>
                            <LoginPage />
                          </AuthGuard>
                    } 
                  />
                  <Route 
                    path="/register" 
                    element={
                      <AuthGuard redirectIfAuthenticated={true}>
                        <RegisterPage />
                      </AuthGuard>
                    } 
                  />                  <Route path="/auth/google/callback" element={<GoogleCallback />} />
                  <Route path="/login/oauth2/code/google" element={<GoogleCallback />} />
                {/* Rotas do Estudante */}
                <Route
                  path="/app"
                  element={
                    <Private>
                      <Layout />
                    </Private>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="projects" element={<ProjectsPage />} />
                  <Route path="account" element={<AccountPage />} />
                  <Route
                    path="projects/:projectId"
                    element={<ProjectDetailPage />}
                  />
                  <Route path="create-project" element={<CreateProjectPage />} />
                  <Route path="notifications" element={<NotificationsPage />} />
                  <Route path="calendar" element={<CalendarPage />} />
                  <Route path="community" element={<CommunityPage />} />
                </Route>
                
                {/* Rotas do Professor */}
                <Route 
                  path="/teacher" 
                  element={
                    <Private>
                      <TeacherLayout />
                    </Private>
                  }
                >
                  <Route index element={<TeacherDashboard />} />
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="projects" element={<TeacherProjects />} />
                  <Route path="students" element={<TeacherStudents />} />
                  <Route path="calendar" element={<TeacherCalendar />} />
                  <Route path="evaluations" element={<TeacherEvaluations />} />
                  <Route path="reports" element={<TeacherReports />} />
                  <Route path="certificates" element={<TeacherCertificates />} />                  <Route path="messages" element={<TeacherMessages />} />
                  <Route path="resources" element={<TeacherResources />} />                  <Route path="settings" element={<TeacherSettings />} />
                </Route>
                    </Routes>
                  </NotificationProvider>
                } />
              </Routes>
          </UserProvider>
        </GuestProvider>
      </AuthProvider>
    </Router>
  )
}

export default Routers
