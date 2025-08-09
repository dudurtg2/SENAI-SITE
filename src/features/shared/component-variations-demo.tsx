import React from 'react'
import Header from '../../components/layout/header'
import Sidebar from '../../components/layout/sidebar'

const ComponentVariationsDemo = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
           Demonstração das Variações de Header e Sidebar
        </h1>
        
        <div className="space-y-12">
          {/* Explicação */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">📋 Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">👁️ Visitante</h3>
                <ul className="text-orange-700 space-y-1">
                  <li>• Ícone de olho laranja</li>
                  <li>• Botões de Login/Cadastro</li>
                  <li>• Sidebar com informações públicas</li>
                  <li>• Navegação limitada (só projetos)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🎓 Aluno</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Avatar azul</li>
                  <li>• Dados do aluno (RA, curso)</li>
                  <li>• Projetos pessoais</li>
                  <li>• Navegação completa</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">👨‍🏫 Professor</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Avatar verde</li>
                  <li>• Dados do professor</li>
                  <li>• Orientações e avaliações</li>
                  <li>• Ferramentas de ensino</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Status atual */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">📊 Status Atual do Sistema</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-green-800 font-semibold mb-2">✅ Implementado com Sucesso:</h3>
              <ul className="text-green-700 space-y-1">
                <li>• Header dinâmico baseado no tipo de usuário</li>
                <li>• Sidebar com 3 variações (visitante, aluno, professor)</li>
                <li>• Detecção automática do tipo via contexto de autenticação</li>
                <li>• CORS configurado e funcionando</li>
                <li>• Navegação adaptativa por permissões</li>
                <li>• Botões de ação contextuais</li>
              </ul>
            </div>
          </div>

          {/* Instruções para testar */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">🧪 Como Testar as Variações</h2>
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2">👁️ Modo Visitante (Atual)</h3>
                <p className="text-orange-700">Você está vendo esta variação agora! Navegue para a página principal para ver o header e sidebar de visitante.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">🎓 Modo Aluno</h3>
                <p className="text-blue-700">Faça login com uma conta de aluno para ver a interface personalizada com projetos pessoais e certificados.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">👨‍🏫 Modo Professor</h3>
                <p className="text-green-700">Faça login com uma conta de professor para ver as ferramentas de orientação e avaliação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentVariationsDemo
