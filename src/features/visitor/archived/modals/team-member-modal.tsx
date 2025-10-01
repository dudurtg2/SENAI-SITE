import React from 'react'
import { X, Github, MessageCircle, Linkedin } from 'lucide-react'

interface TeamMember {
  id: number
  imageUrl: string
  name: string
  details: string
  skills: string[]
  summary: string
  github?: string
  whatsapp?: string
  linkedin?: string
}

interface TeamMemberModalProps {
  isOpen: boolean
  onClose: () => void
  member: TeamMember | null
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ isOpen, onClose, member }) => {
  if (!isOpen || !member) return null

  const handleSocialClick = (url: string | undefined, type: string) => {
    if (!url) return
    
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${url}`, '_blank')
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Perfil Profissional</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Profile section */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.details}</p>
                
                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional summary */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Resumo Profissional</h4>
              <p className="text-gray-600 leading-relaxed">{member.summary}</p>
            </div>

            {/* Social media buttons */}
            <div className="border-t pt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Conecte-se</h4>
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {member.github && (
                  <button
                    onClick={() => handleSocialClick(member.github, 'github')}
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </button>
                )}
                {member.whatsapp && (
                  <button
                    onClick={() => handleSocialClick(member.whatsapp, 'whatsapp')}
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </button>
                )}
                {member.linkedin && (
                  <button
                    onClick={() => handleSocialClick(member.linkedin, 'linkedin')}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberModal