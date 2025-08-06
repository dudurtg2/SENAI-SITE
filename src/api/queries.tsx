import axiosInstance from '../services/axios-instance'
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

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessTokenIntegrado')
  return token ? {
    Authorization: `Bearer ${token}`
  } : {}
}

export async function getDashboard() {
  const token = localStorage.getItem('accessTokenIntegrado')
  const response = await axiosInstance.get('/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export async function getNotifications(params?: {
  startDate?: string
  endDate?: string
}) {
  try {
    // Busca notificações reais do backend
    const response = await axiosInstance.get('/api/v1/senai/notificacoes', {
      headers: getAuthHeaders(),
      params: params || {}
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar notificações:', error)
    // Retorna array vazio em caso de erro
    return { data: [] }
  }
}

export async function getCalendarEvents(params?: {
  month?: number
  year?: number
  type?: string
}) {
  try {
    // Busca eventos reais do backend
    const response = await axiosInstance.get('/api/v1/senai/eventos', {
      headers: getAuthHeaders(),
      params: params || {}
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar eventos do calendário:', error)
    // Retorna array vazio em caso de erro
    return { data: [] }
  }
}

export async function getCommunityData() {
  try {
    // Busca dados da comunidade do backend
    const response = await axiosInstance.get('/api/v1/senai/comunidade', {
      headers: getAuthHeaders()
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados da comunidade:', error)
    // Retorna estrutura vazia em caso de erro
    return {
      featuredProjects: [],
      recentDiscussions: [],
      activeMembers: []
    }
  }
}

// Novas queries baseadas na API SENAI

// Alunos
export async function getAlunos() {
  const response = await axiosInstance.get('/api/v1/senai/alunos/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Endereços
export async function getEnderecos() {
  const response = await axiosInstance.get('/api/v1/senai/endereco/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Professores
export async function getProfessores() {
  const response = await axiosInstance.get('/api/v1/senai/professor/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Unidades Curriculares
export async function getUnidadesCurriculares() {
  const response = await axiosInstance.get(
    '/api/v1/senai/unidadeCurricular/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projetos
export async function getProjetos() {
  const response = await axiosInstance.get('/api/v1/senai/projeto/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Disciplinas
export async function getDisciplinas() {
  const response = await axiosInstance.get('/api/v1/senai/disciplina/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Disciplina Projetos
export async function getDisciplinaProjetos() {
  const response = await axiosInstance.get(
    '/api/v1/senai/disciplinaProjeto/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Alunos
export async function getProjetoAlunos() {
  const response = await axiosInstance.get(
    '/api/v1/senai/projetoAluno/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Professores
export async function getProjetoProfessores() {
  const response = await axiosInstance.get(
    '/api/v1/senai/projetoProfessor/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Etapas Projetos
export async function getEtapasProjetos() {
  const response = await axiosInstance.get(
    '/api/v1/senai/etapasProjeto/findAll',
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Anexos Etapas
export async function getAnexosEtapas() {
  const response = await axiosInstance.get('/api/v1/senai/AnexoEtapa/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

// Avaliações
export async function getAvaliacoes() {
  try {
    const response = await axiosInstance.get('/api/v1/senai/avaliacoes/findAll', {
      headers: getAuthHeaders()
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error)
    return []
  }
}

// Cursos
export async function getCursos() {
  const response = await axiosInstance.get('/api/v1/senai/curso/findAtivos', {
    headers: getAuthHeaders()
  })
  return response.data
}

export async function getCursosByCodigo(codigo: string) {
  const response = await axiosInstance.get(`/api/v1/senai/curso/findByCodigo/${codigo}`, {
    headers: getAuthHeaders()
  })
  return response.data
}

// Turmas  
export async function getTurmas() {
  const response = await axiosInstance.get('/api/v1/senai/turma/findAll', {
    headers: getAuthHeaders()
  })
  return response.data
}

export async function getTurmasByCurso(cursoUuid: string) {
  const response = await axiosInstance.get(`/api/v1/senai/turma/findByCurso/${cursoUuid}`, {
    headers: getAuthHeaders()
  })
  return response.data
}
