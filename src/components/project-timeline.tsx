import React from 'react'
import { ChevronRight } from 'lucide-react'

interface TimelineEvent {
  date: string
  description: string
  // Adicione outros campos se necessário (ex: attachments)
}

interface ProjectTimelineProps {
  events: TimelineEvent[]
  onViewAttachmentsClick: () => void
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
  events,
  onViewAttachmentsClick,
}) => {
  return (
    <div className="relative pl-2">
      {/* Linha vertical */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600"></div>

      {/* Itens da linha do tempo */}
      {events.map((event, index) => (
        <div key={index} className="mb-4 relative">
          <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
          <p className="ml-4 text-sm font-semibold text-blue-600">{event.description}</p>
          <p className="ml-4 text-xs text-gray-500">{event.date}</p>
        </div>
      ))}

      <button
        className="ml-4 px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        onClick={onViewAttachmentsClick}
      >
        Ver anexos
      </button>
    </div>
  )
}

export default ProjectTimeline 