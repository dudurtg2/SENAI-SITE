import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { StepNavigationProps } from '../types'

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  onStepChange,
  canProceed,
  isSubmitting
}) => {
  const steps = ['info', 'attachments', 'review'] as const
  const currentIndex = steps.indexOf(currentStep)
  
  const isFirstStep = currentIndex === 0
  const isLastStep = currentIndex === steps.length - 1

  const handlePrevious = () => {
    if (!isFirstStep) {
      onStepChange(steps[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (!isLastStep && canProceed) {
      onStepChange(steps[currentIndex + 1])
    }
  }

  const getStepTitle = (step: string) => {
    switch (step) {
      case 'info': return 'Informações'
      case 'attachments': return 'Anexos'
      case 'review': return 'Revisão'
      default: return ''
    }
  }

  return (
    <div className="flex items-center justify-between py-3 px-6 border-t border-gray-200 bg-white sticky bottom-0 z-10">
      <div className="flex items-center gap-4">
        {/* Botão Voltar */}
        <button
          onClick={handlePrevious}
          disabled={isFirstStep || isSubmitting}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isFirstStep || isSubmitting
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </button>

        {/* Indicador de etapa atual */}
        <div className="hidden sm:block text-sm text-gray-600">
          Etapa {currentIndex + 1} de {steps.length}: {getStepTitle(currentStep)}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Botão Avançar/Finalizar */}
        {!isLastStep ? (
          <button
            onClick={handleNext}
            disabled={!canProceed || isSubmitting}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              canProceed && !isSubmitting
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Avançar
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <div className="text-sm text-gray-600">
            Revise as informações e clique em "Publicar Projeto"
          </div>
        )}
      </div>
    </div>
  )
}

export default StepNavigation
