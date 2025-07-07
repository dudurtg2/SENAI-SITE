import React, { useState } from 'react'
import { Upload, Github, Code, Eye, EyeOff, File, ExternalLink } from 'lucide-react'

interface CodeManagerProps {
  codigo?: File | null
  codigoVisibilidade: 'Público' | 'Privado'
  onCodeUpload: (file: File | null) => void
  onVisibilityChange: (visibility: 'Público' | 'Privado') => void
  error?: string
}

const CodeManager: React.FC<CodeManagerProps> = ({
  codigo,
  codigoVisibilidade,
  onCodeUpload,
  onVisibilityChange,
  error
}) => {
  const [dragActive, setDragActive] = useState(false)
  const [repositoryUrl, setRepositoryUrl] = useState('')

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onCodeUpload(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onCodeUpload(file)
  }

  const removeFile = () => {
    onCodeUpload(null)
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Código do Projeto
        </label>
        
        {/* Opções de como adicionar código */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Como adicionar seu código:</h4>
          <div className="space-y-1 text-sm text-blue-700">
            <p>• <strong>Arquivo ZIP:</strong> Comprima sua pasta do projeto e faça upload</p>
            <p>• <strong>Repositório Git:</strong> Cole o link do seu repositório GitHub/GitLab</p>
            <p>• <strong>Pasta compactada:</strong> Arquivos .zip, .rar, .7z são aceitos</p>
          </div>
        </div>

        {/* Input para URL do repositório */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            <Github className="inline w-4 h-4 mr-1" />
            Link do Repositório (opcional)
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              value={repositoryUrl}
              onChange={(e) => setRepositoryUrl(e.target.value)}
              placeholder="https://github.com/usuario/projeto"
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                title="Abrir repositório"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Upload de arquivo */}
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : codigo
              ? 'border-green-500 bg-green-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleFileChange}
            accept=".zip,.rar,.7z,.tar,.gz"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          {codigo ? (
            // Arquivo selecionado
            <div className="text-center">
              <File className="mx-auto h-12 w-12 text-green-500 mb-3" />
              <p className="text-sm font-medium text-green-800">{codigo.name}</p>
              <p className="text-xs text-green-600">{formatFileSize(codigo.size)}</p>
              <button
                type="button"
                onClick={removeFile}
                className="mt-2 text-red-500 hover:text-red-700 text-sm"
              >
                Remover arquivo
              </button>
            </div>
          ) : (
            // Estado vazio
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
              <p className="text-sm font-medium text-gray-700">
                Clique para selecionar ou arraste um arquivo
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Arquivos aceitos: ZIP, RAR, 7Z, TAR, GZ (máx. 50MB)
              </p>
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Configurações de visibilidade */}
      <div className="bg-white border rounded-lg p-4">
        <h4 className="font-medium mb-3 text-gray-700 flex items-center gap-2">
          <Code className="w-4 h-4" />
          Configurações do Código
        </h4>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Visibilidade do Código
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onVisibilityChange('Público')}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                  codigoVisibilidade === 'Público'
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm">Público</span>
              </button>
              <button
                type="button"
                onClick={() => onVisibilityChange('Privado')}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                  codigoVisibilidade === 'Privado'
                    ? 'bg-orange-100 border-orange-500 text-orange-700'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <EyeOff className="w-4 h-4" />
                <span className="text-sm">Privado</span>
              </button>
            </div>
          </div>

          {/* Explicação da visibilidade */}
          <div className="text-xs text-gray-600 p-3 bg-gray-50 rounded-lg">
            {codigoVisibilidade === 'Público' ? (
              <p>
                <strong>Público:</strong> O código será visível para outros usuários e poderá ser visualizado na página do projeto.
              </p>
            ) : (
              <p>
                <strong>Privado:</strong> O código será visível apenas para você, orientador e administradores.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeManager
