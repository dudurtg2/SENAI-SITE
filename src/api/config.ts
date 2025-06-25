// Configurações centralizadas da API

export const API_CONFIG = {
  // URL base da API
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
    // Endpoints de autenticação
  AUTH: {
    LOGIN: '/api/user/login',
    REGISTER: '/api/user/auth/register',  // Novo endpoint unificado
    LOGOUT: '/api/user/logout',
    REFRESH: '/api/user/refresh',
    ME: '/api/user/me',
    PROFILE: '/api/user/profile',
    GOOGLE_OAUTH: '/oauth2/authorization/google',
    GOOGLE_CALLBACK: '/login/oauth2/code/google'
  },
  
  // Endpoints de projetos
  PROJECTS: {
    LIST: '/api/projeto/findAll',
    GET: (id: string) => `/api/projeto/${id}`,
    CREATE: '/api/projeto',
    UPDATE: (id: string) => `/api/projeto/${id}`,
    DELETE: (id: string) => `/api/projeto/${id}`
  },
  
  // Endpoints de disciplinas
  DISCIPLINES: {
    LIST: '/api/disciplina/findAll',
    GET: (id: string) => `/api/disciplina/${id}`
  },
  
  // Endpoints de unidades curriculares
  CURRICULUM_UNITS: {
    LIST: '/api/unidadeCurricular/findAll',
    GET: (id: string) => `/api/unidadeCurricular/${id}`
  },
  
  // Headers padrão
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  
  // Timeouts
  TIMEOUT: 30000, // 30 segundos
  
  // URLs públicas (não requerem autenticação)
  PUBLIC_ENDPOINTS: [
    '/api/projeto/findAll',
    '/api/disciplina/findAll',
    '/api/unidadeCurricular/findAll',
    '/demo/'
  ]
}

// URLs completas para conveniência
export const API_URLS = {
  // Autenticação
  LOGIN: `${API_CONFIG.BASE_URL}${API_CONFIG.AUTH.LOGIN}`,
  REGISTER: `${API_CONFIG.BASE_URL}${API_CONFIG.AUTH.REGISTER}`,
  GOOGLE_OAUTH: `${API_CONFIG.BASE_URL}${API_CONFIG.AUTH.GOOGLE_OAUTH}`,
  
  // Projetos
  PROJECTS_LIST: `${API_CONFIG.BASE_URL}${API_CONFIG.PROJECTS.LIST}`,
  
  // Disciplinas
  DISCIPLINES_LIST: `${API_CONFIG.BASE_URL}${API_CONFIG.DISCIPLINES.LIST}`,
  
  // Unidades curriculares
  CURRICULUM_UNITS_LIST: `${API_CONFIG.BASE_URL}${API_CONFIG.CURRICULUM_UNITS.LIST}`
}

// Função para verificar se um endpoint é público
export const isPublicEndpoint = (url: string): boolean => {
  return API_CONFIG.PUBLIC_ENDPOINTS.some(endpoint => url.includes(endpoint))
}

// Função para construir URL completa
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`
}
