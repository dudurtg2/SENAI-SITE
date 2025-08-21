import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import img5 from '@/assets/images/Imagens/005-Titulo sobre o Senai.png'

const EducacaoTecnologica: React.FC = () => {
  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img5})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
              Educação Tecnológica
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Formando os profissionais do futuro através da excelência educacional
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
                Educação que Transforma Carreiras
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                No SENAI, a Educação Tecnológica vai além do ensino tradicional. 
                Oferecemos uma abordagem integrada que combina teoria sólida, 
                prática intensiva e inovação constante, preparando nossos estudantes 
                para os desafios da Indústria 4.0.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa metodologia pedagógica é baseada em competências, utilizando 
                tecnologias de ponta e metodologias ativas de aprendizagem que 
                garantem a formação de profissionais altamente qualificados.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Metodologia Ativa</h3>
                <p className="text-gray-600">
                  Aprendizagem baseada em projetos, problemas reais 
                  e experiências práticas na indústria.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologia de Ponta</h3>
                <p className="text-gray-600">
                  Laboratórios equipados com as mais modernas 
                  tecnologias utilizadas na indústria.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Parceria Industrial</h3>
                <p className="text-gray-600">
                  Conexão direta com empresas para estágios, 
                  projetos e oportunidades de carreira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Cursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mecânica Industrial
              </h3>
              <p className="text-gray-600 mb-4">
                Formação completa em manutenção, usinagem e processos de fabricação 
                mecânica com foco na Indústria 4.0.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Duração: 2 anos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Modalidade: Presencial
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Período: Matutino/Vespertino
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>

            {/* Curso 2 */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Desenvolvimento de Sistemas
              </h3>
              <p className="text-gray-600 mb-4">
                Programação moderna, desenvolvimento web, mobile e sistemas 
                empresariais com as mais atuais tecnologias.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Duração: 2.5 anos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Modalidade: Híbrida
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Período: Noturno
                </div>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>

            {/* Curso 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🔌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Eletrônica Industrial
              </h3>
              <p className="text-gray-600 mb-4">
                Automação industrial, controle de processos, instrumentação 
                e sistemas eletrônicos avançados.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Duração: 2 anos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Modalidade: Presencial
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Período: Integral
                </div>
              </div>
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>

            {/* Curso 4 */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Segurança do Trabalho
              </h3>
              <p className="text-gray-600 mb-4">
                Gestão de segurança, prevenção de acidentes, normas regulamentadoras 
                e saúde ocupacional.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Duração: 1.5 anos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Modalidade: Presencial
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Período: Noturno
                </div>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>

            {/* Curso 5 */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Gestão da Qualidade
              </h3>
              <p className="text-gray-600 mb-4">
                Sistemas de gestão, controle de qualidade, auditoria e 
                melhoria contínua de processos.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  Duração: 1.5 anos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  Modalidade: Híbrida
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  Período: Vespertino
                </div>
              </div>
              <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>

            {/* Curso 6 */}
            <div className="group bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Automação Industrial
              </h3>
              <p className="text-gray-600 mb-4">
                CLPs, SCADA, redes industriais, robótica e sistemas 
                automatizados para a Indústria 4.0.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Duração: 2 anos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Modalidade: Presencial
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Período: Matutino
                </div>
              </div>
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nossos Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Taxa de Empregabilidade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5.000+</div>
              <div className="text-blue-100">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-100">Empresas Parceiras</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Comece Sua Jornada Tecnológica
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Inscreva-se em nossos cursos e transforme seu futuro profissional
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-300">
            Ver Cursos Disponíveis
          </button>
        </div>
      </section>
      </div>
    </SectionLayout>
  )
}

export default EducacaoTecnologica