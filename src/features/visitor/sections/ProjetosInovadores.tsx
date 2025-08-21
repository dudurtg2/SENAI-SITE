import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img4 from '@/assets/images/Imagens/004-Reproducao de Projetos.jpg'

const ProjetosInovadores: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img4})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
              Projetos Inovadores
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
                Nossos Projetos Inovadores representam o que há de mais avançado em 
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sistema de Monitoramento Industrial
              </h3>
              <p className="text-gray-600 mb-4">
                Plataforma IoT para monitoramento em tempo real de máquinas industriais, 
                com análise preditiva de falhas e otimização de manutenção.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">IoT</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
              </div>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Ver Projeto →
              </button>
            </div>

            {/* Projeto 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Horta Inteligente Automatizada
              </h3>
              <p className="text-gray-600 mb-4">
                Sistema automatizado para cultivo hidropônico com controle de pH, 
                nutrientes e iluminação via inteligência artificial.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Arduino</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Sensores</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Sustentabilidade</span>
              </div>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Ver Projeto →
              </button>
            </div>

            {/* Projeto 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Robô Assistente para Soldagem
              </h3>
              <p className="text-gray-600 mb-4">
                Braço robótico colaborativo para assistir soldadores em tarefas 
                repetitivas, aumentando precisão e segurança.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Robótica</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">ROS</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Soldagem</span>
              </div>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Ver Projeto →
              </button>
            </div>

            {/* Projeto 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Carregador Solar Inteligente
              </h3>
              <p className="text-gray-600 mb-4">
                Estação de carregamento solar para dispositivos móveis com 
                rastreamento solar automático e armazenamento de energia.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Energia Solar</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Eletrônica</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Sustentável</span>
              </div>
              <button className="text-orange-600 font-semibold hover:text-orange-800 transition-colors">
                Ver Projeto →
              </button>
            </div>

            {/* Projeto 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                App de Gestão de Energia
              </h3>
              <p className="text-gray-600 mb-4">
                Aplicativo mobile para monitoramento e otimização do consumo 
                energético residencial e empresarial.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">React Native</span>
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">IoT</span>
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Eficiência</span>
              </div>
              <button className="text-teal-600 font-semibold hover:text-teal-800 transition-colors">
                Ver Projeto →
              </button>
            </div>

            {/* Projeto 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Monitor de Sinais Vitais IoT
              </h3>
              <p className="text-gray-600 mb-4">
                Dispositivo wearable para monitoramento contínuo de sinais vitais 
                com alertas em tempo real para profissionais de saúde.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Saúde</span>
                <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Wearable</span>
                <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Bluetooth</span>
              </div>
              <button className="text-pink-600 font-semibold hover:text-pink-800 transition-colors">
                Ver Projeto →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Tem uma Ideia Inovadora?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Junte-se à nossa equipe e transforme sua ideia em um projeto real
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300">
            Propor Projeto
          </button>
        </div>
      </section>
      </div>
    </SectionLayout>
  )
}

export default ProjetosInovadores