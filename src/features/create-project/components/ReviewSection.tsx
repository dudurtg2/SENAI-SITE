import React from 'react'
import { CheckCircle, AlertCircle, Send, Eye, User, Book, Upload } from 'lucide-react'
import { ProjectFormSectionProps } from '../types'
import { useFormOptions } from '../hooks/useFormOptions'

interface ReviewSectionProps extends ProjectFormSectionProps {
  onSubmit: () => void
  isSubmitting: boolean
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  data,
  onSubmit,
  isSubmitting,
  errors = {}
}) => {
  const { getCursoLabel, getTurmaLabel, getUnidadeLabel } = useFormOptions()

  // Verificar campos obrigatórios
  const requiredFields = [
    { label: 'Título', value: data.titulo, key: 'titulo' },
    { label: 'Descrição', value: data.descricao, key: 'descricao' },
    { label: 'Curso', value: data.curso, key: 'curso' },
    { label: 'Turma', value: data.turma, key: 'turma' },
    { label: 'Unidade Curricular', value: data.unidadeCurricular, key: 'unidadeCurricular' },
    { label: 'Autores', value: data.autores, key: 'autores' }
  ]

  const getFieldStatus = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) {
      return value.length > 0 ? 'complete' : 'incomplete'
    }
    return value && value.trim() !== '' ? 'complete' : 'incomplete'
  }

  const completedFields = requiredFields.filter(
    field => getFieldStatus(field.value) === 'complete'
  ).length

  const isFormComplete = completedFields === requiredFields.length
  const completionPercentage = (completedFields / requiredFields.length) * 100

  const getDisplayValue = (field: any) => {
    switch (field.key) {
      case 'autores':
        return Array.isArray(field.value) && field.value.length > 0
          ? `${field.value.length} autor(es): ${field.value.join(', ')}`
          : 'Nenhum autor'
      case 'descricao':
        return field.value && field.value.length > 100
          ? `${field.value.substring(0, 100)}...`
          : field.value || 'Não preenchido'
      case 'curso':
        return getCursoLabel(field.value) || 'Não selecionado'
      case 'turma':
        return getTurmaLabel(field.value) || 'Não selecionado'
      case 'unidadeCurricular':
        return getUnidadeLabel(field.value) || 'Não selecionado'
      default:
        return field.value || 'Não preenchido'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Revisão do Projeto
        </h2>
        <p className="text-gray-600">
          Verifique todas as informações antes de publicar
        </p>
      </div>

      {/* Indicador de Progresso */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Progresso do Formulário</h3>
          <span className="text-2xl font-bold text-blue-600">
            {Math.round(completionPercentage)}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{completedFields} de {requiredFields.length} campos obrigatórios</span>
          <span>
            {isFormComplete ? (
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                Completo
              </span>
            ) : (
              <span className="flex items-center gap-1 text-orange-600">
                <AlertCircle className="w-4 h-4" />
                Incompleto
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Informações do Projeto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informações Básicas */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Book className="w-5 h-5 text-blue-600" />
            Informações Básicas
          </h3>

          <div className="space-y-4">
            {requiredFields.map((field) => {
              const status = getFieldStatus(field.value)
              return (
                <div key={field.key} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {field.label}:
                      </span>
                      {status === 'complete' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <p className={`text-sm ${
                      status === 'complete' ? 'text-gray-900' : 'text-red-500'
                    }`}>
                      {getDisplayValue(field)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="space-y-6">
          {/* Pessoas Envolvidas */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-green-600" />
              Pessoas Envolvidas
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-700">Orientador:</span>
                <p className="text-sm text-gray-900">
                  {data.orientador || 'Não definido'}
                </p>
              </div>
            </div>
          </div>

          {/* Configurações Acadêmicas */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Configurações Acadêmicas</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Itinerário de Projetos:</span>
                <span className={`font-medium ${data.itinerario === 'Sim' ? 'text-green-600' : 'text-gray-500'}`}>
                  {data.itinerario || 'Não informado'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SENAI Lab:</span>
                <span className={`font-medium ${data.senaiLab === 'Sim' ? 'text-green-600' : 'text-gray-500'}`}>
                  {data.senaiLab || 'Não informado'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SAGA SENAI:</span>
                <span className={`font-medium ${data.sagaSenai === 'Sim' ? 'text-green-600' : 'text-gray-500'}`}>
                  {data.sagaSenai || 'Não informado'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anexos e Arquivos */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-purple-600" />
          Anexos e Arquivos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Banner */}
          <div className="text-center">
            <div className="w-full h-24 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
              {data.banner ? (
                <img
                  src={URL.createObjectURL(data.banner)}
                  alt="Banner"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-400 text-sm">Sem banner</span>
              )}
            </div>
            <p className="text-sm text-gray-600">Banner do Projeto</p>
          </div>

          {/* Timeline */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 bg-gray-100 rounded-lg mb-2">
              <div className="text-center">
                <span className="text-lg font-bold text-gray-600">
                  {data.timelineFiles.filter(files => files && files.length > 0).length}
                </span>
                <p className="text-xs text-gray-500">de 4 etapas</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Arquivos da Timeline</p>
          </div>

          {/* Código */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 bg-gray-100 rounded-lg mb-2">
              <span className="text-gray-600">
                {data.codigo ? '📁' : '❌'}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {data.codigo ? `Código (${data.codigoVisibilidade})` : 'Sem código'}
            </p>
          </div>
        </div>
      </div>

      {/* Alertas e Avisos */}
      {!isFormComplete && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-orange-800">Campos obrigatórios pendentes</h4>
              <p className="text-sm text-orange-700 mt-1">
                Complete todos os campos obrigatórios antes de publicar o projeto.
              </p>
            </div>
          </div>
        </div>
      )}

      {isFormComplete && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-800">Pronto para publicar!</h4>
              <p className="text-sm text-green-700 mt-1">
                Todas as informações obrigatórias foram preenchidas. Você pode publicar o projeto agora.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Botão de Publicar */}
      <div className="flex justify-center">
        <button
          onClick={onSubmit}
          disabled={!isFormComplete || isSubmitting}
          className={`flex items-center gap-3 px-8 py-4 rounded-lg font-medium text-lg transition-all ${
            isFormComplete && !isSubmitting
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Publicando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Publicar Projeto
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default ReviewSection
