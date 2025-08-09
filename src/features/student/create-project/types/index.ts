export interface ProjectFormData {
  // Informações básicas do projeto
  curso: string
  turma: string
  itinerario: string
  unidadeCurricular: string
  senaiLab: string
  sagaSenai: string
  titulo: string
  descricao: string
  
  // Pessoas envolvidas
  autores: string[]
  orientador: string
  liderEmail: string
  isLeader: boolean
  
  // Arquivos e anexos
  banner?: File | null
  timelineFiles: (FileList | null)[]
  codigo?: File | null
  
  // Configurações de visibilidade
  codigoVisibilidade: 'Público' | 'Privado'
  anexosVisibilidade: 'Público' | 'Privado'
}

export interface ProjectStep {
  id: number
  title: string
  description: string
  isCompleted: boolean
  isActive: boolean
}

export interface TimelineStage {
  id: number
  name: string
  description: string
  files: FileList | null
}

export interface CourseOption {
  value: string
  label: string
}

export interface ClassOption {
  value: string
  label: string
  courseId: string
}

export interface UnidadeCurricularOption {
  value: string
  label: string
  description?: string
}

// Estados do formulário
export type FormStep = 'info' | 'attachments' | 'review'

export interface ProjectFormState {
  currentStep: FormStep
  data: ProjectFormData
  errors: Record<string, string>
  isSubmitting: boolean
}

// Props dos componentes
export interface ProjectFormSectionProps {
  data: ProjectFormData
  updateData: (updates: Partial<ProjectFormData>) => void
  errors?: Record<string, string>
}

export interface StepNavigationProps {
  currentStep: FormStep
  onStepChange: (step: FormStep) => void
  canProceed: boolean
  isSubmitting: boolean
}
