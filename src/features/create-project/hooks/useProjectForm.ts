import { useState, useCallback } from 'react'
import { ProjectFormData, ProjectFormState, FormStep } from '../types'

const initialData: ProjectFormData = {
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
}

export const useProjectForm = () => {
  const [state, setState] = useState<ProjectFormState>({
    currentStep: 'info',
    data: initialData,
    errors: {},
    isSubmitting: false
  })

  const updateData = useCallback((updates: Partial<ProjectFormData>) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, ...updates },
      errors: {} // Limpar erros quando dados são atualizados
    }))
  }, [])

  const setCurrentStep = useCallback((step: FormStep) => {
    setState(prev => ({
      ...prev,
      currentStep: step
    }))
  }, [])

  const setErrors = useCallback((errors: Record<string, string>) => {
    setState(prev => ({
      ...prev,
      errors
    }))
  }, [])

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    setState(prev => ({
      ...prev,
      isSubmitting
    }))
  }, [])

  // Validação do formulário por etapa
  const validateStep = useCallback((step: FormStep): boolean => {
    const errors: Record<string, string> = {}

    switch (step) {
      case 'info':
        if (!state.data.titulo.trim()) {
          errors.titulo = 'Título é obrigatório'
        }
        if (!state.data.descricao.trim()) {
          errors.descricao = 'Descrição é obrigatória'
        }
        if (!state.data.curso) {
          errors.curso = 'Curso é obrigatório'
        }
        if (!state.data.turma) {
          errors.turma = 'Turma é obrigatória'
        }
        if (!state.data.unidadeCurricular) {
          errors.unidadeCurricular = 'Unidade Curricular é obrigatória'
        }
        if (state.data.autores.length === 0) {
          errors.autores = 'Pelo menos um autor é obrigatório'
        }
        break

      case 'attachments':
        // Validações para anexos são opcionais por enquanto
        break

      case 'review':
        // Validação final antes do envio
        if (!state.data.titulo.trim() || !state.data.descricao.trim()) {
          errors.general = 'Informações obrigatórias estão faltando'
        }
        break
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }, [state.data, setErrors])

  // Avançar para próxima etapa
  const nextStep = useCallback(() => {
    const steps: FormStep[] = ['info', 'attachments', 'review']
    const currentIndex = steps.indexOf(state.currentStep)
    
    if (validateStep(state.currentStep) && currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
      return true
    }
    return false
  }, [state.currentStep, validateStep, setCurrentStep])

  // Voltar para etapa anterior
  const prevStep = useCallback(() => {
    const steps: FormStep[] = ['info', 'attachments', 'review']
    const currentIndex = steps.indexOf(state.currentStep)
    
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }, [state.currentStep, setCurrentStep])

  // Resetar formulário
  const resetForm = useCallback(() => {
    setState({
      currentStep: 'info',
      data: initialData,
      errors: {},
      isSubmitting: false
    })
  }, [])

  // Adicionar autor
  const addAuthor = useCallback((email: string) => {
    if (email.trim() && !state.data.autores.includes(email.trim())) {
      updateData({
        autores: [...state.data.autores, email.trim()]
      })
    }
  }, [state.data.autores, updateData])

  // Remover autor
  const removeAuthor = useCallback((index: number) => {
    const newAutores = state.data.autores.filter((_, i) => i !== index)
    updateData({ autores: newAutores })
  }, [state.data.autores, updateData])

  return {
    // Estado
    state,
    
    // Ações
    updateData,
    setCurrentStep,
    nextStep,
    prevStep,
    resetForm,
    addAuthor,
    removeAuthor,
    validateStep,
    setSubmitting,
    
    // Estado computado
    canProceed: Object.keys(state.errors).length === 0,
    isFirstStep: state.currentStep === 'info',
    isLastStep: state.currentStep === 'review'
  }
}
