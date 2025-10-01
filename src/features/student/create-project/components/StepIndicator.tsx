import React from 'react'
import { Check, FileText, Upload, Eye } from 'lucide-react'
import { FormStep } from '../types'

interface StepIndicatorProps {
  currentStep: FormStep
  onStepClick?: (step: FormStep) => void
  className?: string
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  onStepClick,
  className = ''
}) => {
  const steps = [
    {
      id: 'info' as FormStep,
      title: 'Informações',
      description: 'Dados básicos do projeto',
      icon: FileText
    },
    {
      id: 'attachments' as FormStep,
      title: 'Anexos',
      description: 'Arquivos e timeline',
      icon: Upload
    },
    {
      id: 'review' as FormStep,
      title: 'Revisão',
      description: 'Verificar e publicar',
      icon: Eye
    }
  ]

  const getStepIndex = (step: FormStep): number => {
    return steps.findIndex(s => s.id === step)
  }

  const getStepStatus = (stepId: FormStep) => {
    const currentIndex = getStepIndex(currentStep)
    const stepIndex = getStepIndex(stepId)

    if (stepIndex < currentIndex) return 'completed'
    if (stepIndex === currentIndex) return 'current'
    return 'upcoming'
  }

  return (
    <div className={`w-full ${className}`}>
      <nav aria-label="Progress">
        <ol className="flex items-center justify-center">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id)
            const isClickable = onStepClick && (status === 'completed' || status === 'current')

            return (
              <li key={step.id} className="relative flex items-center">
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-4 h-0.5 ${
                      status === 'completed' ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    style={{ 
                      left: '2rem',
                      width: 'calc(100% - 2rem + 4rem)'
                    }}
                  />
                )}

                {/* Container do step */}
                <div
                  className={`relative flex flex-col items-center group ${
                    isClickable ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => isClickable && onStepClick!(step.id)}
                >
                  {/* Círculo do step */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      status === 'completed'
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : status === 'current'
                        ? 'bg-white border-blue-500 text-blue-500'
                        : 'bg-white border-gray-300 text-gray-400'
                    } ${
                      isClickable ? 'group-hover:scale-110' : ''
                    }`}
                  >
                    {status === 'completed' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <step.icon className="w-4 h-4" />
                    )}
                  </div>

                  {/* Informações do step */}
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        status === 'current'
                          ? 'text-blue-600'
                          : status === 'completed'
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 hidden sm:block">
                      {step.description}
                    </p>
                  </div>

                  {/* Indicador de etapa atual */}
                  {status === 'current' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Espaçamento */}
                {index < steps.length - 1 && <div className="w-16 sm:w-24" />}
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Barra de progresso móvel */}
      <div className="mt-4 sm:hidden">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Etapa {getStepIndex(currentStep) + 1} de {steps.length}</span>
          <span>{Math.round(((getStepIndex(currentStep) + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((getStepIndex(currentStep) + 1) / steps.length) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default StepIndicator
