import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import Cookies from 'js-cookie'

interface User {
  uuid: string
  nome: string
  email: string
  tipo: string
  telefonePessoal: string | null
  telefoneProfissional: string | null
  linkedin: string | null
  endereco: any | null
  status: string
  criadoEm: string
  atualizadoEm: string
  matricula: string | null
  curso: string | null
  especialidade: string | null
  departamento: string | null
}

interface AuthContextType {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  login: (data: any) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se há dados de autenticação salvos nos cookies
    const savedAccessToken = Cookies.get('accessToken')
    const savedRefreshToken = Cookies.get('refreshToken')
    const savedUser = Cookies.get('user')

    if (savedAccessToken && savedRefreshToken && savedUser) {
      try {
        setAccessToken(savedAccessToken)
        setRefreshToken(savedRefreshToken)
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
        // Limpar cookies corrompidos
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        Cookies.remove('user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = (data: any) => {
    const { accessToken, refreshToken, usuariosEntity } = data

    // Salvar nos cookies com expiração de 7 dias
    Cookies.set('accessToken', accessToken, { expires: 7 })
    Cookies.set('refreshToken', refreshToken, { expires: 7 })
    Cookies.set('user', JSON.stringify(usuariosEntity), { expires: 7 })

    // Salvar no localStorage também (backup)
    localStorage.setItem('accessTokenIntegrado', accessToken)

    // Atualizar estado
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    setUser(usuariosEntity)
  }

  const logout = () => {
    // Remover dos cookies
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    Cookies.remove('user')

    // Remover do localStorage
    localStorage.removeItem('accessTokenIntegrado')

    // Limpar estado
    setAccessToken(null)
    setRefreshToken(null)
    setUser(null)
  }

  const isAuthenticated = !!accessToken && !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        login,
        logout,
        isAuthenticated,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
