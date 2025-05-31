import React from 'react'
import { User, X } from 'lucide-react'

interface ProjectInfoData {
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
}

interface ProjectInfoSectionProps {
  data: ProjectInfoData
  updateData: (update: Partial<ProjectInfoData>) => void
}

const ProjectInfoSection: React.FC<ProjectInfoSectionProps> = ({
  data,
  updateData
}) => {
  const handleInputChange = (field: string, value: string | boolean) => {
    updateData({ [field]: value })
  }

  const handleAddAuthor = () => {
    const email = prompt('Digite o email do autor:')
    if (email && email.trim()) {
      updateData({
        autores: [...data.autores, email.trim()]
      })
    }
  }

  const handleRemoveAuthor = (index: number) => {
    const newAutores = data.autores.filter((_, i) => i !== index)
    updateData({ autores: newAutores })
  }

  const handleAddOrientador = () => {
    const email = prompt('Digite o email do orientador:')
    if (email && email.trim()) {
      updateData({ orientador: email.trim() })
    }
  }

  const handleRemoveOrientador = () => {
    updateData({ orientador: '' })
  }

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-700">
        Questionário e informações
      </h2>

      {/* Primeira linha - Selects e radio buttons */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-white p-6 rounded-lg shadow-sm border">
        <select
          className="col-span-1 md:col-span-1 border rounded px-3 py-2 text-gray-600"
          value={data.curso}
          onChange={e => handleInputChange('curso', e.target.value)}
        >
          <option value="">Curso</option>
          <option value="curso1">Curso 1</option>
          <option value="curso2">Curso 2</option>
        </select>

        <select
          className="col-span-1 md:col-span-1 border rounded px-3 py-2 text-gray-600"
          value={data.turma}
          onChange={e => handleInputChange('turma', e.target.value)}
        >
          <option value="">Turma</option>
          <option value="turma1">Turma 1</option>
          <option value="turma2">Turma 2</option>
        </select>

        <div className="col-span-1 md:col-span-1 flex items-center space-x-2">
          <span className="text-sm text-gray-700">Itinerário de Projetos?</span>
          <div className="flex items-center space-x-1">
            <input
              type="radio"
              name="itinerario"
              value="Sim"
              checked={data.itinerario === 'Sim'}
              onChange={e => handleInputChange('itinerario', e.target.value)}
            />
            <label className="text-sm">Sim</label>
          </div>
          <div className="flex items-center space-x-1">
            <input
              type="radio"
              name="itinerario"
              value="Não"
              checked={data.itinerario === 'Não'}
              onChange={e => handleInputChange('itinerario', e.target.value)}
            />
            <label className="text-sm">Não</label>
          </div>
        </div>

        <select
          className="col-span-1 md:col-span-2 border rounded px-3 py-2 text-gray-600"
          value={data.unidadeCurricular}
          onChange={e => handleInputChange('unidadeCurricular', e.target.value)}
        >
          <option value="">Unidade curricular</option>
          <option value="uc1">Unidade Curricular 1</option>
          <option value="uc2">Unidade Curricular 2</option>
        </select>
      </div>

      {/* Segunda seção - Duas colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna esquerda - Perguntas e campos */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-700">
                Sua solução foi desenvolvida na SENAI Lab (LabMaker)?
              </label>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="senaiLab"
                    value="Sim"
                    checked={data.senaiLab === 'Sim'}
                    onChange={e =>
                      handleInputChange('senaiLab', e.target.value)
                    }
                  />
                  <span className="text-sm">Sim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="senaiLab"
                    value="Não"
                    checked={data.senaiLab === 'Não'}
                    onChange={e =>
                      handleInputChange('senaiLab', e.target.value)
                    }
                  />
                  <span className="text-sm">Não</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-700">
                Já participou de algum desafio da SAGA SENAI (Grand Prix (GP),
                Inova SENAI)
              </label>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="sagaSenai"
                    value="Sim"
                    checked={data.sagaSenai === 'Sim'}
                    onChange={e =>
                      handleInputChange('sagaSenai', e.target.value)
                    }
                  />
                  <span className="text-sm">Sim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="sagaSenai"
                    value="Não"
                    checked={data.sagaSenai === 'Não'}
                    onChange={e =>
                      handleInputChange('sagaSenai', e.target.value)
                    }
                  />
                  <span className="text-sm">Não</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Título do Projeto"
              value={data.titulo}
              onChange={e => handleInputChange('titulo', e.target.value)}
              className="w-full border rounded px-3 py-2 text-gray-600"
            />

            <textarea
              placeholder="Descrição do projeto (até 500 caracteres)"
              maxLength={500}
              value={data.descricao}
              onChange={e => handleInputChange('descricao', e.target.value)}
              className="w-full border rounded px-3 py-2 text-gray-600 resize-none"
              rows={4}
            />
          </div>
        </div>

        {/* Coluna direita - Autores e orientadores */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="font-medium text-gray-700 block mb-2">
                Autores
              </label>
              <div className="space-y-2">
                {data.autores.map((autor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded border"
                  >
                    <span className="text-sm text-gray-700">{autor}</span>
                    <button
                      onClick={() => handleRemoveAuthor(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddAuthor}
                  className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-2xl text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <User size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="font-medium text-gray-700 block mb-2">
                Orientador
              </label>
              <div className="space-y-2">
                {data.orientador && (
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded border">
                    <span className="text-sm text-gray-700">
                      {data.orientador}
                    </span>
                    <button
                      onClick={handleRemoveOrientador}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
                {!data.orientador && (
                  <button
                    onClick={handleAddOrientador}
                    className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-2xl text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
                  >
                    <User size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-medium text-gray-700 block">
                Líder do projeto
              </label>
              <input
                type="email"
                placeholder="Email do líder"
                value={data.liderEmail}
                onChange={e => handleInputChange('liderEmail', e.target.value)}
                className="w-full border rounded px-3 py-2 text-gray-600"
              />
              <div className="flex items-center justify-between mt-3">
                <label className="text-sm text-gray-700">
                  Eu sou líder do projeto
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Não</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.isLeader}
                      onChange={e =>
                        handleInputChange('isLeader', e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                  <span className="text-sm text-gray-700">Sim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectInfoSection
