import {
  getDashboard,
  getNotifications,
  getCalendarEvents,
  getAlunos,
  getEnderecos,
  getProfessores,
  getUnidadesCurriculares,
  getProjetos,
  getDisciplinas,
  getDisciplinaProjetos,
  getProjetoAlunos,
  getProjetoProfessores,
  getEtapasProjetos,
  getAnexosEtapas
} from '../api/queries'
import { useQueries, UseQueryOptions, useQuery } from '@tanstack/react-query'
import {
  Notification,
  CalendarEvent,
  Aluno,
  Endereco,
  Professor,
  UnidadeCurricular,
  Projeto,
  Disciplina,
  DisciplinaProjeto,
  ProjetoAluno,
  ProjetoProfessor,
  EtapaProjeto,
  AnexoEtapa
} from '../types/types-queries'

export function useDashboard(options?: UseQueryOptions<any, Error>) {
  return useQueries({
    queries: [
      {
        queryKey: ['getDashboard'],
        queryFn: () => getDashboard(),
        retry: 0,
        ...options
      }
    ]
  })  
}

export function useNotifications(
  params?: {
    startDate?: string
    endDate?: string
  },
  options?: UseQueryOptions<{ data: Notification[] }, Error>
) {
  return useQuery({
    queryKey: ['getNotifications', params],
    queryFn: () => getNotifications(params),
    retry: 1,
    ...options
  })
}

export function useCalendarEvents(
  params?: {
    month?: number
    year?: number
    type?: string
  },
  options?: UseQueryOptions<{ data: CalendarEvent[] }, Error>
) {
  return useQuery({
    queryKey: ['getCalendarEvents', params],
    queryFn: () => getCalendarEvents(params),
    retry: 1,
    ...options
  })
}

// Novos hooks baseados na API SENAI

// Alunos
export function useAlunos(options?: UseQueryOptions<Aluno[], Error>) {
  return useQuery({
    queryKey: ['getAlunos'],
    queryFn: () => getAlunos(),
    retry: 1,
    ...options
  })
}

// Endereços
export function useEnderecos(options?: UseQueryOptions<Endereco[], Error>) {
  return useQuery({
    queryKey: ['getEnderecos'],
    queryFn: () => getEnderecos(),
    retry: 1,
    ...options
  })
}

// Professores
export function useProfessores(options?: UseQueryOptions<Professor[], Error>) {
  return useQuery({
    queryKey: ['getProfessores'],
    queryFn: () => getProfessores(),
    retry: 1,
    ...options
  })
}

// Unidades Curriculares
export function useUnidadesCurriculares(
  options?: UseQueryOptions<UnidadeCurricular[], Error>
) {
  return useQuery({
    queryKey: ['getUnidadesCurriculares'],
    queryFn: () => getUnidadesCurriculares(),
    retry: 1,
    ...options
  })
}

// Projetos
export function useProjetos(options?: UseQueryOptions<Projeto[], Error>) {
  return useQuery({
    queryKey: ['getProjetos'],
    queryFn: () => getProjetos(),
    retry: 1,
    ...options
  })
}

// Disciplinas
export function useDisciplinas(options?: UseQueryOptions<Disciplina[], Error>) {
  return useQuery({
    queryKey: ['getDisciplinas'],
    queryFn: () => getDisciplinas(),
    retry: 1,
    ...options
  })
}

// Disciplina Projetos
export function useDisciplinaProjetos(
  options?: UseQueryOptions<DisciplinaProjeto[], Error>
) {
  return useQuery({
    queryKey: ['getDisciplinaProjetos'],
    queryFn: () => getDisciplinaProjetos(),
    retry: 1,
    ...options
  })
}

// Projeto Alunos
export function useProjetoAlunos(
  options?: UseQueryOptions<ProjetoAluno[], Error>
) {
  return useQuery({
    queryKey: ['getProjetoAlunos'],
    queryFn: () => getProjetoAlunos(),
    retry: 1,
    ...options
  })
}

// Projeto Professores
export function useProjetoProfessores(
  options?: UseQueryOptions<ProjetoProfessor[], Error>
) {
  return useQuery({
    queryKey: ['getProjetoProfessores'],
    queryFn: () => getProjetoProfessores(),
    retry: 1,
    ...options
  })
}

// Etapas Projetos
export function useEtapasProjetos(
  options?: UseQueryOptions<EtapaProjeto[], Error>
) {
  return useQuery({
    queryKey: ['getEtapasProjetos'],
    queryFn: () => getEtapasProjetos(),
    retry: 1,
    ...options
  })
}

// Anexos Etapas
export function useAnexosEtapas(
  options?: UseQueryOptions<AnexoEtapa[], Error>
) {
  return useQuery({
    queryKey: ['getAnexosEtapas'],
    queryFn: () => getAnexosEtapas(),
    retry: 1,
    ...options
  })
}
