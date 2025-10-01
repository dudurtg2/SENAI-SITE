import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGuest } from '@/contexts/guest-context'
import { useAuth } from '@/contexts/auth-context'
import { useProjectForm } from './hooks'
import {
  StepIndicator,
  StepNavigation,
  NewProjectInfoSection,
  AttachmentsSection,
  ReviewSection
} from './components'

const NewCreateProjectPage = () => {
  const navigate = useNavigate()
  const { isGuest } = useGuest()
  const { isAuthenticated } = useAuth()
  
  const {
    state,
    updateData,
    nextStep,
    prevStep,
    validateStep,
    setSubmitting,
    canProceed,
    isFirstStep,
    isLastStep,
    addAuthor,
    removeAuthor
  } = useProjectForm()

  // Redirecionar visitantes para o dashboard
  useEffect(() => {
    if (isGuest || !isAuthenticated) {
      navigate('/app/dashboard', { replace: true })
    }
  }, [isGuest, isAuthenticated, navigate])

  const handleStepChange = (newStep: any) => {
    // Validar etapa atual antes de mudar
    if (validateStep(state.currentStep)) {
      // Lógica customizada para mudar de etapa
      if (newStep === 'attachments' && state.currentStep === 'info') {
        nextStep()
      } else if (newStep === 'info' && state.currentStep === 'attachments') {
        prevStep()
      } else if (newStep === 'review' && state.currentStep === 'attachments') {
        nextStep()
      } else if (newStep === 'attachments' && state.currentStep === 'review') {
        prevStep()
      }
    }
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    
    try {
      // Aqui faria a chamada para a API
      console.log('Dados do projeto para envio:', state.data)
      
      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Após sucesso, redirecionar
      navigate('/app/projects', { 
        state: { 
          message: 'Projeto criado com sucesso!',
          type: 'success'
        }
      })
    } catch (error) {
      console.error('Erro ao criar projeto:', error)
      // Aqui você poderia mostrar uma notificação de erro
    } finally {
      setSubmitting(false)
    }
  }

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 'info':
        return (
          <NewProjectInfoSection
            data={state.data}
            updateData={updateData}
            errors={state.errors}
          />
        )
      case 'attachments':
        return (
          <AttachmentsSection
            data={state.data}
            updateData={updateData}
            errors={state.errors}
          />
        )
      case 'review':
        return (
          <ReviewSection
            data={state.data}
            updateData={updateData}
            errors={state.errors}
            onSubmit={handleSubmit}
            isSubmitting={state.isSubmitting}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container principal */}
      <div className="max-w-6xl mx-auto">
        {/* Header com indicador de progresso */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Criar Novo Projeto
            </h1>
            <p className="text-sm text-gray-600">
              Siga as etapas para publicar seu projeto na plataforma SENAI
            </p>
          </div>
          
          <StepIndicator
            currentStep={state.currentStep}
            onStepClick={handleStepChange}
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="px-6 py-6">
          {renderCurrentStep()}
        </div>

        {/* Navegação entre etapas */}
        <StepNavigation
          currentStep={state.currentStep}
          onStepChange={handleStepChange}
          canProceed={canProceed && Object.keys(state.errors).length === 0}
          isSubmitting={state.isSubmitting}
        />
      </div>
    </div>
  )
}

export default NewCreateProjectPage
