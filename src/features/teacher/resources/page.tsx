import React from 'react'
import { FileText, Upload, Download, FolderOpen } from 'lucide-react'

const TeacherResources = () => {
  const resources = [
    {
      id: 1,
      name: 'Guia de Desenvolvimento React',
      type: 'PDF',
      size: '2.5 MB',
      uploadDate: '2025-06-01',
      downloads: 45
    },
    {
      id: 2,
      name: 'Template para Documentação',
      type: 'DOCX',
      size: '1.2 MB',
      uploadDate: '2025-05-28',
      downloads: 32
    },
    {
      id: 3,
      name: 'Slides - Introdução ao Node.js',
      type: 'PPTX',
      size: '5.8 MB',
      uploadDate: '2025-05-25',
      downloads: 67
    }
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recursos Didáticos</h1>
          <p className="text-gray-600 mt-2">Gerencie materiais e recursos para suas aulas</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Meus Recursos</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Upload className="h-4 w-4" />
                <span>Enviar Arquivo</span>
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((resource) => (
                <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-8 w-8 text-blue-500" />
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm">{resource.name}</h3>
                        <p className="text-xs text-gray-500">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>{resource.uploadDate}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">
                      <Download className="h-3 w-3" />
                      <span>Baixar</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                      <FolderOpen className="h-3 w-3" />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherResources
