// Exemplo de como usar o GoogleMapEmbed no Footer.tsx
// Substitua a div do mapa por:

import GoogleMapEmbed from '../../../components/GoogleMapEmbed'

// Na seção do mapa:
<div className="md:col-span-2 h-72 md:h-auto rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg">
  <GoogleMapEmbed
    address="Av. Eduardo Fróes da Mota, 5000 - Campo Limpo, Feira de Santana - BA, 44032-002"
    className="w-full h-full"
  />
</div>

// Para ativar o Google Maps real:
// 1. Crie um arquivo .env na raiz do projeto
// 2. Adicione: VITE_GOOGLE_MAPS_API_KEY=sua_chave_aqui
// 3. Configure a API key no Google Cloud Console
