import React from 'react'
import { Plus } from 'lucide-react'

type AttachmentsTimelineSectionProps = {
  data: {
    banner?: File | null
    timelineFiles: (FileList | null)[]
    codigo?: File | null
    codigoVisibilidade: string
    anexosVisibilidade: string
  }
  updateData: (data: Partial<AttachmentsTimelineSectionProps['data']>) => void
}

const AttachmentsTimelineSection: React.FC<AttachmentsTimelineSectionProps> = ({
  data,
  updateData
}) => {
  const timelineStages = [
    'Criatividade e Ideação',
    'Modelagem de Projetos',
    'Prototipagem de projetos',
    'Implementação de projetos'
  ]

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    updateData({ banner: file })
  }

  const handleTimelineFileUpload = (index: number, file: FileList | null) => {
    const newTimelineFiles = [...data.timelineFiles]
    newTimelineFiles[index] = file
    updateData({ timelineFiles: newTimelineFiles })
  }

  const handleCodeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    updateData({ codigo: file })
  }

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-700">Anexos</h2>

      {/* Banner Upload */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-700 text-xl font-medium relative">
          {data.banner ? (
            <img
              src={URL.createObjectURL(data.banner)}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">BANNER</div>
              <input
                type="file"
                accept="image/*"
                onChange={handleBannerUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="text-sm text-gray-500">
                Clique para adicionar banner
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Linha do tempo */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-md font-semibold mb-6 text-gray-700">
          Linha do tempo
        </h3>

        {/* Timeline visual */}
        <div className="relative mb-8">
          <div className="flex justify-between items-center relative">
            {/* Linha de conexão */}
            <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

            {timelineStages.map((stage, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center relative z-10"
              >
                <div
                  className={`w-4 h-4 rounded-full mb-2 ${
                    idx === 0 ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
                <span className="text-xs text-center max-w-20 text-gray-600 leading-tight">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline file uploads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timelineStages.map((stage, idx) => (
            <div key={idx} className="relative">
              <input
                type="file"
                multiple
                onChange={e => handleTimelineFileUpload(idx, e.target.files)}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className="border-2 border-dashed border-gray-300 hover:border-gray-400 py-8 rounded-md flex flex-col items-center justify-center text-gray-400 hover:text-gray-500 transition-colors">
                <Plus size={24} className="mb-2" />
                <span className="text-xs text-center px-2">
                  Adicionar arquivos para {stage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Código e Configurações */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Adicionar código */}
        <div className="bg-white border rounded-lg p-6 flex-1 lg:max-w-md">
          <h4 className="font-medium mb-4 text-gray-700">Adicionar código</h4>
          <div className="relative">
            <input
              type="file"
              onChange={handleCodeUpload}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
            />
            <div className="border-2 border-dashed border-gray-300 hover:border-gray-400 py-8 rounded-md flex flex-col items-center justify-center text-gray-400 hover:text-gray-500 transition-colors">
              <Plus size={32} />
              <span className="text-sm mt-2">Clique para adicionar código</span>
            </div>
          </div>
        </div>

        {/* Configurações */}
        <div className="bg-white border rounded-lg p-6 w-full lg:w-80">
          <h4 className="font-medium mb-4 text-gray-700">Configurações</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Código:
              </label>
              <select
                className="border w-full px-3 py-2 rounded text-gray-600"
                value={data.codigoVisibilidade}
                onChange={e =>
                  updateData({ codigoVisibilidade: e.target.value })
                }
              >
                <option value="Público">Público</option>
                <option value="Privado">Privado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Anexos:
              </label>
              <select
                className="border w-full px-3 py-2 rounded text-gray-600"
                value={data.anexosVisibilidade}
                onChange={e =>
                  updateData({ anexosVisibilidade: e.target.value })
                }
              >
                <option value="Público">Público</option>
                <option value="Privado">Privado</option>
              </select>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Projeto cadastrado em: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AttachmentsTimelineSection
