import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Users, BookOpen, TrendingUp, UserPlus, LogIn, AlertCircle } from 'lucide-react'
import { useProjetos } from '@/hooks/use-queries'

const GuestDashboard = () => {
  const [corsError, setCorsError] = useState<string | null>(null)
  
  // Apenas marcar como visitante se não há autenticação
  useEffect(() => {
    // Verificar se realmente deveria estar aqui como visitante
    const hasAuth = document.cookie.includes('accessToken=')
    
    if (!hasAuth) {
      localStorage.setItem('isGuest', 'true')
    }
    
    return () => {
      // Só remover se não há autenticação
      if (!hasAuth) {
        localStorage.removeItem('isGuest')
      }
    }
  }, [])
  
  // Tentativa de buscar dados públicos para testar CORS
  const { data: projects, isLoading, error } = useProjetos()
  
  useEffect(() => {
    if (error) {
      console.log('Erro ao buscar projetos:', error)
      if (error.message.includes('CORS') || error.message.includes('Access-Control')) {
        setCorsError('Erro de CORS detectado ao tentar acessar dados públicos')
      }
    }
  }, [error])
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header para visitantes */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Bem-vindo ao Portal SENAI</h1>
              <p className="text-blue-100">Você está navegando como visitante</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Criar Conta
            </Link>
            <Link
              to="/login"              className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Fazer Login
            </Link>
          </div>
        </div>
        
        {corsError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <h3 className="text-red-800 font-medium">Erro de CORS Detectado</h3>
                <p className="text-red-600 text-sm">{corsError}</p>
              </div>
            </div>
          </div>
        )}

        {/* Estatísticas públicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Projetos Públicos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {isLoading ? '...' : projects ? projects.length : '150+'}
                </p>
                {projects && <p className="text-xs text-green-600">✓ API conectada</p>}
                {error && <p className="text-xs text-red-600">✗ Erro na API</p>}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Estudantes Ativos</p>
                <p className="text-2xl font-bold text-gray-900">2.500+</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Projetos Concluídos</p>
                <p className="text-2xl font-bold text-gray-900">450+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projetos em destaque */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Projetos em Destaque</h2>
            <Link 
              to="/app"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Ver todos →
            </Link>
          </div>          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            ) : projects && projects.length > 0 ? (
              // Dados reais da API
              projects.slice(0, 3).map((project, index) => (
                <div key={project.uuid || index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                      Projeto Real
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                      API Conectada
                    </span>
                  </div>
                </div>
              ))
            ) : (
              // Fallback para dados estáticos
              [
                {
                  title: "Sistema de Gestão Acadêmica",
                  description: "Plataforma completa para gerenciamento de cursos e estudantes",
                  tags: ["Java", "Spring Boot", "PostgreSQL"]
                },
                {
                  title: "App Mobile Biblioteca",
                  description: "Aplicativo para empréstimo e devolução de livros digitais",
                  tags: ["React Native", "Node.js", "MongoDB"]
                },
                {
                  title: "IoT para Automação Industrial",
                  description: "Sistema de monitoramento usando sensores e microcontroladores",
                  tags: ["Arduino", "Python", "MQTT"]
                }
              ].map((project, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded">
                      Dados Estáticos
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para começar sua jornada?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Junte-se à comunidade SENAI e tenha acesso completo a projetos, 
            recursos educacionais e oportunidades de networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Criar Conta Gratuita
            </Link>
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Eye className="h-5 w-5 mr-2" />
              Continuar como Visitante
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestDashboard
