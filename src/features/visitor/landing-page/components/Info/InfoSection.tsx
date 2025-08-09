import React, { useState } from 'react'
import Img1 from '@/assets/images/Imagens/014-Nome Cuso e turma.png'
import Img2 from '@/assets/images/Imagens/015-Nome Cuso e turma.png'
import Img3 from '@/assets/images/Imagens/016-Nome Cuso e turma.png'
import Img4 from '@/assets/images/Imagens/017-Nome Cuso e turma.png'
import Img5 from '@/assets/images/Imagens/018-Nome Cuso e turma.png'
import Img6 from '@/assets/images/Imagens/019-Nome Cuso e turma.png'
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
      imageUrl: Img1,
      name: 'Prof. João Silva',
      details: 'Mecânica Industrial',
      skills: ['Soldagem', 'Usinagem', 'Manutenção Industrial', 'Pneumática', 'Hidráulica'],
      summary: 'Engenheiro Mecânico com mais de 15 anos de experiência na indústria automobilística. Especialista em processos de manufatura e manutenção de equipamentos industriais. Possui certificações em soldagem AWS e experiência em projetos de automação industrial.',
      github: 'https://github.com/joaosilva',
      whatsapp: '5575999887766',
      linkedin: 'https://linkedin.com/in/joao-silva-mecanica'
    },
    {
      id: 2,
      imageUrl: Img2,
      name: 'Prof. Maria Santos',
      details: 'Eletrônica Digital',
      skills: ['Arduino', 'Microcontroladores', 'PCB Design', 'IoT', 'Sistemas Embarcados'],
      summary: 'Engenheira Eletrônica com mestrado em Sistemas Digitais. Atua há 12 anos no desenvolvimento de soluções IoT e sistemas embarcados. Coordena projetos de pesquisa em parceria com a indústria local, focando em Indústria 4.0.',
      github: 'https://github.com/mariasantos',
      whatsapp: '5575988776655',
      linkedin: 'https://linkedin.com/in/maria-santos-eletronica'
    },
    {
      id: 3,
      imageUrl: Img3,
      name: 'Prof. Carlos Lima',
      details: 'Automação Industrial',
      skills: ['CLP', 'SCADA', 'Redes Industriais', 'Robótica', 'Instrumentação'],
      summary: 'Técnico em Automação com especialização em Sistemas de Controle. Trabalhou por 10 anos em grandes indústrias químicas e petroquímicas. Expert em programação de CLPs Siemens e Allen-Bradley, com experiência em projetos de retrofit industrial.',
      github: 'https://github.com/carloslima',
      whatsapp: '5575977665544',
      linkedin: 'https://linkedin.com/in/carlos-lima-automacao'
    },
    {
      id: 4,
      imageUrl: Img4,
      name: 'Prof. Ana Costa',
      details: 'Desenvolvimento de Sistemas',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Banco de Dados'],
      summary: 'Desenvolvedora Full Stack com 8 anos de experiência em startups e empresas de tecnologia. Especialista em desenvolvimento web moderno e arquitetura de sistemas. Mentora ativa na comunidade tech local e palestrante em eventos de tecnologia.',
      github: 'https://github.com/anacosta',
      whatsapp: '5575966554433',
      linkedin: 'https://linkedin.com/in/ana-costa-dev'
    },
    {
      id: 5,
      imageUrl: Img5,
      name: 'Prof. Roberto Alves',
      details: 'Segurança do Trabalho',
      skills: ['NRs', 'Auditoria', 'Ergonomia', 'Gestão de Riscos', 'CIPA'],
      summary: 'Técnico em Segurança do Trabalho com 20 anos de experiência em indústrias de grande porte. Especialista em implementação de sistemas de gestão de segurança e saúde ocupacional. Auditor interno ISO 45001 e instrutor de NRs.',
      github: 'https://github.com/robertoalves',
      whatsapp: '5575955443322',
      linkedin: 'https://linkedin.com/in/roberto-alves-seguranca'
    },
    {
      id: 6,
      imageUrl: Img6,
      name: 'Prof. Fernanda Rocha',
      details: 'Gestão da Qualidade',
      skills: ['ISO 9001', 'Lean Manufacturing', 'Six Sigma', 'Auditoria', 'Controle Estatístico'],
      summary: 'Engenheira de Produção com MBA em Gestão da Qualidade. Black Belt Six Sigma com experiência na implementação de sistemas de qualidade em indústrias alimentícias e farmacêuticas. Consultora em processos de certificação ISO.',
      github: 'https://github.com/fernandarocha',
      whatsapp: '5575944332211',
      linkedin: 'https://linkedin.com/in/fernanda-rocha-qualidade'
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
      <div className="container mx-auto px-4">        <h2 className="text-2xl font-light text-center mb-4">
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
