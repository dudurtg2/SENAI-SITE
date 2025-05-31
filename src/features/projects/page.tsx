import { useState } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import bgcard from '../../assets/bg-card.jpg'
import developmentIcon from '../../assets/icons/lets-icons_lamp-fill.svg'
import planningIcon from '../../assets/icons/solar_notes-bold.svg'
import productionIcon from '../../assets/icons/mingcute_ruler-fill.svg'
import completedIcon from '../../assets/icons/oi_check.svg'
import ProjectCard from '../../components/project-card'

type IconType = 'warning' | 'planning' | 'production' | 'completed'
type StatusType = 'development' | 'planning' | 'production' | 'completed'

const ProjectsPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9)

  // Mock project data
  const projects = [
    {
      id: 1,
      title: 'Nome Projeto',
      status: 'development' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'warning' as IconType
    },
    {
      id: 2,
      title: 'Nome Projeto',
      status: 'planning' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'planning' as IconType
    },
    {
      id: 3,
      title: 'Nome Projeto',
      status: 'production' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'production' as IconType
    },
    {
      id: 4,
      title: 'Nome Projeto',
      status: 'production' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'production' as IconType
    },
    {
      id: 5,
      title: 'Nome Projeto',
      status: 'completed' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'completed' as IconType
    },
    {
      id: 6,
      title: 'Nome Projeto',
      status: 'completed' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'completed' as IconType
    },
    {
      id: 7,
      title: 'Nome Projeto',
      status: 'planning' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'planning' as IconType
    },
    {
      id: 8,
      title: 'Nome Projeto',
      status: 'development' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'warning' as IconType
    },
    {
      id: 9,
      title: 'Nome Projeto',
      status: 'development' as StatusType,
      stage: 'dd/mm/aaaa',
      icon: 'warning' as IconType
    }
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Projetos</h1>

        {/* Filters and Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">1L</span>
              <select className="border rounded px-3 py-2 text-sm">
                <option>Destaque</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar"
                className="border rounded px-3 py-2 pl-10 text-sm"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Ou filtre por etapa de desenvolvimento
            <div className="flex space-x-2 mt-2">
              <button className="w-[31px] h-[31px] bg-yellow-400 rounded-lg flex items-center justify-center">
                <img src={developmentIcon} className="w-4 h-4" />
              </button>
              <button className="w-[31px] h-[31px] bg-purple-400 rounded-lg flex items-center justify-center">
                <img src={planningIcon} className="w-4 h-4" />
              </button>
              <button className="w-[31px] h-[31px] bg-blue-400 rounded-lg flex items-center justify-center">
                <img src={productionIcon} className="w-4 h-4" />
              </button>
              <button className="w-[31px] h-[31px] bg-green-400 rounded-lg flex items-center justify-center">
                <img src={completedIcon} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
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
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Projetos exibidos:</span>
          <select
            value={itemsPerPage}
            onChange={e => setItemsPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value={9}>9</option>
            <option value={18}>18</option>
            <option value={27}>27</option>
          </select>
          <ChevronDown size={16} className="text-gray-400" />
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm">Primeira página</span>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={16} />
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
            <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
            <span>...</span>
            <button className="px-3 py-1 hover:bg-gray-100 rounded">53</button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={16} />
            </button>
          </div>
          <span className="text-sm">Última página</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
