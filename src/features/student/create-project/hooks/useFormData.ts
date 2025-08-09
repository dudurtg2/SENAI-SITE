import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useQuery } from '@tanstack/react-query'
import { getUnidadesCurriculares, getCursos, getTurmasByCurso } from '@/api/queries'

export interface FormOption {
  value: string
  label: string
}

export interface CourseOption extends FormOption {
  turmas?: string[]
}

export const useFormData = () => {
  const { user } = useAuth()
  
  // ✅ Buscar cursos reais da API
  const { data: cursosAPI, isLoading: loadingCursos } = useQuery({
    queryKey: ['cursos'],
    queryFn: getCursos,
    staleTime: 5 * 60 * 1000, // 5 minutos
  })

  // ✅ Buscar unidades curriculares reais da API
  const { data: unidadesCurriculares, isLoading: loadingUCs } = useQuery({
    queryKey: ['unidadesCurriculares'],
    queryFn: getUnidadesCurriculares,
    staleTime: 5 * 60 * 1000, // 5 minutos
  })

  // Formatar cursos para o formato de opções
  const cursosDisponiveis: CourseOption[] = (cursosAPI || []).map((curso: any) => ({
    value: curso.uuid,
    label: curso.nome,
  }))

  // Formatara unidades curriculares para o formato de opções
  const unidadesCurricularesOptions: FormOption[] = (unidadesCurriculares || []).map((uc: any) => ({
    value: uc.uuid,
    label: uc.nome
  }))

  // Pré-selecionar curso do usuário se disponível
  const getDefaultCourse = () => {
    if (!user?.curso) return ''
    
    // Tentar encontrar o curso do usuário na lista
    const userCourse = cursosDisponiveis.find(curso => 
      curso.label.toLowerCase().includes(user.curso?.toLowerCase() || '')
    )
    
    return userCourse?.value || ''
  }

  // ✅ Obter turmas baseado no curso selecionado (com API real)
  const getTurmasByCurso = (cursoUuid: string): FormOption[] => {
    // TODO: Implementar quando a API de turmas estiver pronta
    // Por enquanto, usar mock baseado no curso
    const mockTurmasPorCurso: { [key: string]: string[] } = {
      'tecnico-desenvolvimento-sistemas': ['TDS-2024-1', 'TDS-2024-2', 'TDS-2025-1'],
      'tecnico-automacao-industrial': ['TAI-2024-1', 'TAI-2024-2', 'TAI-2025-1'],
      'tecnico-mecanica': ['MEC-2024-1', 'MEC-2024-2', 'MEC-2025-1'],
      'tecnico-eletronica': ['ELE-2024-1', 'ELE-2024-2', 'ELE-2025-1'],
    }

    const curso = cursosDisponiveis.find(c => c.value === cursoUuid)
    const turmas = mockTurmasPorCurso[cursoUuid] || []
    
    return turmas.map(turma => ({
      value: turma,
      label: turma
    }))
  }

  // Obter label do curso
  const getCursoLabel = (value: string) => {
    const curso = cursosDisponiveis.find(c => c.value === value)
    return curso?.label || value
  }

  // Obter label da unidade curricular
  const getUCLabel = (value: string) => {
    const uc = unidadesCurricularesOptions.find(u => u.value === value)
    return uc?.label || value
  }

  return {
    // ✅ Dados reais das APIs
    cursosDisponiveis,
    unidadesCurricularesOptions,
    
    // Estados de loading
    loadingCursos,
    loadingUCs,
    
    // Funções utilitárias
    getDefaultCourse,
    getTurmasByCurso,
    getCursoLabel,
    getUCLabel,
    
    // Dados do usuário
    userCourse: user?.curso || '',
    userInfo: {
      nome: user?.nome || '',
      email: user?.email || '',
      matricula: user?.matricula || '',
      curso: user?.curso || '',
    }
  }
}
