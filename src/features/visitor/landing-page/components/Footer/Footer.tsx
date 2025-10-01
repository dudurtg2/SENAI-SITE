import React from 'react'
import ReliableMap from '@/components/ReliableMap'

// Importar os novos ícones e logo
import senaiLogoPath from '@/assets/images/Imagens/022-Senai.png'
import instagramIconPath from '@/assets/images/Imagens/023-Instagram.png'

interface FooterProps {
  showLocation?: boolean // Propriedade para controlar se mostra a localização
}

const Footer: React.FC<FooterProps> = ({ showLocation = false }) => {
  // Endereço e informações de contato
  const address = {
    street: 'Av. Eduardo Fróes da Mota, nº 5.000',
    neighborhood: 'Campo Limpo - Feira de Santana/BA',
    cep: 'CEP: 44032-002'
  }

  const contacts = {
    phone1: '(75) 3229-9100',
    phone2: 'Call Center SENAI BAHIA: (71) 3534-8090',
    email: 'cacsenaifeira@fieb.org.br'
  }

  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-12">
        {/* Seção de Localização - Apenas na Home */}
        {showLocation && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-12">
            {/* Coluna do Mapa */}
            <div className="lg:col-span-2 h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <ReliableMap
                className="w-full h-full"
                longitude={-38.96928793668507}
                latitude={-12.230982686836782}
                address="SENAI Feira de Santana"
              />
            </div>
            
            {/* Coluna de Endereço e Contatos */}
            <div className="lg:col-span-3 flex flex-col justify-center h-full space-y-8">
              {/* Seção de Endereço */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Onde estamos
                </h2>
                <div className="space-y-2">
                  <p className="text-base text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {address.street}
                  </p>
                  <p className="text-base text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {address.neighborhood}
                  </p>
                  <p className="text-base text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {address.cep}
                  </p>
                </div>
              </div>
              
              {/* Seção de Contatos */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contatos
                </h2>
                <div className="space-y-3">
                  <p className="text-base text-gray-700 flex items-center hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {contacts.phone1}
                  </p>
                  <p className="text-base text-gray-700 flex items-center hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {contacts.phone2}
                  </p>
                  <p className="text-base text-gray-700 flex items-center hover:text-blue-600 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {contacts.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Divisor e Rodapé Inferior (Faixa escura) */}
      {/* Cor alterada para bg-slate-900 */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo SENAI - Tamanho aumentado */}
            <div className="mb-6 md:mb-0">
              {/* Aumentada a altura para h-16 */}
              <img src={senaiLogoPath} alt="Logo SENAI" className="h-25" />
            </div>

            {/* Links e Redes Sociais */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-8 sm:gap-12">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Atalhos</h3>
                <div className="space-y-2">
                  <a 
                    href="https://www.senaibahia.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors"
                  >
                    SENAI Bahia
                  </a>
                  <a 
                    href="http://www.senaicimatec.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors"
                  >
                    SENAI CIMATEC
                  </a>
                  <a 
                    href="https://www.fieb.org.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors"
                  >
                    FIEB
                  </a>
                  <a 
                    href="https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors"
                  >
                    Portal Educacional
                  </a>
                  <a 
                    href="https://senaiweb6.fieb.org.br/FrameHTML/web/app/Edu/PortalDoProfessor/#/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors"
                  >
                    Portal do Professor
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">
                  Nossas redes sociais:
                </h3>
                {/* Ícones de redes sociais - Usando as imagens fornecidas */}
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://www.instagram.com/mobiliza.senaifeira/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img
                      src={instagramIconPath}
                      alt="Instagram"
                      className="w-10 h-10 hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-900 text-white border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-2 md:mb-0">
              <p>© 2025 SENAI Feira de Santana. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
