import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import '../index.css'
import LandingPage from '../features/landing-page/page'
import Dashboard from '../features/dashboard/page'
import ProjectsPage from '../features/projects/page'
import AccountPage from '../features/account/page'
import LoginPage from '../features/login/page'
import ProjectDetailPage from '../features/project-detail/page'
import CreateProjectPage from '../features/create-project/page'
import NotificationsPage from '../features/notifications/NotificationsPage'
import { NotificationProvider } from '../contexts/notification-context'
import { UserProvider } from '../contexts/user-context'
import CalendarPage from '../features/calendar/CalendarPage'
import CommunityPage from '../features/community/CommunityPage'
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
      <UserProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Rotas do Estudante */}
            <Route path="/app" element={<Layout />}>
              <Route index element={<ProjectsPage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="projects/:projectId" element={<ProjectDetailPage />} />
              <Route path="create-project" element={<CreateProjectPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="community" element={<CommunityPage />} />
            </Route>            {/* Rotas do Professor */}
            <Route path="/teacher" element={<TeacherLayout />}>
              <Route index element={<TeacherDashboard />} />
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="projects" element={<TeacherProjects />} />
              <Route path="students" element={<TeacherStudents />} />
              <Route path="calendar" element={<TeacherCalendar />} />
              <Route path="evaluations" element={<TeacherEvaluations />} />
              <Route path="reports" element={<TeacherReports />} />
              <Route path="certificates" element={<TeacherCertificates />} />
              <Route path="messages" element={<TeacherMessages />} />
              <Route path="resources" element={<TeacherResources />} />
              <Route path="settings" element={<TeacherSettings />} />
            </Route>
          </Routes>
        </NotificationProvider>
      </UserProvider>
    </Router>
  )
}

export default Routers
