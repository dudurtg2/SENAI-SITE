import React from 'react'
import { Upload, Image, FileText, Settings, Clock } from 'lucide-react'
import { ProjectFormSectionProps } from '../types'
import CodeManager from './CodeManager'

const AttachmentsSection: React.FC<ProjectFormSectionProps> = ({
  data,
  updateData,
  errors = {}
}) => {
  const timelineStages = [
    {
      id: 0,
      name: 'Criatividade e Ideação',
      description: 'Brainstorming, pesquisas e definição do conceito'
    },
    {
      id: 1,
      name: 'Modelagem de Projetos',
      description: 'Diagramas, wireframes e planejamento'
    },
    {
      id: 2,
      name: 'Prototipagem de projetos',
      description: 'Desenvolvimento de protótipos e testes'
    },
    {
      id: 3,
      name: 'Implementação de projetos',
      description: 'Desenvolvimento final e documentação'
    }
  ]

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    updateData({ banner: file })
  }

  const handleTimelineFileUpload = (index: number, files: FileList | null) => {
    const newTimelineFiles = [...data.timelineFiles]
    newTimelineFiles[index] = files
    updateData({ timelineFiles: newTimelineFiles })
  }

  const handleCodeUpload = (file: File | null) => {
    updateData({ codigo: file })
  }

  const handleVisibilityChange = (field: 'codigoVisibilidade' | 'anexosVisibilidade', value: 'Público' | 'Privado') => {
    updateData({ [field]: value })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Anexos e Timeline
        </h2>
        <p className="text-gray-600">
          Adicione imagens, arquivos e organize o desenvolvimento do projeto
        </p>
      </div>

      {/* Banner do Projeto */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Image className="w-5 h-5 text-purple-600" />
          Banner do Projeto
        </h3>

        <div className="relative">
          <div className={`relative border-2 border-dashed rounded-lg overflow-hidden ${
            data.banner ? 'border-green-500' : 'border-gray-300 hover:border-gray-400'
          }`}>
            {data.banner ? (
              <div className="relative h-48">
                <img
                  src={URL.createObjectURL(data.banner)}
                  alt="Banner do projeto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => updateData({ banner: null })}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Remover Banner
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 mb-3" />
                  <p className="text-sm font-medium">Clique para adicionar um banner</p>
                  <p className="text-xs">PNG, JPG até 5MB</p>
                </div>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          O banner será exibido na capa do seu projeto. Recomendamos uma imagem em formato landscape (16:9).
        </p>
      </div>

      {/* Timeline do Projeto */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          Timeline de Desenvolvimento
        </h3>

        {/* Timeline visual */}
        <div className="relative mb-8">
          <div className="flex justify-between items-center relative">
            {/* Linha conectora */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

            {timelineStages.map((stage, idx) => (
              <div key={stage.id} className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  data.timelineFiles[idx] && data.timelineFiles[idx]?.length 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {idx + 1}
                </div>
                <div className="mt-2 text-center max-w-24">
                  <p className="text-xs font-medium text-gray-800">{stage.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload de arquivos por etapa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timelineStages.map((stage, idx) => (
            <div key={stage.id} className="border rounded-lg p-4">
              <h4 className="font-medium text-sm text-gray-800 mb-2">
                {stage.name}
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                {stage.description}
              </p>
              
              <div className="relative">
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={(e) => handleTimelineFileUpload(idx, e.target.files)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className={`border-2 border-dashed rounded-lg p-3 text-center transition-colors ${
                  data.timelineFiles[idx]?.length 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  {data.timelineFiles[idx]?.length ? (
                    <div>
                      <FileText className="mx-auto h-6 w-6 text-green-500 mb-1" />
                      <p className="text-xs text-green-700">
                        {data.timelineFiles[idx]!.length} arquivo(s)
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="mx-auto h-6 w-6 text-gray-400 mb-1" />
                      <p className="text-xs text-gray-500">Adicionar</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Dica:</strong> Adicione imagens, documentos ou apresentações que mostrem a evolução do seu projeto em cada etapa.
          </p>
        </div>
      </div>

      {/* Código e Configurações */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Código do Projeto */}
        <div className="lg:col-span-2">
          <CodeManager
            codigo={data.codigo}
            codigoVisibilidade={data.codigoVisibilidade}
            onCodeUpload={handleCodeUpload}
            onVisibilityChange={(visibility) => handleVisibilityChange('codigoVisibilidade', visibility)}
            error={errors.codigo}
          />
        </div>

        {/* Configurações Gerais */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-600" />
            Configurações
          </h3>

          <div className="space-y-4">
            {/* Visibilidade dos Anexos */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visibilidade dos Anexos
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="anexosVisibilidade"
                    value="Público"
                    checked={data.anexosVisibilidade === 'Público'}
                    onChange={(e) => handleVisibilityChange('anexosVisibilidade', e.target.value as 'Público')}
                    className="mr-2"
                  />
                  <span className="text-sm">Público</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="anexosVisibilidade"
                    value="Privado"
                    checked={data.anexosVisibilidade === 'Privado'}
                    onChange={(e) => handleVisibilityChange('anexosVisibilidade', e.target.value as 'Privado')}
                    className="mr-2"
                  />
                  <span className="text-sm">Privado</span>
                </label>
              </div>
            </div>

            {/* Informações sobre arquivos */}
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-sm text-gray-800 mb-2">Arquivos Aceitos</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Imagens: PNG, JPG, GIF</li>
                <li>• Documentos: PDF, DOC, DOCX</li>
                <li>• Código: ZIP, RAR, 7Z</li>
                <li>• Tamanho máximo: 50MB por arquivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttachmentsSection
