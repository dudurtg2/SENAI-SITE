import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import '../index.css'
import LandingPage from '../features/landing-page/page'
import Dashboard from '../features/dashboard/page'
import ProjectsPage from '../features/projects/page'
import AccountPage from '../features/account/page'

const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Routers
