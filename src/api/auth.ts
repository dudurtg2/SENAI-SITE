import axiosInstance from '../services/axios-instance'
import { API_CONFIG } from './config'

// Interfaces para as requisições de autenticação
export interface LoginRequest {
  login: string
  senha: string
}

export interface RegisterRequest {
  login: string
  senha: string
  nome: string
  tipo: 'PROFESSOR' | 'ALUNO'
  aceiteTermos: boolean  // Campo para o aceite de termos
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  usuariosEntity: {
    uuid: string
    nome: string
    email: string
    tipo: 'PROFESSOR' | 'ALUNO'
    status: string
    // ... outros campos
  }
}

// API de autenticação
export const authApi = {
  // Login com email e senha
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    console.log('🔐 Fazendo login com:', { email: data.login, senha: '***' })
      try {
      const response = await axiosInstance.post(API_CONFIG.AUTH.LOGIN, data)
      console.log('✅ Login bem-sucedido:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro no login:', error.response?.data || error.message)
      
      // Melhorar mensagens de erro
      if (error.response?.status === 401) {
        throw new Error('Email ou senha incorretos. Verifique suas credenciais.')
      } else if (error.response?.status === 404) {
        throw new Error('Usuário não encontrado. Verifique o email informado.')
      } else if (error.response?.status === 500) {
        throw new Error('Erro interno do servidor. Tente novamente mais tarde.')
      } else if (error.response?.status === 403) {
        throw new Error('Conta inativa ou bloqueada. Entre em contato com o suporte.')
      } else {
        throw new Error(error.response?.data?.message || 'Erro ao fazer login. Tente novamente.')
      }
    }
  },  // Registro de novo usuário
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    console.log('📝 Registrando usuário:', { ...data, senha: '***' })
    
    // Preparar dados para o novo endpoint unificado
    const registerData = {
      login: data.login,
      senha: data.senha,
      nome: data.nome,
      tipo: data.tipo,
      aceiteTermos: data.aceiteTermos
      // Não enviar status - o backend define automaticamente como ATIVO
    }
    
    console.log('📝 Dados preparados para registro:', { ...registerData, senha: '***' })
    
      try {
      const response = await axiosInstance.post(API_CONFIG.AUTH.REGISTER, registerData)
      console.log('✅ Registro bem-sucedido:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro no registro:', error.response?.data || error.message)
        // Melhorar mensagens de erro
      if (error.response?.status === 409) {
        throw new Error('Este email já está cadastrado. Tente fazer login ou use outro email.')
      } else if (error.response?.status === 400) {
        const errorMsg = error.response?.data?.message || ''
        if (errorMsg.includes('termos') || errorMsg.includes('aceite')) {
          throw new Error('É obrigatório aceitar os termos de uso para se cadastrar.')
        }
        throw new Error('Dados inválidos. Verifique os campos e tente novamente.')
      } else if (error.response?.status === 500) {
        throw new Error('Erro interno do servidor. Tente novamente mais tarde.')
      } else {
        throw new Error(error.response?.data?.message || 'Erro ao criar conta. Tente novamente.')
      }
    }
  },

  // Verificar se o usuário está autenticado
  me: async (): Promise<AuthResponse['usuariosEntity']> => {
    console.log('👤 Verificando usuário autenticado...')
    
    try {
      const response = await axiosInstance.get('/api/user/me')
      console.log('✅ Usuário autenticado:', response.data)
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao verificar autenticação:', error.response?.data || error.message)
      throw new Error('Sessão expirada. Faça login novamente.')
    }
  },

  // Logout
  logout: async (): Promise<void> => {
    console.log('🚪 Fazendo logout...')
    
    try {
      await axiosInstance.post('/api/user/logout')
      console.log('✅ Logout bem-sucedido')
    } catch (error: any) {
      console.error('❌ Erro no logout:', error.response?.data || error.message)
      // Não lança erro para logout, apenas loga
    }
  },

  // Refresh token
  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    console.log('🔄 Renovando token...')
    
    try {
      const response = await axiosInstance.post('/api/user/refresh', { refreshToken })
      console.log('✅ Token renovado com sucesso')
      return response.data
    } catch (error: any) {
      console.error('❌ Erro ao renovar token:', error.response?.data || error.message)
      throw new Error('Sessão expirada. Faça login novamente.')
    }
  }
}
