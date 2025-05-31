import React from 'react'
import ProjectCard from '../../../components/project-card'
import bgcard from '../../../assets/bg-card.jpg'
import developmentIcon from '../../../assets/icons/lets-icons_lamp-fill.svg'
import planningIcon from '../../../assets/icons/solar_notes-bold.svg'
import productionIcon from '../../../assets/icons/mingcute_ruler-fill.svg'
import completedIcon from '../../../assets/icons/oi_check.svg'

type IconType = 'warning' | 'planning' | 'production' | 'completed'
type StatusType = 'development' | 'planning' | 'production' | 'completed'

interface Project {
  id: number
  title: string
  status: StatusType
  stage: string
  icon: IconType
}

const AccountProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Nome Projeto',
      status: 'development',
      stage: 'dd/mm/aaaa',
      icon: 'warning' as IconType
    },
    {
      id: 2,
      title: 'Nome Projeto',
      status: 'planning',
      stage: 'dd/mm/aaaa',
      icon: 'planning' as IconType
    },
    {
      id: 3,
      title: 'Nome Projeto',
      status: 'production',
      stage: 'dd/mm/aaaa',
      icon: 'production' as IconType
    },
    {
      id: 4,
      title: 'Nome Projeto',
      status: 'completed',
      stage: 'dd/mm/aaaa',
      icon: 'completed' as IconType
    }
  ]

  return (
    <>
      {/* Filtros e grid */}
      <div className="flex justify-end mb-4">
        <span className="text-sm text-gray-600 mr-2">
          Ou filtre por etapa de desenvolvimento
        </span>
        <div className="flex space-x-2">
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

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </>
  )
}

export default AccountProjects
