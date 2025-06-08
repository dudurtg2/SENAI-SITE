import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Plus } from 'lucide-react'
import ProjectCard from '../../../components/project-card'
import { useProjetos } from '../../../hooks/use-queries'
import { Projeto } from '../../../types/types-queries'
import bgcard from '../../../assets/bg-card.jpg'
import developmentIcon from '../../../assets/icons/lets-icons_lamp-fill.svg'
import planningIcon from '../../../assets/icons/solar_notes-bold.svg'
import productionIcon from '../../../assets/icons/mingcute_ruler-fill.svg'
import completedIcon from '../../../assets/icons/oi_check.svg'

type StatusType = 'development' | 'planning' | 'production' | 'completed'

const AccountProjects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<StatusType | 'all'>(
    'all'
  )

  // Buscar projetos da API
  const { data: projetos, isLoading, error } = useProjetos()

  // Função para determinar o status baseado na data de criação
  const getProjetoStatus = (projeto: Projeto): StatusType => {
    const createdDate = new Date(projeto.criadoEm)
    const now = new Date()
    const daysDiff = Math.floor(
      (now.getTime() - createdDate.getTime()) / (1000 * 3600 * 24)
    )

    if (daysDiff < 7) return 'development'
    if (daysDiff < 30) return 'planning'
    if (daysDiff < 60) return 'production'
    return 'completed'
  }

  // Filtragem dos projetos
  const filteredProjects = (projetos || []).filter(projeto => {
    const matchesSearch =
      projeto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.curso.toLowerCase().includes(searchTerm.toLowerCase())

    const projetoStatus = getProjetoStatus(projeto)
    const matchesStatus =
      selectedStatus === 'all' || projetoStatus === selectedStatus
    return matchesSearch && matchesStatus
  })

  // Loading state
  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline">
            {' '}
            Não foi possível carregar os projetos.
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Meus Projetos</h2>
          <p className="text-gray-600 mt-1">
            Gerencie e acompanhe o progresso dos seus projetos
          </p>
        </div>
        <Link
          to="/app/projects/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} className="mr-2" />
          Novo Projeto
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Pesquisar projetos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-400" />
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedStatus}
              onChange={e =>
                setSelectedStatus(e.target.value as StatusType | 'all')
              }
            >
              <option value="all">Todos os Status</option>
              <option value="development">Desenvolvimento</option>
              <option value="planning">Planejamento</option>
              <option value="production">Produção</option>
              <option value="completed">Concluído</option>
            </select>
          </div>

          {/* Filtros visuais por status */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Filtrar por etapa:</span>
            <div className="flex space-x-2">
              <button
                className={`w-[31px] h-[31px] ${
                  selectedStatus === 'development'
                    ? 'bg-yellow-500'
                    : 'bg-yellow-400'
                } rounded-lg flex items-center justify-center transition-colors`}
                onClick={() =>
                  setSelectedStatus(
                    selectedStatus === 'development' ? 'all' : 'development'
                  )
                }
                title="Desenvolvimento"
              >
                <img
                  src={developmentIcon}
                  className="w-4 h-4"
                  alt="Desenvolvimento"
                />
              </button>
              <button
                className={`w-[31px] h-[31px] ${
                  selectedStatus === 'planning'
                    ? 'bg-purple-500'
                    : 'bg-purple-400'
                } rounded-lg flex items-center justify-center transition-colors`}
                onClick={() =>
                  setSelectedStatus(
                    selectedStatus === 'planning' ? 'all' : 'planning'
                  )
                }
                title="Planejamento"
              >
                <img
                  src={planningIcon}
                  className="w-4 h-4"
                  alt="Planejamento"
                />
              </button>
              <button
                className={`w-[31px] h-[31px] ${
                  selectedStatus === 'production'
                    ? 'bg-blue-500'
                    : 'bg-blue-400'
                } rounded-lg flex items-center justify-center transition-colors`}
                onClick={() =>
                  setSelectedStatus(
                    selectedStatus === 'production' ? 'all' : 'production'
                  )
                }
                title="Produção"
              >
                <img src={productionIcon} className="w-4 h-4" alt="Produção" />
              </button>
              <button
                className={`w-[31px] h-[31px] ${
                  selectedStatus === 'completed'
                    ? 'bg-green-500'
                    : 'bg-green-400'
                } rounded-lg flex items-center justify-center transition-colors`}
                onClick={() =>
                  setSelectedStatus(
                    selectedStatus === 'completed' ? 'all' : 'completed'
                  )
                }
                title="Concluído"
              >
                <img src={completedIcon} className="w-4 h-4" alt="Concluído" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Plus size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || selectedStatus !== 'all'
                ? 'Não há projetos que correspondam aos filtros aplicados.'
                : 'Você ainda não criou nenhum projeto. Que tal começar agora?'}
            </p>
            {!searchTerm && selectedStatus === 'all' && (
              <Link
                to="/app/projects/new"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={16} className="mr-2" />
                Criar Primeiro Projeto
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map(projeto => (
            <Link key={projeto.uuid} to={`/app/projects/${projeto.uuid}`}>
              <ProjectCard
                projeto={projeto}
                backgroundImage={bgcard}
                developmentIcon={developmentIcon}
                planningIcon={planningIcon}
                productionIcon={productionIcon}
                completedIcon={completedIcon}
                githubUrl={`https://github.com/projeto/${projeto.codigo}`}
              />
            </Link>
          ))}
        </div>
      )}

      {/* Stats Summary */}
      {filteredProjects.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Resumo dos Projetos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {
                  filteredProjects.filter(
                    p => getProjetoStatus(p) === 'development'
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Em Desenvolvimento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {
                  filteredProjects.filter(
                    p => getProjetoStatus(p) === 'planning'
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Planejamento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {
                  filteredProjects.filter(
                    p => getProjetoStatus(p) === 'production'
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Produção</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {
                  filteredProjects.filter(
                    p => getProjetoStatus(p) === 'completed'
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Concluídos</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountProjects
