import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Users, BookOpen, Lightbulb, Target } from 'lucide-react'

const AboutProjectPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre o Projeto Portal SENAI
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              "Um site de alunos para os alunos para reunir todos os projetos de todos os cursos"
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-600" size={24} />
                <h2 className="text-2xl font-semibold text-gray-800">Nossa Missão</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Criar uma plataforma centralizada onde estudantes do SENAI possam compartilhar, 
                descobrir e colaborar em projetos acadêmicos de todas as áreas de formação. 
                Nosso objetivo é conectar talentos e fomentar a inovação através da colaboração 
                entre diferentes cursos técnicos.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h2 className="text-2xl font-semibold text-gray-800">Nossa Visão</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal plataforma de projetos estudantis do SENAI, promovendo a 
                interdisciplinaridade e preparando nossos alunos para os desafios do mercado 
                de trabalho através de experiências práticas e colaborativas.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              O que oferecemos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Colaboração</h3>
                <p className="text-gray-600">
                  Conecte-se com estudantes de diferentes cursos e trabalhe em projetos 
                  multidisciplinares que enriquecem sua formação.
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Conhecimento</h3>
                <p className="text-gray-600">
                  Acesse uma biblioteca de projetos desenvolvidos por seus colegas e 
                  aprenda com suas experiências e soluções.
                </p>
              </div>
              <div className="text-center">
                <Target className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Oportunidades</h3>
                <p className="text-gray-600">
                  Mostre seus projetos para professores, colegas e potenciais empregadores, 
                  criando oportunidades para sua carreira.
                </p>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Cursos Participantes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Mecânica Industrial',
                'Eletrônica Digital',
                'Automação Industrial',
                'Desenvolvimento de Sistemas',
                'Segurança do Trabalho',
                'Gestão da Qualidade',
                'Logística',
                'Edificações',
                'Química',
                'Soldagem',
                'Eletrotécnica',
                'Design Gráfico'
              ].map((curso, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  <span className="font-medium text-gray-700">{curso}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Equipe de Desenvolvimento
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Este projeto foi desenvolvido por estudantes do SENAI com o apoio de professores 
              especialistas, demonstrando na prática a qualidade da educação técnica oferecida.
            </p>
            <div className="text-center">
              <button
                onClick={() => navigate('/#equipe')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Conheça Nossa Equipe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Portal SENAI - Feira de Santana. Projeto desenvolvido por alunos para alunos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutProjectPage