import React, { useEffect } from 'react'
import { Book, Users, MapPin, Lightbulb } from 'lucide-react'
import { ProjectFormSectionProps } from '../types'
import { useFormData } from '../hooks/useFormData'
import AuthorManager from './AuthorManager'
import OrientadorManager from './OrientadorManager'

const ProjectInfoSection: React.FC<ProjectFormSectionProps> = ({
  data,
  updateData,
  errors = {}
}) => {
  const { 
    cursosDisponiveis,
    unidadesCurricularesOptions,
    loadingUCs,
    getTurmasByCurso,
    getDefaultCourse,
    userInfo
  } = useFormData()

  // Pré-popular com dados do usuário logado
  useEffect(() => {
    if (userInfo.curso && !data.curso) {
      const defaultCourse = getDefaultCourse()
      if (defaultCourse) {
        updateData({ curso: defaultCourse })
      }
    }
    
    // Pré-popular email do líder
    if (userInfo.email && !data.liderEmail) {
      updateData({ 
        liderEmail: userInfo.email,
        isLeader: true 
      })
    }
  }, [userInfo, data.curso, data.liderEmail, getDefaultCourse, updateData])

  const handleInputChange = (field: string, value: string | boolean) => {
    updateData({ [field]: value })
  }

  const handleAddAuthor = (email: string) => {
    updateData({
      autores: [...data.autores, email]
    })
  }

  const handleRemoveAuthor = (index: number) => {
    const newAutores = data.autores.filter((_, i) => i !== index)
    updateData({ autores: newAutores })
  }

  const handleSetOrientador = (email: string) => {
    updateData({ orientador: email })
  }

  const handleRemoveOrientador = () => {
    updateData({ orientador: '' })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Informações do Projeto
        </h2>
        <p className="text-gray-600">
          Preencha as informações básicas do seu projeto
        </p>
      </div>

      {/* Formulário */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna esquerda - Informações acadêmicas */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Book className="w-5 h-5 text-blue-600" />
              Informações Acadêmicas
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Curso */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Curso *
                </label>
                <input
                  type="text"
                  list="cursos-list"
                  value={data.curso}
                  onChange={e => handleInputChange('curso', e.target.value)}
                  placeholder="Digite ou selecione o curso"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.curso ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <datalist id="cursos-list">
                  {cursosDisponiveis.map((curso: any) => (
                    <option key={curso.value} value={curso.value}>
                      {curso.label}
                    </option>
                  ))}
                </datalist>
                {errors.curso && <p className="text-red-500 text-xs mt-1">{errors.curso}</p>}
              </div>

              {/* Turma */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Turma *
                </label>
                <input
                  type="text"
                  list="turmas-list"
                  value={data.turma}
                  onChange={e => handleInputChange('turma', e.target.value)}
                  placeholder="Digite a turma"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.turma ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <datalist id="turmas-list">
                  {data.curso && getTurmasByCurso(data.curso).map(turma => (
                    <option key={turma.value} value={turma.value}>
                      {turma.label}
                    </option>
                  ))}
                </datalist>
                {errors.turma && <p className="text-red-500 text-xs mt-1">{errors.turma}</p>}
              </div>
            </div>

            {/* Unidade Curricular */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unidade Curricular *
              </label>
              <input
                type="text"
                list="unidades-curriculares-list"
                value={data.unidadeCurricular}
                onChange={e => handleInputChange('unidadeCurricular', e.target.value)}
                placeholder={loadingUCs ? "Carregando..." : "Digite ou selecione a unidade curricular"}
                disabled={loadingUCs}
                className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.unidadeCurricular ? 'border-red-500' : 'border-gray-300'
                } ${loadingUCs ? 'bg-gray-100' : ''}`}
              />
              <datalist id="unidades-curriculares-list">
                {!loadingUCs && unidadesCurricularesOptions.map((uc: any) => (
                  <option key={uc.value} value={uc.value}>
                    {uc.label}
                  </option>
                ))}
              </datalist>
              {errors.unidadeCurricular && <p className="text-red-500 text-xs mt-1">{errors.unidadeCurricular}</p>}
            </div>

            {/* Opções adicionais */}
            <div className="mt-6 space-y-4">
              {/* Itinerário de Projetos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Faz parte do Itinerário de Projetos?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="itinerario"
                      value="Sim"
                      checked={data.itinerario === 'Sim'}
                      onChange={e => handleInputChange('itinerario', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Sim</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="itinerario"
                      value="Não"
                      checked={data.itinerario === 'Não'}
                      onChange={e => handleInputChange('itinerario', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Não</span>
                  </label>
                </div>
              </div>

              {/* SENAI Lab */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Utilizou o SENAI Lab?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="senaiLab"
                      value="Sim"
                      checked={data.senaiLab === 'Sim'}
                      onChange={e => handleInputChange('senaiLab', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Sim</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="senaiLab"
                      value="Não"
                      checked={data.senaiLab === 'Não'}
                      onChange={e => handleInputChange('senaiLab', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Não</span>
                  </label>
                </div>
              </div>

              {/* SAGA SENAI */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Participou do SAGA SENAI?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sagaSenai"
                      value="Sim"
                      checked={data.sagaSenai === 'Sim'}
                      onChange={e => handleInputChange('sagaSenai', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Sim</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sagaSenai"
                      value="Não"
                      checked={data.sagaSenai === 'Não'}
                      onChange={e => handleInputChange('sagaSenai', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Não</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita - Detalhes do projeto */}
        <div className="space-y-6">
          {/* Informações do Projeto */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Detalhes do Projeto
            </h3>

            <div className="space-y-4">
              {/* Título */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Projeto *
                </label>
                <input
                  type="text"
                  value={data.titulo}
                  onChange={e => handleInputChange('titulo', e.target.value)}
                  placeholder="Digite o título do seu projeto"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.titulo ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.titulo && <p className="text-red-500 text-xs mt-1">{errors.titulo}</p>}
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Projeto *
                </label>
                <textarea
                  value={data.descricao}
                  onChange={e => handleInputChange('descricao', e.target.value)}
                  placeholder="Descreva o objetivo, funcionalidades e tecnologias utilizadas no projeto"
                  rows={4}
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    errors.descricao ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.descricao && <p className="text-red-500 text-xs mt-1">{errors.descricao}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  {data.descricao.length}/500 caracteres
                </p>
              </div>
            </div>
          </div>

          {/* Pessoas Envolvidas */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              Pessoas Envolvidas
            </h3>

            <div className="space-y-6">
              {/* Autores */}
              <AuthorManager
                autores={data.autores}
                onAddAuthor={handleAddAuthor}
                onRemoveAuthor={handleRemoveAuthor}
                error={errors.autores}
              />

              {/* Orientador */}
              <OrientadorManager
                orientador={data.orientador}
                onSetOrientador={handleSetOrientador}
                onRemoveOrientador={handleRemoveOrientador}
                error={errors.orientador}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfoSection
