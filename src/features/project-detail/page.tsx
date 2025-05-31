import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { User, Github, ChevronLeft, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react'
import ProjectTimeline from '../../components/project-timeline'
import Modal from '../../components/Modal'

import LampadaAcessa from '../../assets/assert/lampada_acessa.svg'
import LampadaApagada from '../../assets/assert/lampada_apagada.svg'

// Mock project data (copied from projects/page.tsx for now)
const projects = [
  {
    id: 1,
    title: 'Sistema de Gestão Escolar',
    status: 'development',
    stage: '15/03/2024',
    icon: 'warning',
    githubUrl: 'https://github.com/aluno1/gestao-escolar',
    description: 'Sistema completo para gestão de escolas. Mussum Ipsum, cacilds vidis litro abertis. Manduma pindure a quium dia nois paga. A ordem dos tratores não altera pão du...',
    author: 'João Silva',
    course: 'Curso Técnico de Desenvolvimento de Sistemas',
    teacher: 'Nome do Docente'
  },
  {
    id: 2,
    title: 'E-commerce SENAI',
    status: 'planning',
    stage: '20/03/2024',
    icon: 'planning',
    githubUrl: 'https://github.com/aluno2/ecommerce-senai',
    description: 'Plataforma de vendas online. Mussum Ipsum, cacilds vidis litro abertis. Manduma pindure a quium dia nois paga. A ordem dos tratores não altera pão du...',
    author: 'Maria Santos',
    course: 'Curso Técnico de Desenvolvimento de Sistemas',
    teacher: 'Nome do Docente'
  },
  {
    id: 3,
    title: 'App de Delivery',
    status: 'production',
    stage: '10/03/2024',
    icon: 'production',
    githubUrl: 'https://github.com/aluno3/delivery-app',
    description: 'Aplicativo de entrega de comida. Mussum Ipsum, cacilds vidis litro abertis. Manduma pindure a quium dia nois paga. A ordem dos tratores não altera pão du...',
    author: 'Pedro Oliveira',
    course: 'Curso Técnico de Desenvolvimento de Sistemas',
    teacher: 'Nome do Docente'
  },
  {
    id: 4,
    title: 'Rede Social Acadêmica',
    status: 'completed',
    stage: '01/03/2024',
    icon: 'completed',
    githubUrl: 'https://github.com/aluno4/rede-social',
    description: 'Rede social para estudantes. Mussum Ipsum, cacilds vidis litro abertis. Manduma pindure a quium dia nois paga. A ordem dos tratores não altera pão du...',
    author: 'Ana Costa',
    course: 'Curso Técnico de Desenvolvimento de Sistemas',
    teacher: 'Nome do Docente'
  },
  // ... adicione os outros projetos mock aqui ...
  {
    id: 22,
    title: 'App de Notícias',
    status: 'planning',
    stage: '15/05/2024',
    icon: 'planning',
    githubUrl: 'https://github.com/aluno22/news-app',
    description: 'Aplicativo agregador de notícias. Mussum Ipsum, cacilds vidis litro abertis. Manduma pindure a quium dia nois paga. A ordem dos tratores não altera pão du...',
    author: 'Laura Ferreira',
    course: 'Curso Técnico de Desenvolvimento de Sistemas',
    teacher: 'Nome do Docente'
  }
];

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === Number(projectId))

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rating, setRating] = useState(0) // Estado para a avaliação (0 a 5)

  const timelineEvents = [
    { date: 'dd/mm/aaaa', description: 'Criatividade e Ideação' },
    { date: 'dd/mm/aaaa', description: 'Modelagem de Projetos' },
    { date: 'dd/mm/aaaa', description: 'Prototipagem de Projetos' },
    { date: 'dd/mm/aaaa', description: 'Implementação de Projetos' },
  ]

  const handleViewAttachmentsClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleRatingClick = (starIndex: number) => {
    setRating(starIndex)
  }

  if (!project) {
    return <div className="p-6 text-red-600">Projeto não encontrado.</div>
  }

  return (
    <div className="p-6">
      {/* Botão Voltar */}
      <Link
        to="/app"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-md bg-button-primary text-white hover:bg-button-primary/80 transition-colors"
      >
        <ChevronLeft size={20} />
        Voltar
      </Link>

      {/* Banner */}
      <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg mb-6">
        <span className="text-2xl font-bold text-gray-600">BANNER</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Conteúdo Principal (Esquerda) */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">{project.title}</h1>
          <p className="text-sm text-gray-600 mb-4">
            {project.stage} - {project.course}
          </p>

          <h2 className="text-lg font-semibold text-gray-700 mb-2">DESCRIÇÃO</h2>
          <p className="text-gray-600 mb-6">{project.description}</p>

          {/* Linha do tempo */}
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Linha do tempo</h2>
          <ProjectTimeline events={timelineEvents} onViewAttachmentsClick={handleViewAttachmentsClick} />

          {/* Seção de Engajamento */}
           <div className="flex space-x-6 mt-8">
            <div className="flex-1 bg-gray-100 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2">O que você achou da ideia?</h3>
               <div className="flex space-x-2">
                {/* Ícones de lâmpada */}
                 {Array(5).fill(null).map((_, i) => (
                   <img
                     key={i}
                     src={i < rating ? LampadaAcessa : LampadaApagada}
                     alt={i < rating ? 'Lâmpada acesa' : 'Lâmpada apagada'}
                     className={'cursor-pointer w-6 h-6'}
                     onClick={() => handleRatingClick(i + 1)}
                   />
                 ))}
               </div>
            </div>
            <div className="flex-1 bg-gray-100 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2">Compartilhe essa ideia!</h3>
              <div className="flex space-x-4 text-gray-600">
                 <Instagram size={24} className="hover:text-pink-600" />
                 <Twitter size={24} className="hover:text-blue-400" />
                 <Linkedin size={24} className="hover:text-blue-700" />
               </div>
            </div>
           </div>
        </div>

        {/* Sidebar (Direita) */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
          {/* Seção Equipe (Placeholder) */}
          <div className="bg-dark-blue rounded-lg p-4 text-white flex flex-col items-center">
             <div className="flex space-x-2 mb-3">
                 {/* Avatares placeholder */}
                {Array(4).fill(null).map((_, i) => <div key={i} className="w-10 h-10 bg-gray-400 rounded-full"></div>)}
             </div>
             <button className="text-sm flex items-center space-x-1 hover:underline">
               <span>Ver equipe</span>
               <ChevronRight size={16} />
             </button>
          </div>

          {/* Seção Docente (Placeholder) */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={24} className="text-gray-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{project.teacher}</h4>
              <p className="text-sm text-gray-600">Docente</p>
            </div>
          </div>

          {/* Seção Código (Placeholder) */}
           <div className="bg-gray-100 rounded-lg p-4">
             <h3 className="text-md font-semibold text-gray-700 mb-2">Código</h3>
              {/* Placeholder for blurred code */}
             <div className="bg-gray-200 h-24 rounded-md mb-3 blur-sm"></div>
             <button className="w-full px-4 py-2 bg-gray-200 rounded flex items-center justify-center space-x-2 text-gray-700 hover:bg-gray-300">
               <Github size={20} />
               <span>Código oculto</span>
             </button>
           </div>
        </div>
      </div>

      {/* Modal de Anexos */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Anexos da Linha do Tempo">
        {/* Conteúdo do Modal (Lista de anexos, etc.) */}
        <p>Conteúdo do modal aqui (lista de anexos, etc.)</p>
      </Modal>
    </div>
  )
}

export default ProjectDetailPage 