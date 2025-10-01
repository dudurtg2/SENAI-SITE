import React from 'react'
import SectionLayout from '../layout/SectionLayout'

const Sobre: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900">
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-4">
              <div className="mb-4 text-sm font-semibold tracking-widest uppercase text-blue-200">
                PLATAFORMA DIGITAL
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                SENAI Feira de Santana
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                Inovação, Tecnologia e Colaboração para o Futuro da Educação Profissional
              </p>
            </div>
          </div>
        </section>

        {/* Sobre a Plataforma */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Introdução ao Site */}
            <div className="mb-16">
              <div className="mb-4 text-sm font-semibold tracking-widest uppercase text-blue-700">
                SOBRE A PLATAFORMA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Desenvolvemos uma solução integrada para a educação profissional
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
                <p>
                  O site do SENAI Feira de Santana é uma plataforma completa e integrada, com destaque para a 
                  <strong className="text-blue-700 font-semibold"> Vitrine Tecnológica</strong>, um espaço dedicado à exposição 
                  dos projetos inovadores desenvolvidos por nossos alunos e instrutores.
                </p>
                <p>
                  Além da Vitrine Tecnológica, a plataforma oferece ferramentas modernas e colaborativas para 
                  otimizar o uso dos recursos educacionais e promover a interação da comunidade acadêmica.
                </p>
              </div>
            </div>

            {/* Cards das Funcionalidades */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border-l-4 border-purple-700 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-purple-100 flex items-center justify-center">
                    <div className="w-2 h-12 bg-purple-700"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vitrine Tecnológica</h3>
                <p className="text-gray-700 leading-relaxed">
                  Espaço digital para exposição e divulgação dos projetos inovadores desenvolvidos 
                  no SENAI, incentivando a criatividade e o empreendedorismo tecnológico.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-cyan-700 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-cyan-100 flex items-center justify-center">
                    <div className="w-2 h-12 bg-cyan-700"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Laboratório Maker</h3>
                <p className="text-gray-700 leading-relaxed">
                  Disponibiliza e gerencia os recursos do Lab Maker, com visualização de estrutura e equipamentos, 
                  reservas online de horários, gestão de estoque, custos e catalogação de materiais produzidos.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-orange-700 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-orange-100 flex items-center justify-center">
                    <div className="w-2 h-12 bg-orange-700"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Biblioteca Maker</h3>
                <p className="text-gray-700 leading-relaxed">
                  Moderniza o acesso à biblioteca, possibilitando reserva de salas de estudo, integração com 
                  repositórios digitais e oferta de conteúdos que estimulam autonomia e criatividade.
                </p>
              </div>
            </div>

            {/* Card da Comunidade - Destaque */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 border-l-4 border-white flex items-center flex-shrink-0">
                  <div className="w-2 h-16 bg-white ml-4"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Comunidade Maker</h3>
                  <p className="text-blue-50 leading-relaxed text-lg">
                    Promove a interação colaborativa criando um espaço digital para compartilhamento de experiências, 
                    dúvidas, eventos e ações institucionais. Divulga chamadas internas e externas, concursos, 
                    premiações e feiras, fortalecendo o networking e a troca de conhecimentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso Final */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="mb-4 text-sm font-semibold tracking-widest uppercase text-blue-700">
                NOSSO COMPROMISSO
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Educação, Tecnologia e Inovação
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                O SENAI Feira de Santana está comprometido com a formação de profissionais preparados 
                para os desafios da Indústria 4.0. Nossa plataforma digital representa esse compromisso, 
                oferecendo ferramentas modernas que integram educação, tecnologia e inovação em um único ambiente.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 bg-purple-100 text-purple-900 font-semibold border-l-4 border-purple-700">
                Vitrine Tecnológica
              </span>
              <span className="px-6 py-3 bg-cyan-100 text-cyan-900 font-semibold border-l-4 border-cyan-700">
                Lab Maker
              </span>
              <span className="px-6 py-3 bg-orange-100 text-orange-900 font-semibold border-l-4 border-orange-700">
                Biblioteca Digital
              </span>
              <span className="px-6 py-3 bg-blue-100 text-blue-900 font-semibold border-l-4 border-blue-700">
                Comunidade Colaborativa
              </span>
              <span className="px-6 py-3 bg-green-100 text-green-900 font-semibold border-l-4 border-green-700">
                Gestão Inteligente
              </span>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  )
}

export default Sobre
