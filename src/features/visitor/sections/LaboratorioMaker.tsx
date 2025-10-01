import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img3 from '@/assets/images/Imagens/003-Lab Maker.jpg'

const LaboratorioMaker: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img3})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
              Laboratório Maker
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Onde ideias ganham vida através da tecnologia e inovação
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Seu Espaço de Criação e Prototipagem
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O Laboratório Maker é um ambiente totalmente equipado para transformar 
                suas ideias em protótipos funcionais. Com tecnologia de ponta e 
                ferramentas profissionais, oferecemos tudo o que você precisa para 
                criar, testar e aperfeiçoar seus projetos.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nosso laboratório combina fabricação digital, eletrônica, programação 
                e design, proporcionando um ambiente multidisciplinar ideal para 
                projetos inovadores e aprendizado prático.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fabricação Digital</h3>
                <p className="text-gray-600">
                  Impressoras 3D, cortadoras laser, fresadoras CNC e 
                  equipamentos de prototipagem rápida.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eletrônica Avançada</h3>
                <p className="text-gray-600">
                  Bancadas completas com osciloscópios, multímetros, 
                  soldadoras e componentes eletrônicos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Microcontroladores</h3>
                <p className="text-gray-600">
                  Arduino, Raspberry Pi, ESP32 e kits de desenvolvimento 
                  para projetos de IoT e automação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Equipamentos Disponíveis
          </h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Coluna 1 */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6-4H6V8h12v7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Impressoras 3D</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Prototipagem rápida em diversos materiais
                    </p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      <li>→ PLA, ABS, PETG</li>
                      <li>→ Resina fotopolimerizável</li>
                      <li>→ Filamentos flexíveis</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Cortadora Laser</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Corte e gravação de precisão
                    </p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      <li>→ Acrílico e MDF</li>
                      <li>→ Tecidos e couro</li>
                      <li>→ Gravação em metal</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zM14.5 19l1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5l.62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Fresadora CNC</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Usinagem de precisão para peças complexas
                    </p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      <li>→ Alumínio e ligas</li>
                      <li>→ Madeira e MDF</li>
                      <li>→ Placas de circuito</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Bancada Eletrônica</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Equipamentos profissionais de eletrônica
                    </p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      <li>→ Osciloscópios digitais</li>
                      <li>→ Fontes reguláveis</li>
                      <li>→ Analisadores de espectro</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Estações de Trabalho</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Computadores de alta performance
                    </p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      <li>→ Software CAD/CAM</li>
                      <li>→ Simulação eletrônica</li>
                      <li>→ Ambientes de desenvolvimento</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      <circle cx="9" cy="9" r="1.5"/>
                      <circle cx="15" cy="9" r="1.5"/>
                      <path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Kits de Robótica</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Plataformas para robôs e automação
                    </p>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      <li>→ Arduino e Raspberry Pi</li>
                      <li>→ Sensores e atuadores</li>
                      <li>→ Kits educacionais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </SectionLayout>
  )
}

export default LaboratorioMaker