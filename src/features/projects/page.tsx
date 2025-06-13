import { useState, useEffect } from 'react'
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp
} from 'lucide-react'
import bgcard from '../../assets/bg-card.jpg'
import developmentIcon from '../../assets/icons/lets-icons_lamp-fill.svg'
import planningIcon from '../../assets/icons/solar_notes-bold.svg'
import productionIcon from '../../assets/icons/mingcute_ruler-fill.svg'
import completedIcon from '../../assets/icons/oi_check.svg'
import ProjectCard from '../../components/project-card'
import { Link } from 'react-router-dom'
import { useProjetos } from '../../hooks/use-queries'
import { Projeto } from '../../types/types-queries'

type StatusType = 'development' | 'planning' | 'production' | 'completed'

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<StatusType | 'all'>(
    'all'
  )
  const [sortBy, setSortBy] = useState<'titulo' | 'criadoEm' | 'curso'>(
    'titulo'
  )
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const { data: projetos, isLoading, error } = useProjetos()

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

  // Filtragem e paginação
  const filteredProjects = (projetos || []).filter(projeto => {
    const matchesSearch =
      projeto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.liderProjeto.usuarios.usuario
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    const projetoStatus = getProjetoStatus(projeto)
    const matchesStatus =
      selectedStatus === 'all' || projetoStatus === selectedStatus
    return matchesSearch && matchesStatus
  })

  // Ordenação
  const sortedProjects = filteredProjects.sort((a, b) => {
    let aValue: string | Date
    let bValue: string | Date

    switch (sortBy) {
      case 'titulo':
        aValue = a.titulo
        bValue = b.titulo
        break
      case 'curso':
        aValue = a.curso
        bValue = b.curso
        break
      case 'criadoEm':
        aValue = new Date(a.criadoEm)
        bValue = new Date(b.criadoEm)
        break
      default:
        aValue = a.titulo
        bValue = b.titulo
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = sortedProjects.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSortChange = (criteria: 'titulo' | 'criadoEm' | 'curso') => {
    if (sortBy === criteria) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(criteria)
      setSortDirection('asc')
    }
    setCurrentPage(1)
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

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
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Projetos ({filteredProjects.length})
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Filtrar por:</span>
              <select
                className="border rounded px-3 py-2 text-sm"
                value={selectedStatus}
                onChange={e =>
                  setSelectedStatus(e.target.value as StatusType | 'all')
                }
              >
                <option value="all">Todos</option>
                <option value="development">Desenvolvimento</option>
                <option value="planning">Planejamento</option>
                <option value="production">Produção</option>
                <option value="completed">Concluído</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar projetos..."
                className="border rounded px-3 py-2 pl-10 text-sm w-64"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Botões de ordenação */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Ordenar por:</span>
              <button
                className={`flex items-center space-x-1 ${
                  sortBy === 'titulo'
                    ? 'font-semibold text-blue-600'
                    : 'hover:text-gray-800'
                }`}
                onClick={() => handleSortChange('titulo')}
              >
                <span>Título</span>
                {sortBy === 'titulo' &&
                  (sortDirection === 'asc' ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronUp size={14} />
                  ))}
              </button>
              <button
                className={`flex items-center space-x-1 ${
                  sortBy === 'curso'
                    ? 'font-semibold text-blue-600'
                    : 'hover:text-gray-800'
                }`}
                onClick={() => handleSortChange('curso')}
              >
                <span>Curso</span>
                {sortBy === 'curso' &&
                  (sortDirection === 'asc' ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronUp size={14} />
                  ))}
              </button>
              <button
                className={`flex items-center space-x-1 ${
                  sortBy === 'criadoEm'
                    ? 'font-semibold text-blue-600'
                    : 'hover:text-gray-800'
                }`}
                onClick={() => handleSortChange('criadoEm')}
              >
                <span>Data</span>
                {sortBy === 'criadoEm' &&
                  (sortDirection === 'asc' ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronUp size={14} />
                  ))}
              </button>
            </div>

            <div className="text-sm text-gray-600">
              Filtrar por etapa de desenvolvimento
              <div className="flex space-x-2 mt-2">
                <button
                  className={`w-[31px] h-[31px] ${
                    selectedStatus === 'development'
                      ? 'bg-yellow-500'
                      : 'bg-yellow-400'
                  } rounded-lg flex items-center justify-center`}
                  onClick={() =>
                    setSelectedStatus(
                      selectedStatus === 'development' ? 'all' : 'development'
                    )
                  }
                >
                  <img src={developmentIcon} className="w-4 h-4" />
                </button>
                <button
                  className={`w-[31px] h-[31px] ${
                    selectedStatus === 'planning'
                      ? 'bg-purple-500'
                      : 'bg-purple-400'
                  } rounded-lg flex items-center justify-center`}
                  onClick={() =>
                    setSelectedStatus(
                      selectedStatus === 'planning' ? 'all' : 'planning'
                    )
                  }
                >
                  <img src={planningIcon} className="w-4 h-4" />
                </button>
                <button
                  className={`w-[31px] h-[31px] ${
                    selectedStatus === 'production'
                      ? 'bg-blue-500'
                      : 'bg-blue-400'
                  } rounded-lg flex items-center justify-center`}
                  onClick={() =>
                    setSelectedStatus(
                      selectedStatus === 'production' ? 'all' : 'production'
                    )
                  }
                >
                  <img src={productionIcon} className="w-4 h-4" />
                </button>
                <button
                  className={`w-[31px] h-[31px] ${
                    selectedStatus === 'completed'
                      ? 'bg-green-500'
                      : 'bg-green-400'
                  } rounded-lg flex items-center justify-center`}
                  onClick={() =>
                    setSelectedStatus(
                      selectedStatus === 'completed' ? 'all' : 'completed'
                    )
                  }
                >
                  <img src={completedIcon} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {currentProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum projeto encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {currentProjects.map(projeto => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Projetos por página:</span>
            <select
              value={itemsPerPage}
              onChange={e => {
                setItemsPerPage(Number(e.target.value))
                setCurrentPage(1)
              }}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={9}>9</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
            <ChevronDown size={16} className="text-gray-400" />
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              Primeira página
            </button>
            <div className="flex items-center space-x-2">
              <button
                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pageNumber =
                  currentPage + i - Math.floor(Math.min(totalPages, 5) / 2)
                if (pageNumber < 1 || pageNumber > totalPages) return null
                return (
                  <button
                    key={pageNumber}
                    className={`px-3 py-1 ${
                      currentPage === pageNumber
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    } rounded`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              })}
              {totalPages > 5 && currentPage + 2 < totalPages && (
                <span>...</span>
              )}
              {totalPages > 5 && currentPage + 2 < totalPages && (
                <button
                  className="px-3 py-1 hover:bg-gray-100 rounded"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </button>
              )}
              <button
                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <button
              className="text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              Última página
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage
