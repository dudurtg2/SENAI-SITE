import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img4 from '@/assets/images/Imagens/004-Reproducao de Projetos.jpg'

const ComunidadeMaker: React.FC = () => {
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
              Comunidade Maker
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Conecte-se, compartilhe e cresça junto com outros makers
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
                Faça Parte da Nossa Comunidade
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Comunidade Maker do SENAI é um espaço colaborativo onde estudantes, 
                professores, profissionais e entusiastas da tecnologia se encontram para 
                compartilhar conhecimento, trocar experiências e desenvolver projetos inovadores.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Aqui você encontra pessoas com os mesmos interesses, participa de eventos, 
                workshops e hackathons, além de ter acesso a mentorias e oportunidades 
                de colaboração em projetos reais.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Networking</h3>
                <p className="text-gray-600">
                  Conecte-se com makers, desenvolvedores e inovadores 
                  de diversas áreas e níveis de experiência.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eventos</h3>
                <p className="text-gray-600">
                  Participe de workshops, palestras, competições e 
                  encontros presenciais e online.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Colaboração</h3>
                <p className="text-gray-600">
                  Trabalhe em equipe, compartilhe projetos e contribua 
                  com a comunidade maker.
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

export default ComunidadeMaker