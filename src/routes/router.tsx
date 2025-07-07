import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import Private from './private-router'
import AuthGuard from '../components/auth-guard'
import '../index.css'
import LandingPage from '../features/landing-page/page'
import Dashboard from '../features/dashboard/page'
import ProjectsPage from '../features/projects/page'
import AccountPage from '../features/account/page'
import LoginPage from '../features/login/page'
import RegisterPage from '../features/register/page'
import GoogleCallback from '../features/auth/google-callback'
import ProjectDetailPage from '../features/project-detail/page'
import CreateProjectPage from '../features/create-project/NewPage'
import NotificationsPage from '../features/notifications/notifications-page'
import { NotificationProvider } from '../contexts/notification-context'
import { UserProvider } from '../contexts/user-context'
import { AuthProvider } from '../contexts/auth-context'
import { GuestProvider } from '../contexts/guest-context'
import CalendarPage from '../features/calendar/calendar-page'
import CommunityPage from '../features/community/community-page'
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

const Routers: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <GuestProvider>
          <UserProvider>
            <Routes>
              {/* Landing page sem NotificationProvider para evitar chamadas de API */}
              <Route path="/" element={<LandingPage />} />
              
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
                />                <Route path="/auth/google/callback" element={<GoogleCallback />} />
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
                <Route path="certificates" element={<TeacherCertificates />} />                <Route path="messages" element={<TeacherMessages />} />
                <Route path="resources" element={<TeacherResources />} />                <Route path="settings" element={<TeacherSettings />} />
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
