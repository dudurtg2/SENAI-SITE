import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import Private from './private-router'
import '../index.css'
import LandingPage from '../features/landing-page/page'
import Dashboard from '../features/dashboard/page'
import ProjectsPage from '../features/projects/page'
import AccountPage from '../features/account/page'
import LoginPage from '../features/login/page'
import ProjectDetailPage from '../features/project-detail/page'
import CreateProjectPage from '../features/create-project/page'
import NotificationsPage from '../features/notifications/notifications-page'
import { NotificationProvider } from '../contexts/notification-context'
import { AuthProvider } from '../contexts/auth-context'
import CalendarPage from '../features/calendar/calendar-page'
import CommunityPage from '../features/community/community-page'

const Routers: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/app"
              element={
                <Private>
                  <Layout />
                </Private>
              }
            >
              <Route index element={<ProjectsPage />} />
              <Route path="dashboard" element={<Dashboard />} />
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
          </Routes>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  )
}

export default Routers
