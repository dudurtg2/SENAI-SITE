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
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Equipamentos Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🖨️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Impressoras 3D
              </h3>
              <p className="text-gray-600 mb-4">
                Múltiplas impressoras 3D para prototipagem rápida em diversos materiais.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• PLA, ABS, PETG</li>
                <li>• Resina fotopolimerizável</li>
                <li>• Filamentos flexíveis</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Cortadora Laser
              </h3>
              <p className="text-gray-600 mb-4">
                Corte e gravação de precisão em diversos materiais.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Acrílico e MDF</li>
                <li>• Tecidos e couro</li>
                <li>• Gravação em metal</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Fresadora CNC
              </h3>
              <p className="text-gray-600 mb-4">
                Usinagem de precisão para peças complexas e protótipos.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Alumínio e ligas</li>
                <li>• Madeira e MDF</li>
                <li>• Placas de circuito</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Bancada Eletrônica
              </h3>
              <p className="text-gray-600 mb-4">
                Equipamentos profissionais para desenvolvimento eletrônico.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Osciloscópios digitais</li>
                <li>• Fontes reguláveis</li>
                <li>• Analisadores de espectro</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Estações de Trabalho
              </h3>
              <p className="text-gray-600 mb-4">
                Computadores de alta performance para design e simulação.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Software CAD/CAM</li>
                <li>• Simulação eletrônica</li>
                <li>• Ambientes de desenvolvimento</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Kits de Robótica
              </h3>
              <p className="text-gray-600 mb-4">
                Plataformas completas para desenvolvimento de robôs e automação.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Arduino e Raspberry Pi</li>
                <li>• Sensores e atuadores</li>
                <li>• Kits educacionais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Reserve Seu Horário no Lab
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Transforme suas ideias em realidade com nossos equipamentos de ponta
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
            Agendar Horário
          </button>
        </div>
      </section>
      </div>
    </SectionLayout>
  )
}

export default LaboratorioMaker