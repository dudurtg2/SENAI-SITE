import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  User,
  Github,
  ChevronLeft,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight
} from 'lucide-react'
import ProjectTimeline from '../../components/project-timeline'
import Modal from '../../components/Modal'
import { useProjetos } from '../../hooks/use-queries'

import LampadaAcessa from '../../assets/assert/lampada_acessa.svg'
import LampadaApagada from '../../assets/assert/lampada_apagada.svg'

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rating, setRating] = useState(0) // Estado para a avaliação (0 a 5)

  // Buscar todos os projetos da API
  const { data: projetos, isLoading, error } = useProjetos()

  // Encontrar o projeto específico no client-side
  const projeto = useMemo(() => {
    if (!projetos || !projectId) return null
    return projetos.find(p => p.uuid === projectId)
  }, [projetos, projectId])

  // Mock da timeline - você pode criar uma API específica para isso depois
  const timelineEvents = [
    { date: 'dd/mm/aaaa', description: 'Criatividade e Ideação' },
    { date: 'dd/mm/aaaa', description: 'Modelagem de Projetos' },
    { date: 'dd/mm/aaaa', description: 'Prototipagem de Projetos' },
    { date: 'dd/mm/aaaa', description: 'Implementação de Projetos' }
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline">
            {' '}
            Não foi possível carregar os projetos.
          </span>
        </div>
      </div>
    )
  }

  // Project not found
  if (!projeto) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Projeto não encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <Link
            to="/app/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ChevronLeft size={20} />
            Voltar para Projetos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <Link
        to="/app"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <ChevronLeft size={20} />
        Voltar
      </Link>

      <div
        className="h-64 flex items-center justify-center rounded-lg mb-6 bg-cover bg-center relative"
        style={{
          backgroundImage: projeto.bannerUrl
            ? `url(${projeto.bannerUrl})`
            : 'none',
          backgroundColor: projeto.bannerUrl ? 'transparent' : '#d1d5db'
        }}
      >
        {!projeto.bannerUrl && (
          <span className="text-2xl font-bold text-gray-600">BANNER</span>
        )}

        {/* Badges do projeto */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {projeto.labMaker && (
            <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Lab Maker
            </span>
          )}
          {projeto.participouSaga && (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              SAGA
            </span>
          )}
          {projeto.itinerario && (
            <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
              Itinerário
            </span>
          )}
        </div>

        {/* Código do projeto */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white text-sm px-3 py-1 rounded-full">
            {projeto.codigo}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Conteúdo Principal (Esquerda) */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{projeto.titulo}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <span>{formatDate(projeto.criadoEm)}</span>
            <span>•</span>
            <span>{projeto.curso}</span>
            <span>•</span>
            <span>{projeto.turma}</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-600">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                projeto.status === 'ATIVO'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {projeto.status}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                projeto.visibilidadeCodigo === 'PUBLICO'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-orange-100 text-orange-800'
              }`}
            >
              {projeto.visibilidadeCodigo === 'PUBLICO'
                ? 'Código Público'
                : 'Código Privado'}
            </span>
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            DESCRIÇÃO
          </h2>
          <p className="text-gray-600 mb-6">{projeto.descricao}</p>

          {/* Unidade Curricular */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              Unidade Curricular
            </h3>
            <div className="space-y-1">
              <p className="font-medium">{projeto.unidadeCurricular.nome}</p>
              <p className="text-sm text-gray-600">
                {projeto.unidadeCurricular.descricao}
              </p>
              <p className="text-sm text-gray-500">
                Carga Horária: {projeto.unidadeCurricular.cargaHoraria}
              </p>
            </div>
          </div>

          {/* Linha do tempo */}
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Linha do tempo
          </h2>
          <ProjectTimeline
            events={timelineEvents}
            onViewAttachmentsClick={handleViewAttachmentsClick}
          />

          {/* Seção de Engajamento */}
          <div className="flex space-x-6 mt-8">
            <div className="flex-1 bg-gray-100 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2">
                O que você achou da ideia?
              </h3>
              <div className="flex space-x-2">
                {/* Ícones de lâmpada */}
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
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
              <h3 className="text-md font-semibold mb-2">
                Compartilhe essa ideia!
              </h3>
              <div className="flex space-x-4 text-gray-600">
                <Instagram
                  size={24}
                  className="hover:text-pink-600 cursor-pointer"
                />
                <Twitter
                  size={24}
                  className="hover:text-blue-400 cursor-pointer"
                />
                <Linkedin
                  size={24}
                  className="hover:text-blue-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Direita) */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
          {/* Seção Líder do Projeto */}
          <div className="bg-blue-900 rounded-lg p-4 text-white">
            <h3 className="text-md font-semibold mb-3">Líder do Projeto</h3>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <User size={24} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-semibold">
                  {projeto.liderProjeto.usuarios.usuario}
                </h4>
                <p className="text-sm text-blue-200">
                  Matrícula: {projeto.liderProjeto.matricula}
                </p>
                <p className="text-sm text-blue-200">
                  {projeto.liderProjeto.curso}
                </p>
              </div>
            </div>
            {projeto.liderProjeto.linkedin && (
              <a
                href={projeto.liderProjeto.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center space-x-1 hover:underline"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          {/* Seção Equipe (Placeholder) */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-3">
              Equipe do Projeto
            </h3>
            <div className="flex space-x-2 mb-3">
              {/* Avatares placeholder */}
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-400 rounded-full"
                  ></div>
                ))}
            </div>
            <button className="text-sm flex items-center space-x-1 hover:underline text-blue-600">
              <span>Ver equipe completa</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Seção Código */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              Código do Projeto
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Visibilidade:</span>
                <span
                  className={`font-medium ${
                    projeto.visibilidadeCodigo === 'PUBLICO'
                      ? 'text-green-600'
                      : 'text-orange-600'
                  }`}
                >
                  {projeto.visibilidadeCodigo === 'PUBLICO'
                    ? 'Público'
                    : 'Privado'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Anexos:</span>
                <span
                  className={`font-medium ${
                    projeto.visibilidadeAnexos === 'PUBLICO'
                      ? 'text-green-600'
                      : 'text-orange-600'
                  }`}
                >
                  {projeto.visibilidadeAnexos === 'PUBLICO'
                    ? 'Públicos'
                    : 'Privados'}
                </span>
              </div>
            </div>

            {projeto.visibilidadeCodigo === 'PUBLICO' ? (
              <a
                href={`https://github.com/projeto/${projeto.codigo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded flex items-center justify-center space-x-2 hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
                <span>Ver no GitHub</span>
              </a>
            ) : (
              <div className="text-center">
                <div className="bg-gray-200 h-24 rounded-md mb-3 blur-sm flex items-center justify-center">
                  <span className="text-gray-500">Código oculto</span>
                </div>
                <button
                  disabled
                  className="w-full px-4 py-2 bg-gray-200 rounded flex items-center justify-center space-x-2 text-gray-500 cursor-not-allowed"
                >
                  <Github size={20} />
                  <span>Código Privado</span>
                </button>
              </div>
            )}
          </div>

          {/* Informações Adicionais */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-3">
              Informações
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Criado em:</span>
                <span>{formatDate(projeto.criadoEm)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Atualizado em:</span>
                <span>{formatDate(projeto.atualizadoEm)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ID do Projeto:</span>
                <span className="font-mono text-xs">{projeto.uuid}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Anexos */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Anexos da Linha do Tempo"
      >
        <p>Conteúdo do modal aqui (lista de anexos, etc.)</p>
      </Modal>
    </div>
  )
}

export default ProjectDetailPage
