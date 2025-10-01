import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img1 from '@/assets/images/Imagens/001-Comunidade Maker.jpg'

const VitrineTecnologica: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
              Vitrine Tecnológica
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Transformando ideias em soluções que impactam o mundo
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
                Inovação que Transforma Realidades
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa Vitrine Tecnológica representa o que há de mais avançado em 
                desenvolvimento tecnológico no SENAI. Cada projeto é uma oportunidade 
                de aplicar conhecimentos teóricos em soluções práticas que atendem 
                demandas reais da indústria e sociedade.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trabalhamos com metodologias ágeis, design thinking e prototipagem 
                rápida para desenvolver soluções que não apenas funcionam, mas que 
                também geram impacto positivo e sustentável.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">IoT Industrial</h3>
                <p className="text-gray-600">
                  Sistemas inteligentes para monitoramento e controle 
                  de processos industriais em tempo real.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Automação 4.0</h3>
                <p className="text-gray-600">
                  Soluções avançadas integrando IA, machine learning 
                  e robótica para a indústria do futuro.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustentabilidade</h3>
                <p className="text-gray-600">
                  Projetos focados em economia circular, energia 
                  renovável e tecnologias limpas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça as soluções inovadoras desenvolvidas por nossos alunos e instrutores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-6xl">🏭</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">Destaque</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Sistema de Monitoramento Industrial
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Plataforma IoT para monitoramento em tempo real de máquinas industriais, 
                  com análise preditiva de falhas e otimização de manutenção.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">IoT</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">Machine Learning</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">Python</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group-hover:gap-2 gap-1">
                    Ver Detalhes 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white text-6xl">🌱</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">Sustentável</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  Horta Inteligente Automatizada
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Sistema automatizado para cultivo hidropônico com controle de pH, 
                  nutrientes e iluminação via inteligência artificial.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Arduino</span>
                  <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Sensores</span>
                  <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium">Sustentabilidade</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center group-hover:gap-2 gap-1">
                    Ver Detalhes 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <span className="text-white text-6xl">🤖</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">Inovação</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  Robô Assistente para Soldagem
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Braço robótico colaborativo para assistir soldadores em tarefas 
                  repetitivas, aumentando precisão e segurança.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">Robótica</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">ROS</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">Soldagem</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center group-hover:gap-2 gap-1">
                    Ver Detalhes 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white text-6xl">⚡</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">Energia</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  Carregador Solar Inteligente
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Estação de carregamento solar para dispositivos móveis com 
                  rastreamento solar automático e armazenamento de energia.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">Energia Solar</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">Eletrônica</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">Sustentável</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center group-hover:gap-2 gap-1">
                    Ver Detalhes 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Projeto 5 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <span className="text-white text-6xl">📱</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">Mobile</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  App de Gestão de Energia
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Aplicativo mobile para monitoramento e otimização do consumo 
                  energético residencial e empresarial.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full font-medium">React Native</span>
                  <span className="bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full font-medium">IoT</span>
                  <span className="bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full font-medium">Eficiência</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center group-hover:gap-2 gap-1">
                    Ver Detalhes 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Projeto 6 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <span className="text-white text-6xl">🏥</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">Saúde</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  Monitor de Sinais Vitais IoT
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Dispositivo wearable para monitoramento contínuo de sinais vitais 
                  com alertas em tempo real para profissionais de saúde.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">Saúde</span>
                  <span className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">Wearable</span>
                  <span className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">Bluetooth</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors flex items-center group-hover:gap-2 gap-1">
                    Ver Detalhes 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
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

export default VitrineTecnologica