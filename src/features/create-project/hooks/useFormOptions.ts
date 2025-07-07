import { useState, useEffect } from 'react'
import { CourseOption, ClassOption, UnidadeCurricularOption } from '../types'

// Mock data - em produção, viria da API
const mockCursos: CourseOption[] = [
  { value: 'desenvolvimento-sistemas', label: 'Técnico em Desenvolvimento de Sistemas' },
  { value: 'redes-computadores', label: 'Técnico em Redes de Computadores' },
  { value: 'eletronica', label: 'Técnico em Eletrônica' },
  { value: 'automacao-industrial', label: 'Técnico em Automação Industrial' },
  { value: 'mecanica', label: 'Técnico em Mecânica' }
]

const mockTurmas: ClassOption[] = [
  { value: 'ds-2024-1', label: 'DS 2024.1', courseId: 'desenvolvimento-sistemas' },
  { value: 'ds-2024-2', label: 'DS 2024.2', courseId: 'desenvolvimento-sistemas' },
  { value: 'rc-2024-1', label: 'RC 2024.1', courseId: 'redes-computadores' },
  { value: 'rc-2024-2', label: 'RC 2024.2', courseId: 'redes-computadores' },
  { value: 'ele-2024-1', label: 'ELE 2024.1', courseId: 'eletronica' }
]

const mockUnidadesCurriculares: UnidadeCurricularOption[] = [
  { 
    value: 'programacao-web', 
    label: 'Programação Web',
    description: 'Desenvolvimento de aplicações web'
  },
  { 
    value: 'banco-dados', 
    label: 'Banco de Dados',
    description: 'Modelagem e desenvolvimento de banco de dados'
  },
  { 
    value: 'projeto-integrador', 
    label: 'Projeto Integrador',
    description: 'Desenvolvimento de projeto integrador'
  },
  { 
    value: 'mobile', 
    label: 'Desenvolvimento Mobile',
    description: 'Desenvolvimento de aplicações móveis'
  },
  { 
    value: 'sistemas-embarcados', 
    label: 'Sistemas Embarcados',
    description: 'Desenvolvimento para sistemas embarcados'
  }
]

export const useFormOptions = () => {
  const [cursos] = useState<CourseOption[]>(mockCursos)
  const [todasTurmas] = useState<ClassOption[]>(mockTurmas)
  const [unidadesCurriculares] = useState<UnidadeCurricularOption[]>(mockUnidadesCurriculares)
  
  // Filtrar turmas baseado no curso selecionado
  const getTurmasByCurso = (cursoId: string): ClassOption[] => {
    return todasTurmas.filter(turma => turma.courseId === cursoId)
  }

  return {
    cursos,
    unidadesCurriculares,
    getTurmasByCurso,
    
    // Funções auxiliares
    getCursoLabel: (value: string) => cursos.find(c => c.value === value)?.label || '',
    getTurmaLabel: (value: string) => todasTurmas.find(t => t.value === value)?.label || '',
    getUnidadeLabel: (value: string) => unidadesCurriculares.find(u => u.value === value)?.label || ''
  }
}
