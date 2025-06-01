import React, { useState } from 'react'
import ProjectCard from '../../../components/project-card'
import bgcard from '../../../assets/bg-card.jpg'
import developmentIcon from '../../../assets/icons/lets-icons_lamp-fill.svg'
import planningIcon from '../../../assets/icons/solar_notes-bold.svg'
import productionIcon from '../../../assets/icons/mingcute_ruler-fill.svg'
import completedIcon from '../../../assets/icons/oi_check.svg'
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

const AccountProjects = () => {
  const [selectedStatus, setSelectedStatus] = useState<StatusType | 'all'>('all')

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
    }
  ]

  const filteredProjects = projects.filter(project => 
    selectedStatus === 'all' || project.status === selectedStatus
  )

  return (
    <>
      {/* Filtros e grid */}
      <div className="flex justify-end mb-4">
        <span className="text-sm text-gray-600 mr-2">
          Filtrar por etapa de desenvolvimento
        </span>
        <div className="flex space-x-2">
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

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
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
    </>
  )
}

export default AccountProjects
