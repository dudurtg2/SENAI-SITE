import React from 'react'
import SectionLayout from '../layout/SectionLayout'

const Sobre: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
                Sobre o SENAI
              </h1>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                Conheça nossa história, missão e compromisso com a educação tecnológica
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Promover a educação profissional e tecnológica, a inovação e a transferência 
                  de tecnologias industriais, contribuindo para elevar a competitividade da 
                  indústria brasileira.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconhecido pela indústria e pela sociedade como organização de 
                  excelência em soluções em educação profissional, tecnologia e inovação.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ética, transparência, excelência, inovação, sustentabilidade e 
                  compromisso com a transformação social através da educação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* História do SENAI */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossa História</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mais de 80 anos dedicados à formação profissional e desenvolvimento tecnológico
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">1942 - Fundação</h3>
                    <p className="text-gray-600 leading-relaxed">
                      O SENAI foi criado em 22 de janeiro de 1942, por decreto-lei do então 
                      presidente Getúlio Vargas, atendendo a uma demanda dos industriais 
                      liderados por Roberto Simonsen.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg">
                    <div className="text-4xl font-bold mb-2">80+</div>
                    <div className="text-blue-100">Anos de História</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Expansão Nacional</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ao longo das décadas, o SENAI expandiu sua atuação para todo o território 
                      nacional, criando uma rede de escolas técnicas e centros de tecnologia.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-green-100">Unidades no Brasil</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Era Digital</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hoje, o SENAI está na vanguarda da educação 4.0, oferecendo cursos 
                      em tecnologias emergentes como IoT, IA, robótica e manufatura digital.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-lg">
                    <div className="text-4xl font-bold mb-2">2M+</div>
                    <div className="text-purple-100">Alunos Formados/Ano</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Números e Estatísticas */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">SENAI em Números</h2>
              <p className="text-lg text-gray-600">
                Dados que demonstram nosso impacto na educação brasileira
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Unidades Operacionais</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2.3M</div>
                <div className="text-gray-600 text-sm">Matrículas/Ano</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">28</div>
                <div className="text-gray-600 text-sm">Áreas Tecnológicas</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600 text-sm">Cursos Oferecidos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso com a Inovação */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Compromisso com a Inovação
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              O SENAI está constantemente evoluindo para atender às demandas da Indústria 4.0, 
              investindo em pesquisa, desenvolvimento tecnológico e formação de profissionais 
              preparados para os desafios do futuro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Inteligência Artificial
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Internet das Coisas
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Manufatura Digital
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Robótica Avançada
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                Sustentabilidade
              </span>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  )
}

export default Sobre
