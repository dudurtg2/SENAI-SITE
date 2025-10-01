import axiosInstance from '../Services/axios-instance'
import type {
  LoginMutation,
  RegisterMutation,
  CreateAlunoMutation,
  CreateEnderecoMutation,
  CreateProfessorMutation,
  CreateUnidadeCurricularMutation,
  CreateProjetoMutation,
  CreateDisciplinaMutation,
  CreateDisciplinaProjetoMutation,
  CreateProjetoAlunoMutation,
  CreateProjetoProfessorMutation,
  CreateEtapaProjetoMutation,
  CreateAnexoEtapaMutation
} from '../types/types-mutations'

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessTokenIntegrado')
  return {
    Authorization: `Bearer ${token}`
  }
}

export async function Login(payload: LoginMutation) {
  const response = await axiosInstance.post('/api/user/login', payload, {})
  return response.data
}

export async function Register(payload: RegisterMutation) {
  const response = await axiosInstance.post('/api/user/auth/register', payload, {})
  return response.data
}

// Aluno
export async function createAluno(payload: CreateAlunoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/alunos/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Endereço
export async function createEndereco(payload: CreateEnderecoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/endereco/create',
    payload
  )
  return response.data
}

// Professor
export async function createProfessor(payload: CreateProfessorMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/professor/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Unidade Curricular
export async function createUnidadeCurricular(
  payload: CreateUnidadeCurricularMutation
) {
  const response = await axiosInstance.post(
    '/api/v1/senai/unidadeCurricular/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto
export async function createProjeto(payload: CreateProjetoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/disciplina/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Disciplina
export async function createDisciplina(payload: CreateDisciplinaMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/disciplina/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Disciplina Projeto
export async function createDisciplinaProjeto(
  payload: CreateDisciplinaProjetoMutation
) {
  const response = await axiosInstance.post(
    '/api/v1/senai/disciplinaProjeto/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Aluno
export async function createProjetoAluno(payload: CreateProjetoAlunoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/projetoAluno/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Projeto Professor
export async function createProjetoProfessor(
  payload: CreateProjetoProfessorMutation
) {
  const response = await axiosInstance.post(
    '/api/v1/senai/projetoProfessor/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Etapa Projeto
export async function createEtapaProjeto(payload: CreateEtapaProjetoMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/etapasProjeto/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}

// Anexo Etapa
export async function createAnexoEtapa(payload: CreateAnexoEtapaMutation) {
  const response = await axiosInstance.post(
    '/api/v1/senai/AnexoEtapa/create',
    payload,
    {
      headers: getAuthHeaders()
    }
  )
  return response.data
}
