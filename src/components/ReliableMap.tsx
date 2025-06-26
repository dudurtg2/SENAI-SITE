import React, { useState, useEffect } from 'react'

interface ReliableMapProps {
  width?: string
  height?: string
  className?: string
  longitude?: number
  latitude?: number
  address?: string
}

const ReliableMap: React.FC<ReliableMapProps> = ({
  width = '100%',
  height = '100%',
  className = '',
  longitude = -38.96928793668507,
  latitude = -12.230982686836782,
  address = 'SENAI Feira de Santana'
}) => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [useBackup, setUseBackup] = useState(false)
  const [loadTimeout, setLoadTimeout] = useState(false)

  // URL do OpenStreetMap via iframe - usando coordenadas corretas
  const osmIframeUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.005}%2C${latitude-0.005}%2C${longitude+0.005}%2C${latitude+0.005}&layer=mapnik&marker=${latitude}%2C${longitude}`

  // Fallback visual melhorado caso o iframe não carregue
  const BackupMap = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50 relative flex items-center justify-center">
      {/* Grid de fundo simulando mapa */}
      <div className="absolute inset-0 opacity-10">
        {/* Linhas horizontais */}
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className={`absolute w-full h-px bg-gray-400`} style={{top: `${(i + 1) * 12.5}%`}}></div>
        ))}
        {/* Linhas verticais */}
        {[...Array(8)].map((_, i) => (
          <div key={`v-${i}`} className={`absolute h-full w-px bg-gray-400`} style={{left: `${(i + 1) * 12.5}%`}}></div>
        ))}
      </div>
      
      {/* Elementos visuais do mapa */}
      <div className="absolute inset-0 opacity-20">
        {/* Ruas principais */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gray-500 transform rotate-12"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-500 transform -rotate-6"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gray-500 transform rotate-3"></div>
        <div className="absolute left-1/4 top-0 w-1 h-full bg-gray-500 transform rotate-12"></div>
        <div className="absolute left-3/4 top-0 w-1 h-full bg-gray-500 transform -rotate-6"></div>
        
        {/* Quadras e construções */}
        <div className="absolute top-1/4 left-1/4 w-8 h-6 bg-gray-400 opacity-50 rounded-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-8 bg-gray-400 opacity-40 rounded-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-6 bg-gray-400 opacity-50 rounded-sm"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-4 bg-gray-400 opacity-40 rounded-sm"></div>
      </div>
      
      {/* Marcador principal do SENAI - centralizado e destacado */}
      <div className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Pin do mapa com animação sutil */}
          <div className="animate-bounce">
            <svg className="w-16 h-16 text-red-500 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          {/* Label do SENAI melhorado */}
          <div className="mt-2 bg-white px-4 py-2 rounded-lg shadow-lg border-2 border-red-200">
            <div className="text-center">
              <span className="text-sm font-bold text-gray-800 block">{address}</span>
              <span className="text-xs text-gray-600">{latitude.toFixed(4)}, {longitude.toFixed(4)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge de backup */}
      <div className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-lg px-3 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Localização</span>
        </div>
      </div>
      
      {/* Informação sobre backup */}
      <div className="absolute top-4 left-4 bg-blue-100 border border-blue-400 rounded-lg px-3 py-2">
        <span className="text-xs text-blue-800 font-medium">🗺️ Mapa Visual</span>
      </div>
    </div>
  )

  // Gerencia o carregamento do mapa com timeout mais inteligente
  useEffect(() => {
    // Força o backup em ambientes que bloqueiam iframes externos
    const isRestrictedEnvironment = () => {
      try {
        // Tenta detectar se estamos em um ambiente restrito
        return window.location.protocol === 'file:' || 
               window.self !== window.top ||
               !navigator.onLine
      } catch {
        return true
      }
    }

    // Se ambiente restrito, usa backup imediatamente
    if (isRestrictedEnvironment()) {
      console.log('🗺️ Ambiente restrito detectado, usando mapa visual')
      setUseBackup(true)
      return
    }

    // Timer para backup se iframe não carregar
    const timer = setTimeout(() => {
      if (!mapLoaded) {
        console.log('🗺️ Timeout do iframe, usando mapa visual')
        setLoadTimeout(true)
        setUseBackup(true)
      }
    }, 4000) // 4 segundos para carregamento

    return () => clearTimeout(timer)
  }, [mapLoaded])

  // Se deve usar backup
  if (useBackup) {
    return (
      <div className={`relative ${className}`} style={{ width, height }}>
        <BackupMap />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <div className="w-full h-full rounded-lg overflow-hidden">
        <iframe
          src={osmIframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title={`Mapa - ${address}`}
          className="w-full h-full"
          onLoad={() => {
            console.log('🗺️ Iframe do mapa carregado com sucesso')
            setMapLoaded(true)
          }}
          onError={() => {
            console.log('🗺️ Erro no iframe, usando mapa visual')
            setUseBackup(true)
          }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      
      {/* Loading indicator melhorado */}
      {!mapLoaded && !useBackup && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="relative mb-4">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <span className="text-sm text-gray-700 font-medium">Carregando mapa interativo...</span>
            <div className="text-xs text-gray-500 mt-1">OpenStreetMap - 100% gratuito</div>
          </div>
        </div>
      )}
      
      {/* Overlay com informações (só para iframe carregado) - movido para cima */}
      {mapLoaded && (
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl border">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-sm font-medium text-gray-800">{address}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReliableMap
