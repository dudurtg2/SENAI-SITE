import React from 'react'
import { useProjetos } from '../hooks/use-queries'

const ApiTestComponent = () => {
  const { data: projects, isLoading, error } = useProjetos()

  console.log('API Test - Loading:', isLoading)
  console.log('API Test - Error:', error)
  console.log('API Test - Data:', projects)

  if (isLoading) {
    return <div className="p-4 bg-yellow-100 text-yellow-800">🔄 Carregando dados da API...</div>
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-800">
        <h3>❌ Erro na API:</h3>
        <p>{error.message}</p>
        <details className="mt-2">
          <summary>Ver detalhes do erro</summary>
          <pre className="text-xs mt-2">{JSON.stringify(error, null, 2)}</pre>
        </details>
      </div>
    )
  }

  if (projects) {
    return (
      <div className="p-4 bg-green-100 text-green-800">
        <h3>✅ API conectada com sucesso!</h3>
        <p>Encontrados {projects.length} projetos</p>
        <details className="mt-2">
          <summary>Ver dados</summary>
          <pre className="text-xs mt-2">{JSON.stringify(projects.slice(0, 2), null, 2)}</pre>
        </details>
      </div>
    )
  }

  return <div className="p-4 bg-gray-100">Sem dados</div>
}

export default ApiTestComponent
