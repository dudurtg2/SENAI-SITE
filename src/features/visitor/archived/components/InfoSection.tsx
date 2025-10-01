import React, { useState } from 'react'
import GiuliaImg from '@/assets/Equipe/Giulia.jpg'
import GuilhermeImg from '@/assets/Equipe/Guilherme Pontes.jpg'
import CarlosImg from '@/assets/Equipe/Carlos Eduardo Oliveira Savegnago.jpg'
import AnaImg from '@/assets/Equipe/Ana Caroline Rocha.jpg'
import VanessaImg from '@/assets/Equipe/Vanessa Araujo.jpg'
import HitalonImg from '@/assets/Equipe/Hítalon Saimon.jpg'
import SilasImg from '@/assets/Equipe/SilasMatos.png'
import ElissonImg from '@/assets/Equipe/ElissonNadson.png'
import TeamMemberModal from '@/components/modals/team-member-modal'

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

interface InfoSectionProps {
  // Propriedades do componente, se necessário
}

const InfoSection: React.FC<InfoSectionProps> = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      imageUrl: GiuliaImg,
      name: 'Giulia Cardoso',
      details: 'Desenvolvedora Frontend',
      skills: ['React', 'TypeScript', 'UI/UX Design', 'JavaScript', 'CSS'],
      summary: 'Desenvolvedora Frontend especializada em React e TypeScript. Focada em criar interfaces modernas e acessíveis, com experiência em desenvolvimento de aplicações web responsivas e otimizadas.',
      github: 'https://github.com/GiuliaDSCardoso',
      linkedin: 'https://www.linkedin.com/in/giuliacardoso2981'
    },
    {
      id: 2,
      imageUrl: GuilhermeImg,
      name: 'Guilherme Pontes',
      details: 'Designer & Desenvolvedor',
      skills: ['Design', 'Frontend', 'UI/UX', 'Figma', 'Adobe Creative'],
      summary: 'Designer e desenvolvedor com foco em experiência do usuário e interfaces inovadoras. Especialista em criar soluções visuais impactantes e funcionais para projetos web e mobile.',
      github: 'https://github.com/guilermePontes',
      linkedin: 'http://www.linkedin.com/in/pontes-design'
    },
    {
      id: 3,
      imageUrl: CarlosImg,
      name: 'Carlos Eduardo Oliveira Savegnago',
      details: 'Full Stack Developer',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Database'],
      summary: 'Desenvolvedor full stack versátil com sólida experiência em tecnologias web modernas. Especialista em criar aplicações completas e escaláveis, desde o frontend até o backend.',
      github: 'https://github.com/dudurtg2',
      linkedin: 'https://linkedin.com/in/carlos-eduardo-oliveira-savegnago-97b2b2317/'
    },
    {
      id: 4,
      imageUrl: AnaImg,
      name: 'Ana Caroline Rocha',
      details: 'Backend Developer',
      skills: ['Node.js', 'Python', 'Database', 'APIs', 'DevOps'],
      summary: 'Desenvolvedora backend especializada em arquiteturas robustas e escaláveis. Com experiência em microserviços, bancos de dados relacionais e não-relacionais, e integração de sistemas complexos.',
      github: 'https://github.com/AnaCaroline',
      linkedin: 'https://linkedin.com/in/ana-caroline-rocha'
    },
    {
      id: 5,
      imageUrl: VanessaImg,
      name: 'Vanessa Araujo',
      details: 'Frontend Developer',
      skills: ['React', 'Vue.js', 'TypeScript', 'UX/UI', 'Figma'],
      summary: 'Desenvolvedora frontend apaixonada por criar experiências digitais incríveis. Especialista em frameworks modernos, design responsivo e performance web. Sempre buscando as melhores práticas de acessibilidade e usabilidade.',
      github: 'https://github.com/VanessaAraujo',
      linkedin: 'https://linkedin.com/in/vanessa-araujo'
    },
    {
      id: 6,
      imageUrl: HitalonImg,
      name: 'Hítalon Saimon',
      details: 'Full Stack Developer',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'DevOps'],
      summary: 'Desenvolvedor full stack versátil com experiência em múltiplas tecnologias. Especialista em criar soluções completas, desde o frontend até o backend, com foco em arquiteturas escaláveis e performáticas.',
      github: 'https://github.com/HitalonSaimon',
      linkedin: 'https://linkedin.com/in/hitalon-saimon'
    },
    {
      id: 7,
      imageUrl: SilasImg,
      name: 'Silas Matos',
      details: 'Developer',
      skills: ['JavaScript', 'React', 'Frontend', 'UI/UX', 'Web Development'],
      summary: 'Desenvolvedor apaixonado por tecnologia e inovação. Focado em criar soluções eficientes e experiências de usuário excepcionais. Sempre em busca de novos desafios e aprendizado contínuo.',
      github: 'https://github.com/SilasMatos',
      linkedin: 'https://www.linkedin.com/in/silas-matos/',
      whatsapp: '5575999887766'
    },
    {
      id: 8,
      imageUrl: ElissonImg,
      name: 'Elisson Nadson',
      details: 'Developer',
      skills: ['JavaScript', 'Frontend', 'Backend', 'Web Development', 'Programming'],
      summary: 'Desenvolvedor versátil com experiência em desenvolvimento web. Especialista em criar aplicações robustas e funcionais, com foco em qualidade de código e boas práticas de desenvolvimento.',
      github: 'https://github.com/ElissonNadson',
      linkedin: 'https://www.linkedin.com/in/elissonmarques/',
      whatsapp: '5575988776655'
    }
  ]

  // Duplica os membros para o efeito de loop infinito
  const doubledMembers = [...teamMembers, ...teamMembers]

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-4">
          NOSSA EQUIPE
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Conheça os profissionais dedicados que fazem parte da nossa equipe, 
          trabalhando diariamente para oferecer educação de qualidade e formar 
          os profissionais do futuro. Cada membro traz experiência e conhecimento 
          únicos para enriquecer sua jornada educacional no SENAI.
        </p>

        {/* Carrossel em Loop */}
        <div className="overflow-hidden w-full group">
          <div className="flex whitespace-nowrap animate-scroll group-hover:pause">
            {doubledMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="inline-block w-48 flex-shrink-0 mx-2"
              >
                <div 
                  className="relative group/card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                  onClick={() => handleMemberClick(member)}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-56 object-cover transition-transform duration-300"
                  />
                  
                  {/* Skills overlay on hover */}
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-90 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                    <h4 className="text-white font-semibold mb-2 text-center">Habilidades</h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-white text-xs mt-2 text-center">Clique para ver mais</p>
                  </div>

                  {/* Name and details */}
                  <div className="absolute bottom-0 left-0 right-0 text-white p-3 bg-gradient-to-t from-black to-transparent">
                    <p className="text-sm font-semibold text-left">
                      {member.name}
                    </p>
                    <p className="text-xs text-left text-gray-300">
                      {member.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={closeModal}
        member={selectedMember}
      />
    </section>
  )
}

export default InfoSection
