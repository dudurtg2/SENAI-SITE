import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img1 from '@/assets/images/Imagens/001-Comunidade Maker.jpg'

const ComunidadeMaker: React.FC = () => {
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
              Comunidade Maker
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Um espaço colaborativo onde criatividade e tecnologia se encontram
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
                O que é a Comunidade Maker?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Comunidade Maker do SENAI é um ecossistema vibrante onde estudantes, 
                professores e profissionais se reúnem para compartilhar conhecimentos, 
                colaborar em projetos inovadores e transformar ideias em realidade.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Aqui, o aprendizado vai além da sala de aula tradicional. Nossa comunidade 
                promove a cultura do "faça você mesmo" (DIY) e do "faça com outros" (DIT), 
                incentivando a experimentação e a inovação através da prática.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Colaboração</h3>
                <p className="text-gray-600">
                  Trabalhamos juntos em projetos multidisciplinares que conectam 
                  diferentes áreas do conhecimento.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Inovação</h3>
                <p className="text-gray-600">
                  Desenvolvemos soluções criativas para problemas reais usando 
                  tecnologias emergentes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Aprendizado</h3>
                <p className="text-gray-600">
                  Compartilhamos conhecimentos através de workshops, mentorias 
                  e eventos da comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Como Participar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Junte-se à Comunidade
              </h3>
              <p className="text-gray-600">
                Cadastre-se e conecte-se com outros makers apaixonados por tecnologia e inovação.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Participe de Projetos
              </h3>
              <p className="text-gray-600">
                Colabore em projetos existentes ou proponha suas próprias ideias para desenvolvimento.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Compartilhe Conhecimento
              </h3>
              <p className="text-gray-600">
                Ensine o que sabe e aprenda com outros membros em workshops e eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Fazer Parte da Comunidade?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a nós e transforme suas ideias em projetos reais
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
            Cadastrar-se Agora
          </button>
        </div>
      </section>
      </div>
    </SectionLayout>
  )
}

export default ComunidadeMaker