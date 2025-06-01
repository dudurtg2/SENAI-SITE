import React, { useState } from 'react'
import ProjectInfoSection from './components/project-info-section'
import AttachmentsTimelineSection from './components/attachments-timeline-section'
import ReviewSection from './components/review-section'

interface ProjectData {
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

const CreateProjectPage = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const [projectData, setProjectData] = useState<ProjectData>({
    curso: '',
    turma: '',
    itinerario: '',
    unidadeCurricular: '',
    senaiLab: '',
    sagaSenai: '',
    titulo: '',
    descricao: '',
    autores: [],
    orientador: '',
    liderEmail: '',
    isLeader: false,
    banner: null,
    timelineFiles: [null, null, null, null],
    codigo: null,
    codigoVisibilidade: 'Público',
    anexosVisibilidade: 'Público'
  })

  const updateProjectData = (updates: Partial<ProjectData>) => {
    setProjectData(prev => ({
      ...prev,
      ...updates
    }))
  }

  const handleSaveAndPublish = () => {
    console.log('Dados do projeto:', projectData)
  }

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <ProjectInfoSection
            data={projectData}
            updateData={updateProjectData}
          />
        )
      case 1:
        return (
          <AttachmentsTimelineSection
            data={projectData}
            updateData={updateProjectData}
          />
        )
      case 2:
        return (
          <ReviewSection
            data={projectData}
            onSaveAndPublish={handleSaveAndPublish}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="p-3 space-y-10  min-h-screen">
      <div>{renderCurrentSection()}</div>

      {/* Navegação */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentStep === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Voltar
        </button>

        {currentStep < 2 && (
          <button
            onClick={() => setCurrentStep(prev => Math.min(prev + 1, 2))}
            className="px-4 py-2 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600"
          >
            Avançar
          </button>
        )}
      </div>
    </div>
  )
}

export default CreateProjectPage
