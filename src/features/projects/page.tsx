import { useState } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import bgcard from '../../assets/bg-card.jpg'
import developmentIcon from '../../assets/icons/lets-icons_lamp-fill.svg'
import planningIcon from '../../assets/icons/solar_notes-bold.svg'
import productionIcon from '../../assets/icons/mingcute_ruler-fill.svg'
import completedIcon from '../../assets/icons/oi_check.svg'
import ProjectCard from '../../components/project-card'
import { Link } from 'react-router-dom'

type IconType = 'warning' | 'planning' | 'production' | 'completed'
type StatusType = 'development' | 'planning' | 'production' | 'completed'

interface Project {
  id: number
  title: string
  status: StatusType
  stage: string
  icon: IconType
  githubUrl: string
  description: string
  author: string
}

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<StatusType | 'all'>('all')
  const [sortBy, setSortBy] = useState<'title' | 'stage' | 'author'>('title')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  // Mock project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestão Escolar',
      status: 'development',
      stage: '15/03/2024',
      icon: 'warning',
      githubUrl: 'https://github.com/aluno1/gestao-escolar',
      description: 'Sistema completo para gestão de escolas',
      author: 'João Silva'
    },
    {
      id: 2,
      title: 'E-commerce SENAI',
      status: 'planning',
      stage: '20/03/2024',
      icon: 'planning',
      githubUrl: 'https://github.com/aluno2/ecommerce-senai',
      description: 'Plataforma de vendas online',
      author: 'Maria Santos'
    },
    {
      id: 3,
      title: 'App de Delivery',
      status: 'production',
      stage: '10/03/2024',
      icon: 'production',
      githubUrl: 'https://github.com/aluno3/delivery-app',
      description: 'Aplicativo de entrega de comida',
      author: 'Pedro Oliveira'
    },
    {
      id: 4,
      title: 'Rede Social Acadêmica',
      status: 'completed',
      stage: '01/03/2024',
      icon: 'completed',
      githubUrl: 'https://github.com/aluno4/rede-social',
      description: 'Rede social para estudantes',
      author: 'Ana Costa'
    },
    {
      id: 5,
      title: 'Sistema de Estacionamento',
      status: 'development',
      stage: '18/03/2024',
      icon: 'warning',
      githubUrl: 'https://github.com/aluno5/estacionamento',
      description: 'Controle de vagas de estacionamento',
      author: 'Lucas Mendes'
    },
    {
      id: 6,
      title: 'App de Finanças',
      status: 'planning',
      stage: '22/03/2024',
      icon: 'planning',
      githubUrl: 'https://github.com/aluno6/financas-app',
      description: 'Controle financeiro pessoal',
      author: 'Carla Lima'
    },
    {
      id: 7,
      title: 'Plataforma de Cursos',
      status: 'production',
      stage: '12/03/2024',
      icon: 'production',
      githubUrl: 'https://github.com/aluno7/cursos-online',
      description: 'Sistema de cursos online',
      author: 'Rafael Souza'
    },
    {
      id: 8,
      title: 'Blog Tecnológico',
      status: 'completed',
      stage: '05/03/2024',
      icon: 'completed',
      githubUrl: 'https://github.com/aluno8/blog-tech',
      description: 'Blog sobre tecnologia',
      author: 'Juliana Alves'
    },
    {
      id: 9,
      title: 'Sistema de Chamados',
      status: 'development',
      stage: '25/03/2024',
      icon: 'warning',
      githubUrl: 'https://github.com/aluno9/chamados',
      description: 'Gestão de chamados técnicos',
      author: 'Marcos Santos'
    },
    {
      id: 10,
      title: 'App de Receitas',
      status: 'planning',
      stage: '28/03/2024',
      icon: 'planning',
      githubUrl: 'https://github.com/aluno10/receitas-app',
      description: 'Compartilhamento de receitas',
      author: 'Fernanda Costa'
    },
    {
      id: 11,
      title: 'Sistema de Biblioteca',
      status: 'production',
      stage: '15/03/2024',
      icon: 'production',
      githubUrl: 'https://github.com/aluno11/biblioteca',
      description: 'Gestão de biblioteca',
      author: 'Bruno Oliveira'
    },
    {
      id: 12,
      title: 'Plataforma de Eventos',
      status: 'completed',
      stage: '10/03/2024',
      icon: 'completed',
      githubUrl: 'https://github.com/aluno12/eventos',
      description: 'Organização de eventos',
      author: 'Patricia Lima'
    },
    {
      id: 13,
      title: 'Sistema de RH',
      status: 'development',
      stage: '01/04/2024',
      icon: 'warning',
      githubUrl: 'https://github.com/aluno13/rh-system',
      description: 'Gestão de recursos humanos',
      author: 'Roberto Souza'
    },
    {
      id: 14,
      title: 'App de Saúde',
      status: 'planning',
      stage: '05/04/2024',
      icon: 'planning',
      githubUrl: 'https://github.com/aluno14/saude-app',
      description: 'Acompanhamento de saúde pessoal',
      author: 'Camila Martins'
    },
    {
      id: 15,
      title: 'Plataforma EAD',
      status: 'production',
      stage: '10/04/2024',
      icon: 'production',
      githubUrl: 'https://github.com/aluno15/ead-platform',
      description: 'Plataforma de ensino a distância',
      author: 'Fernando Pereira'
    },
    {
      id: 16,
      title: 'Gerenciador de Tarefas',
      status: 'completed',
      stage: '15/04/2024',
      icon: 'completed',
      githubUrl: 'https://github.com/aluno16/task-manager',
      description: 'Organizador de tarefas e produtividade',
      author: 'Amanda Rodrigues'
    },
    {
      id: 17,
      title: 'Sistema de Vendas',
      status: 'development',
      stage: '20/04/2024',
      icon: 'warning',
      githubUrl: 'https://github.com/aluno17/sales-system',
      description: 'Controle de vendas e estoque',
      author: 'Thiago Fernandes'
    },
    {
      id: 18,
      title: 'Chatbot de Suporte',
      status: 'planning',
      stage: '25/04/2024',
      icon: 'planning',
      githubUrl: 'https://github.com/aluno18/support-chatbot',
      description: 'Chatbot para atendimento ao cliente',
      author: 'Gabriela Lima'
    },
    {
      id: 19,
      title: 'Sistema de Agendamento',
      status: 'production',
      stage: '30/04/2024',
      icon: 'production',
      githubUrl: 'https://github.com/aluno19/scheduling-system',
      description: 'Sistema para agendar compromissos',
      author: 'Diego Costa'
    },
    {
      id: 20,
      title: 'Plataforma de Doações',
      status: 'completed',
      stage: '05/05/2024',
      icon: 'completed',
      githubUrl: 'https://github.com/aluno20/donations-platform',
      description: 'Plataforma para receber doações',
      author: 'Isabela Almeida'
    },
    {
      id: 21,
      title: 'Sistema de Reservas',
      status: 'development',
      stage: '10/05/2024',
      icon: 'warning',
      githubUrl: 'https://github.com/aluno21/reservation-system',
      description: 'Sistema para reservas de serviços',
      author: 'Gustavo Ribeiro'
    },
    {
      id: 22,
      title: 'App de Notícias',
      status: 'planning',
      stage: '15/05/2024',
      icon: 'planning',
      githubUrl: 'https://github.com/aluno22/news-app',
      description: 'Aplicativo agregador de notícias',
      author: 'Laura Ferreira'
    }
  ]

  // Filtragem e paginação
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  // Ordenação
  const sortedProjects = filteredProjects.sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]

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

  const handleSortChange = (criteria: 'title' | 'stage' | 'author') => {
    if (sortBy === criteria) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(criteria)
      setSortDirection('asc')
    }
    setCurrentPage(1)
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Projetos</h1>

        {/* Filters, Search and Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Filtrar por:</span>
              <select 
                className="border rounded px-3 py-2 text-sm"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as StatusType | 'all')}
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
                className="border rounded px-3 py-2 pl-10 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                className={`flex items-center space-x-1 ${sortBy === 'title' ? 'font-semibold text-blue-600' : 'hover:text-gray-800'}`}
                onClick={() => handleSortChange('title')}
              >
                <span>Título</span>
                {sortBy === 'title' && (
                  sortDirection === 'asc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />
                )}
              </button>
               <button 
                className={`flex items-center space-x-1 ${sortBy === 'stage' ? 'font-semibold text-blue-600' : 'hover:text-gray-800'}`}
                onClick={() => handleSortChange('stage')}
              >
                <span>Etapa</span>
                {sortBy === 'stage' && (
                  sortDirection === 'asc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />
                )}
              </button>
               <button 
                className={`flex items-center space-x-1 ${sortBy === 'author' ? 'font-semibold text-blue-600' : 'hover:text-gray-800'}`}
                onClick={() => handleSortChange('author')}
              >
                <span>Autor</span>
                 {sortBy === 'author' && (
                  sortDirection === 'asc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />
                )}
              </button>
            </div>

            <div className="text-sm text-gray-600">
              Filtrar por etapa de desenvolvimento
              <div className="flex space-x-2 mt-2">
                <button 
                  className={`w-[31px] h-[31px] ${selectedStatus === 'development' ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-lg flex items-center justify-center`}
                  onClick={() => setSelectedStatus(selectedStatus === 'development' ? 'all' : 'development')}
                >
                  <img src={developmentIcon} className="w-4 h-4" />
                </button>
                <button 
                  className={`w-[31px] h-[31px] ${selectedStatus === 'planning' ? 'bg-purple-500' : 'bg-purple-400'} rounded-lg flex items-center justify-center`}
                  onClick={() => setSelectedStatus(selectedStatus === 'planning' ? 'all' : 'planning')}
                >
                  <img src={planningIcon} className="w-4 h-4" />
                </button>
                <button 
                  className={`w-[31px] h-[31px] ${selectedStatus === 'production' ? 'bg-blue-500' : 'bg-blue-400'} rounded-lg flex items-center justify-center`}
                  onClick={() => setSelectedStatus(selectedStatus === 'production' ? 'all' : 'production')}
                >
                  <img src={productionIcon} className="w-4 h-4" />
                </button>
                <button 
                  className={`w-[31px] h-[31px] ${selectedStatus === 'completed' ? 'bg-green-500' : 'bg-green-400'} rounded-lg flex items-center justify-center`}
                  onClick={() => setSelectedStatus(selectedStatus === 'completed' ? 'all' : 'completed')}
                >
                  <img src={completedIcon} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {currentProjects.map(project => (
          <Link key={project.id} to={`/app/projects/${project.id}`}>
            <ProjectCard
              id={project.id}
              title={project.title}
              status={project.status}
              stage={project.stage}
              icon={project.icon}
              backgroundImage={bgcard}
              developmentIcon={developmentIcon}
              planningIcon={planningIcon}
              productionIcon={productionIcon}
              completedIcon={completedIcon}
              githubUrl={project.githubUrl}
              description={project.description}
              author={project.author}
            />
          </Link>
        ))}
      </div>

      {/* Pagination */}
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
              const pageNumber = currentPage + i - Math.floor(Math.min(totalPages, 5) / 2)
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
            {totalPages > 5 && currentPage + 2 < totalPages && <span>...</span>}
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
    </div>
  )
}

export default ProjectsPage
