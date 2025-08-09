import axiosInstance from '../services/axios-instance'

// Interfaces para usuários
export interface User {
  uuid: string
  nome: string
  email: string
  tipo: 'PROFESSOR' | 'ALUNO'
  status: string
  criadoEm: string
  atualizadoEm: string
}

// Interfaces para projetos
export interface Project {
  uuid: string
  titulo: string
  descricao: string
  status: string
  // ... outros campos
}

// API de usuários
export const userApi = {
  // Buscar perfil do usuário
  getProfile: async (): Promise<User> => {
    console.log('👤 Buscando perfil do usuário...')
    
    try {
      const response = await axiosInstance.get('/api/user/profile')
      console.log('✅ Perfil encontrado:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao buscar perfil:', error.response?.data || error.message)
      throw new Error('Erro ao carregar perfil do usuário')
    }
  },

  // Atualizar perfil
  updateProfile: async (data: Partial<User>): Promise<User> => {
    console.log('📝 Atualizando perfil:', data)
    
    try {
      const response = await axiosInstance.put('/api/user/profile', data)
      console.log('✅ Perfil atualizado:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao atualizar perfil:', error.response?.data || error.message)
      throw new Error('Erro ao atualizar perfil')
    }
  }
}

// API de projetos
export const projectApi = {
  // Listar todos os projetos
  getAll: async (): Promise<Project[]> => {
    console.log('📋 Buscando todos os projetos...')
    
    try {
      const response = await axiosInstance.get('/api/projeto/findAll')
      console.log('✅ Projetos encontrados:', response.data?.length || 0)
      return response.data || []
    } catch (error: any) {
      console.error('❌ Erro ao buscar projetos:', error.response?.data || error.message)
      throw new Error('Erro ao carregar projetos')
    }
  },

  // Buscar projeto por ID
  getById: async (id: string): Promise<Project> => {
    console.log('🔍 Buscando projeto:', id)
    
    try {
      const response = await axiosInstance.get(`/api/projeto/${id}`)
      console.log('✅ Projeto encontrado:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao buscar projeto:', error.response?.data || error.message)
      
      if (error.response?.status === 404) {
        throw new Error('Projeto não encontrado')
      }
      throw new Error('Erro ao carregar projeto')
    }
  },

  // Criar novo projeto
  create: async (data: Partial<Project>): Promise<Project> => {
    console.log('📝 Criando projeto:', data)
    
    try {
      const response = await axiosInstance.post('/api/projeto', data)
      console.log('✅ Projeto criado:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao criar projeto:', error.response?.data || error.message)
      throw new Error('Erro ao criar projeto')
    }
  },

  // Atualizar projeto
  update: async (id: string, data: Partial<Project>): Promise<Project> => {
    console.log('📝 Atualizando projeto:', id, data)
    
    try {
      const response = await axiosInstance.put(`/api/projeto/${id}`, data)
      console.log('✅ Projeto atualizado:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao atualizar projeto:', error.response?.data || error.message)
      throw new Error('Erro ao atualizar projeto')
    }
  },

  // Deletar projeto
  delete: async (id: string): Promise<void> => {
    console.log('🗑️ Deletando projeto:', id)
    
    try {
      await axiosInstance.delete(`/api/projeto/${id}`)
      console.log('✅ Projeto deletado')
    } catch (error: any) {
      console.error('❌ Erro ao deletar projeto:', error.response?.data || error.message)
      throw new Error('Erro ao deletar projeto')
    }
  }
}
