import React from 'react'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

type ReviewSectionProps = {
  data: {
    curso: string
    turma: string
    itinerario: string
    unidadeCurricular: string
    senaiLab: string
    sagaSenai: string
    titulo: string
    descricao: string
    autores: string[]
    orientador: string
    liderEmail: string
    isLeader: boolean
    banner?: File | null
    timelineFiles: (FileList | null)[]
    codigo?: File | null
    codigoVisibilidade: string
    anexosVisibilidade: string
  }
  onSaveAndPublish: () => void
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  data,
  onSaveAndPublish
}) => {
  const getFieldStatus = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) {
      return value.length > 0 ? 'complete' : 'incomplete'
    }
    return value && value.trim() !== '' ? 'complete' : 'incomplete'
  }

  const requiredFields = [
    { label: 'Curso', value: data.curso, key: 'curso' },
    { label: 'Turma', value: data.turma, key: 'turma' },
    { label: 'Itinerário', value: data.itinerario, key: 'itinerario' },
    {
      label: 'Unidade Curricular',
      value: data.unidadeCurricular,
      key: 'unidadeCurricular'
    },
    { label: 'SENAI Lab', value: data.senaiLab, key: 'senaiLab' },
    { label: 'SAGA SENAI', value: data.sagaSenai, key: 'sagaSenai' },
    { label: 'Título do Projeto', value: data.titulo, key: 'titulo' },
    { label: 'Descrição', value: data.descricao, key: 'descricao' },
    { label: 'Autores', value: data.autores, key: 'autores' },
    { label: 'Orientador', value: data.orientador, key: 'orientador' },
    { label: 'Líder Email', value: data.liderEmail, key: 'liderEmail' }
  ]

  const completedFields = requiredFields.filter(
    field => getFieldStatus(field.value) === 'complete'
  ).length
  const totalRequiredFields = requiredFields.length
  const isFormComplete = completedFields === totalRequiredFields

  const getDisplayValue = (field: any) => {
    if (field.key === 'autores') {
      return Array.isArray(field.value) && field.value.length > 0
        ? `${field.value.length} autor(es)`
        : 'Nenhum autor'
    }
    if (field.key === 'descricao' && field.value) {
      return field.value.length > 50
        ? `${field.value.substring(0, 50)}...`
        : field.value
    }
    return field.value || 'Não preenchido'
  }

  return (
    <section className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Revisão do Projeto
        </h2>

        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progresso do cadastro</span>
            <span className="text-sm text-gray-600">
              {completedFields}/{totalRequiredFields} campos preenchidos
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(completedFields / totalRequiredFields) * 100}%`
              }}
            ></div>
          </div>
        </div>

        {/* Informações do projeto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700 border-b pb-2">
              Informações Básicas
            </h3>
            {requiredFields.slice(0, 6).map(field => (
              <div
                key={field.key}
                className="flex items-center justify-between py-2"
              >
                <span className="text-sm text-gray-600">{field.label}:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-800">
                    {getDisplayValue(field)}
                  </span>
                  {getFieldStatus(field.value) === 'complete' ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <AlertCircle size={16} className="text-orange-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-700 border-b pb-2">
              Detalhes do Projeto
            </h3>
            {requiredFields.slice(6).map(field => (
              <div
                key={field.key}
                className="flex items-start justify-between py-2"
              >
                <span className="text-sm text-gray-600">{field.label}:</span>
                <div className="flex items-start space-x-2 max-w-xs">
                  <span className="text-sm font-medium text-gray-800 text-right">
                    {getDisplayValue(field)}
                  </span>
                  {getFieldStatus(field.value) === 'complete' ? (
                    <CheckCircle size={16} className="text-green-500 mt-0.5" />
                  ) : (
                    <AlertCircle size={16} className="text-orange-500 mt-0.5" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anexos e configurações */}
        <div className="border-t pt-6">
          <h3 className="font-medium text-gray-700 mb-4">
            Anexos e Configurações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Banner:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-800">
                    {data.banner ? 'Adicionado' : 'Não adicionado'}
                  </span>
                  {data.banner ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <AlertCircle size={16} className="text-orange-500" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Código:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-800">
                    {data.codigo ? 'Adicionado' : 'Não adicionado'}
                  </span>
                  {data.codigo ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <AlertCircle size={16} className="text-orange-500" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Arquivos Timeline:
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-800">
                    {data.timelineFiles.filter(f => f !== null).length}{' '}
                    arquivo(s)
                  </span>
                  {data.timelineFiles.some(f => f !== null) ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <AlertCircle size={16} className="text-orange-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Visibilidade do Código:
                </span>
                <span className="text-sm text-gray-800">
                  {data.codigoVisibilidade}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Visibilidade dos Anexos:
                </span>
                <span className="text-sm text-gray-800">
                  {data.anexosVisibilidade}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status e próximos passos */}
        {!isFormComplete && (
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle size={20} className="text-orange-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-orange-800">
                  Campos obrigatórios pendentes
                </h4>
                <p className="text-sm text-orange-700 mt-1">
                  Complete todos os campos obrigatórios para publicar o projeto.
                </p>
              </div>
            </div>
          </div>
        )}

        {isFormComplete && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-800">
                  Projeto pronto para publicação
                </h4>
                <p className="text-sm text-green-700 mt-1">
                  Todos os campos obrigatórios foram preenchidos. Você pode
                  salvar e publicar o projeto.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botão de ação */}
      <div className="flex justify-end">
        <button
          onClick={onSaveAndPublish}
          disabled={!isFormComplete}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isFormComplete
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>Salvar e publicar</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default ReviewSection
