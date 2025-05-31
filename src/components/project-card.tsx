import React from 'react'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  id: number
  title: string
  status: 'development' | 'planning' | 'production' | 'completed'
  stage: string
  icon: 'warning' | 'planning' | 'production' | 'completed'
  backgroundImage: string
  developmentIcon: string
  planningIcon: string
  productionIcon: string
  completedIcon: string
  githubUrl?: string
  description?: string
  author?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  status,
  stage,
  icon,
  backgroundImage,
  developmentIcon,
  planningIcon,
  productionIcon,
  completedIcon,
  githubUrl,
  description,
  author
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'development':
        return 'bg-yellow-400'
      case 'planning':
        return 'bg-purple-400'
      case 'production':
        return 'bg-blue-400'
      case 'completed':
        return 'bg-green-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getStatusIcon = () => {
    switch (icon) {
      case 'warning':
        return developmentIcon
      case 'planning':
        return planningIcon
      case 'production':
        return productionIcon
      case 'completed':
        return completedIcon
      default:
        return developmentIcon
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="h-32 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-2 right-2">
          <div className={`w-8 h-8 ${getStatusColor()} rounded-lg flex items-center justify-center`}>
            <img src={getStatusIcon()} className="w-4 h-4" alt={status} />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
        )}
        {author && (
          <p className="text-sm text-gray-500 mb-2">Autor: {author}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{stage}</span>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
