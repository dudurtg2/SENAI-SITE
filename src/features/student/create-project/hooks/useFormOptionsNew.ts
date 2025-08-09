import { useFormData } from './useFormData'

export { useFormData } from './useFormData'

export const useFormOptions = () => {
  const {
    cursosDisponiveis,
    unidadesCurricularesOptions,
    loadingUCs,
    getTurmasByCurso,
    getCursoLabel,
    getUCLabel,
    getDefaultCourse,
    userInfo
  } = useFormData()

  return {
    // Dados das opções
    cursos: cursosDisponiveis,
    unidadesCurriculares: unidadesCurricularesOptions,
    
    // Estados de loading
    isLoadingUCs: loadingUCs,
    
    // Funções utilitárias
    getTurmasByCurso,
    getCursoLabel,
    getUCLabel,
    getDefaultCourse,
    
    // Informações do usuário
    userInfo
  }
}
