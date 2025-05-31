import React, { useState } from 'react'
import {
  MapPin,
  Bell,
  Calendar,
  Users,
  Search,
  Plus,
  Edit3,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  User
} from 'lucide-react'
import senailogo from '../../assets/senai-logo.png'
import { Link } from 'react-router-dom'
// Header Component
const Header = () => {
  return (
    <header className="bg-bg-layouts shadow-sm rounded-lg border-b m-3">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={senailogo} alt="" className="w-auto h-auto" />
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-md">
            <Lightbulb size={16} />
            <span>Projetos</span>
          </button>
          <button className="flex items-center space-x-2 text-button-primary hover:text-gray-800">
            <Bell size={16} />
            <span>Notificações</span>
          </button>
          <button className="flex items-center space-x-2 text-button-primary hover:text-gray-800">
            <Calendar size={16} />
            <span>Calendário</span>
          </button>
          <button className="flex items-center space-x-2 text-button-primary hover:text-gray-800">
            <Users size={16} />
            <span>Comunidade</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/app/account" className="flex items-center space-x-2">
            <div className="text-right text-sm">
              <div className="text-gray-600">HOME</div>
              <div className="text-gray-800">
                Técnico de Desenvolvimento de Sistemas
              </div>
              <div className="text-gray-600">CLASSE</div>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={20} className="text-gray-600" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
