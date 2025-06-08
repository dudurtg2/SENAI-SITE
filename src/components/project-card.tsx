import React from 'react'
import { Github } from 'lucide-react'

interface ProjectData {
  uuid: string
  titulo: string
  descricao: string
  curso: string
  turma: string
  labMaker: boolean
  participouSaga: boolean
  itinerario: boolean
  unidadeCurricular: {
    uuid: string
    nome: string
    descricao: string
    cargaHoraria: string
    criadoEm: string
    atualizadoEm: string
  }
  liderProjeto: {
    uuid: string
    usuarios: {
      uuid: string
      usuario: string
      email: string
      tipo: string
      status: string
    }
    matricula: string
    curso: string
    telefonePessoal: string
    telefoneProfissional: string
    linkedin: string
    endereco: {
      uuid: string
      cep: string
      logradouro: string
      numero: number
      complemento: string
      bairro: string
      cidade: string
      estado: string
      pais: string
    }
    status: string
    criadoEm: string
    atualizadoEm: string
  }
  bannerUrl: string
  codigo: string
  visibilidadeCodigo: string
  visibilidadeAnexos: string
  status: string
  criadoEm: string
  atualizadoEm: string
}

interface ProjectCardProps {
  projeto: ProjectData
  backgroundImage: string
  developmentIcon: string
  planningIcon: string
  productionIcon: string
  completedIcon: string
  githubUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projeto,
  backgroundImage,
  developmentIcon,
  planningIcon,
  productionIcon,
  completedIcon,
  githubUrl
}) => {
  // Função para determinar o status baseado na data de criação
  const getStatus = () => {
    const createdDate = new Date(projeto.criadoEm)
    const now = new Date()
    const daysDiff = Math.floor(
      (now.getTime() - createdDate.getTime()) / (1000 * 3600 * 24)
    )

    if (daysDiff < 7) return 'development'
    if (daysDiff < 30) return 'planning'
    if (daysDiff < 60) return 'production'
    return 'completed'
  }

  const status = getStatus()

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
    switch (status) {
      case 'development':
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const cardBackground = backgroundImage

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="h-32 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${cardBackground})` }}
      >
        <div className="absolute top-2 right-2">
          <div
            className={`w-8 h-8 ${getStatusColor()} rounded-lg flex items-center justify-center`}
          >
            <img src={getStatusIcon()} className="w-4 h-4" alt={status} />
          </div>
        </div>

        {/* Badge para indicadores especiais */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {projeto.labMaker && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Lab Maker
            </span>
          )}
          {projeto.participouSaga && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              SAGA
            </span>
          )}
          {projeto.itinerario && (
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
              Itinerário
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1">
            {projeto.titulo}
          </h3>
          <span className="text-xs text-gray-500 ml-2 shrink-0">
            {projeto.codigo}
          </span>
        </div>

        {projeto.descricao && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {projeto.descricao}
          </p>
        )}

        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Curso:</span>
            <span className="text-gray-700 font-medium">{projeto.curso}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Turma:</span>
            <span className="text-gray-700">{projeto.turma}</span>
          </div>

          {projeto.liderProjeto && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Líder:</span>
              <span className="text-gray-700">
                {projeto.liderProjeto.usuarios.usuario}
              </span>
            </div>
          )}
        </div>

        <div className="border-t pt-3">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <div>Criado em: {formatDate(projeto.criadoEm)}</div>
              <div className="mt-1">UC: {projeto.unidadeCurricular.nome}</div>
            </div>

            <div className="flex items-center gap-2">
              {/* Indicador de visibilidade */}
              <div className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    projeto.visibilidadeCodigo === 'PUBLICO'
                      ? 'bg-green-400'
                      : 'bg-orange-400'
                  }`}
                ></span>
                <span className="text-xs text-gray-500">
                  {projeto.visibilidadeCodigo === 'PUBLICO'
                    ? 'Público'
                    : 'Privado'}
                </span>
              </div>

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
