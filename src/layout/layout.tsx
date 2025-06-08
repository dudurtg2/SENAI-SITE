import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import { useHideSidebar } from '../hooks/use-hide-sidebar'

const Layout = () => {
  const hideSidebar = useHideSidebar()

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <Header />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {!hideSidebar && (
          <div className="w-64 flex-shrink-0 overflow-hidden mb-3 ml-3 rounded-md">
            <Sidebar isLoggedIn={true} />
          </div>
        )}

        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
