import React, { useState } from 'react'
import AccountInfo from './components/account-info'
import AccountProjects from './components/account-projects'

import { Link } from 'react-router-dom'

const AccountPage = () => {
  const [tab, setTab] = useState<'projetos' | 'conta'>('projetos')

  return (
    <div className="p-6">
      <div className="flex items-center justify-start">
        <Link
          to="/app
          "
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-button-primary text-white rounded-mb hover:bg-button-primary/80 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline
              points="15 19 8 12 15 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Voltar
        </Link>
      </div>
      {/* Header do perfil */}

      <div className="bg-white rounded-lg shadow p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Guilherme da Paixão Pontes
            </h2>
            <p className="text-sm text-gray-600">
              Registro Acadêmico: 000.000000
            </p>
            <p className="text-sm text-gray-600">
              Curso: Técnico em Desenvolvimento de sistemas
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 ${
            tab === 'projetos'
              ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
              : 'text-gray-600'
          }`}
          onClick={() => setTab('projetos')}
        >
          Projetos
        </button>
        <button
          className={`px-4 py-2 ${
            tab === 'conta'
              ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
              : 'text-gray-600'
          }`}
          onClick={() => setTab('conta')}
        >
          Conta
        </button>
      </div>

      {tab === 'projetos' ? <AccountProjects /> : <AccountInfo />}
    </div>
  )
}

export default AccountPage
