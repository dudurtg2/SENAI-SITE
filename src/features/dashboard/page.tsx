import React from 'react'
import { useAuth } from '../../contexts/auth-context'
import { useGuest } from '../../contexts/guest-context'
import StudentDashboard from './components/student-dashboard'
import TeacherDashboard from './components/teacher-dashboard'
import GuestDashboard from './components/guest-dashboard'

function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const { isGuest } = useGuest()

  // Se ainda está carregando, não renderizar nada ou um loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Visitante - não autenticado OU explicitamente em modo guest
  if (!isAuthenticated || !user || isGuest) {
    return <GuestDashboard />
  }

  // Log para debug
  console.log('Dashboard - User:', user)
  console.log('Dashboard - isAuthenticated:', isAuthenticated)
  console.log('Dashboard - isGuest:', isGuest)

  // Usuário autenticado - redirecionar baseado no tipo
  const userType = user.tipo?.toLowerCase()
  
  // Converter o user do auth-context para o formato esperado pelos componentes
  const dashboardUser = {
    uuid: user.uuid,
    nome: user.nome,
    email: user.email,
    tipo: user.tipo,
    matricula: user.matricula || undefined,
    curso: user.curso || undefined,
    departamento: user.departamento || undefined,
    especialidade: user.especialidade || undefined
  }
  
  switch (userType) {
    case 'professor':
      return <TeacherDashboard user={dashboardUser} />
    case 'aluno':
    case 'student':
      return <StudentDashboard user={dashboardUser} />
    default:
      // Fallback para aluno se tipo não identificado
      return <StudentDashboard user={dashboardUser} />
  }
}

export default Dashboard
