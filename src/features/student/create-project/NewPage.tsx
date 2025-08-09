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
        <div className="bg-white border-b border-gray-200 px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Criar Novo Projeto
            </h1>
            <p className="text-gray-600">
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
        <div className="px-6 py-8">
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

      {/* Debug info - apenas em desenvolvimento */}
      {import.meta.env.DEV && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs max-w-sm">
          <div className="font-bold mb-2">Debug Info:</div>
          <div>Etapa: {state.currentStep}</div>
          <div>Pode prosseguir: {canProceed ? 'Sim' : 'Não'}</div>
          <div>Erros: {Object.keys(state.errors).length}</div>
          <div>Enviando: {state.isSubmitting ? 'Sim' : 'Não'}</div>
          <div>Título: {state.data.titulo || 'Vazio'}</div>
          <div>Autores: {state.data.autores.length}</div>
        </div>
      )}
    </div>
  )
}

export default NewCreateProjectPage
