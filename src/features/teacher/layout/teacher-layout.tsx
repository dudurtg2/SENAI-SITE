import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherHeader from '../components/teacher-header'
import TeacherSidebar from '../components/teacher-sidebar'

const TeacherLayout = () => {
  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar Modernizada */}
      <div className="flex-shrink-0">
        <TeacherSidebar />
      </div>

      {/* Container principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 bg-white shadow-sm border-b border-gray-200">
          <TeacherHeader />
        </div>

        {/* Conteúdo principal */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default TeacherLayout
