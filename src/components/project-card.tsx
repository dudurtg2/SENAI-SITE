import React from 'react'

type IconType = 'warning' | 'planning' | 'production' | 'completed'
type StatusType = 'development' | 'planning' | 'production' | 'completed'

interface ProjectCardProps {
  id: number
  title: string
  status: StatusType
  stage: string
  icon: IconType
  description?: string
  backgroundImage: string
  developmentIcon: string
  planningIcon: string
  productionIcon: string
  completedIcon: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  status,
  stage,
  icon,
  description = 'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindure a quium dia nois paga. A ordem dos tratores não altera pão du...',
  backgroundImage,
  developmentIcon,
  planningIcon,
  productionIcon,
  completedIcon
}) => {
  const getStatusIcon = (iconType: IconType) => {
    const iconMap: Record<IconType, string> = {
      warning: developmentIcon,
      planning: planningIcon,
      production: productionIcon,
      completed: completedIcon
    }
    return iconMap[iconType]
  }

  const getStatusColor = (status: StatusType) => {
    const colorMap: Record<StatusType, string> = {
      development: 'bg-yellow-400',
      planning: 'bg-purple-400',
      production: 'bg-blue-400',
      completed: 'bg-green-400'
    }
    return colorMap[status]
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-28 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Ícone com SVG personalizado */}
        <div
          className={`absolute top-3 left-3 w-[31px] h-[31px] ${getStatusColor(
            status
          )} rounded-lg flex items-center justify-center`}
        >
          <img src={getStatusIcon(icon)} alt="" className="w-4 h-4" />
        </div>
      </div>

      <div className="bg-slate-900 text-white px-4 py-3 space-y-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">{title}</h3>
          <span className="text-xs text-gray-400">{stage}</span>
        </div>
        <p className="text-xs text-gray-300 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
