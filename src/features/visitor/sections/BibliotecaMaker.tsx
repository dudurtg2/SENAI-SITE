import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img2 from '@/assets/images/Imagens/002-Biblioteca Maker.jpg'

const BibliotecaMaker: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
              Biblioteca Maker
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Acesso ilimitado ao conhecimento técnico e recursos educacionais
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
                Sua Fonte de Conhecimento Técnico
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Biblioteca Maker é mais que um acervo tradicional. É um hub de conhecimento 
                técnico especializado que reúne livros, manuais, documentações, projetos 
                open-source e recursos digitais para makers e entusiastas da tecnologia.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nosso acervo é constantemente atualizado com as últimas tendências em 
                tecnologia, fabricação digital, eletrônica, programação e inovação, 
                garantindo que você tenha acesso às informações mais relevantes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Acervo Digital</h3>
                <p className="text-gray-600">
                  Milhares de e-books, tutoriais, documentações técnicas e 
                  projetos disponíveis 24/7.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Material Físico</h3>
                <p className="text-gray-600">
                  Livros especializados, revistas técnicas e manuais de 
                  equipamentos e ferramentas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Projetos Open Source</h3>
                <p className="text-gray-600">
                  Repositório com códigos, esquemas e documentação de 
                  projetos desenvolvidos pela comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </SectionLayout>
  )
}

export default BibliotecaMaker