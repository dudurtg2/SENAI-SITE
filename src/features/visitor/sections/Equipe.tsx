import React from 'react'
import SectionLayout from '../layout/SectionLayout'

const Equipe: React.FC = () => {
  const equipeData = [
    {
      nome: "Prof. Dr. Carlos Silva",
      cargo: "Diretor Acadêmico",
      area: "Engenharia de Produção",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Especialista em Indústria 4.0 com mais de 15 anos de experiência",
      contato: "carlos.silva@senai.br"
    },
    {
      nome: "Profa. Dra. Maria Santos",
      cargo: "Coordenadora de Pesquisa",
      area: "Inteligência Artificial",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "PhD em Machine Learning, líder em projetos de IA aplicada à indústria",
      contato: "maria.santos@senai.br"
    },
    {
      nome: "Prof. João Oliveira",
      cargo: "Coordenador de Laboratórios",
      area: "Robótica e Automação",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Especialista em sistemas automatizados e robótica industrial",
      contato: "joao.oliveira@senai.br"
    },
    {
      nome: "Profa. Ana Costa",
      cargo: "Coordenadora de Projetos",
      area: "Inovação Tecnológica",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Gestora de projetos inovadores e parcerias com a indústria",
      contato: "ana.costa@senai.br"
    },
    {
      nome: "Prof. Roberto Lima",
      cargo: "Coordenador de Cursos",
      area: "Educação Tecnológica",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Pedagogo especializado em metodologias ativas de aprendizagem",
      contato: "roberto.lima@senai.br"
    },
    {
      nome: "Profa. Luciana Ferreira",
      cargo: "Coordenadora de Extensão",
      area: "Comunidade e Outreach",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Especialista em programas de extensão e engajamento comunitário",
      contato: "luciana.ferreira@senai.br"
    }
  ]

  const departamentos = [
    {
      nome: "Direção Acadêmica",
      descricao: "Responsável pela coordenação geral dos programas educacionais",
      icon: "🎓",
      cor: "blue"
    },
    {
      nome: "Pesquisa e Desenvolvimento",
      descricao: "Desenvolvimento de projetos inovadores e pesquisa aplicada",
      icon: "🔬",
      cor: "green"
    },
    {
      nome: "Laboratórios e Infraestrutura",
      descricao: "Manutenção e operação dos laboratórios especializados",
      icon: "⚙️",
      cor: "purple"
    },
    {
      nome: "Gestão de Projetos",
      descricao: "Coordenação de projetos estudantis e parcerias industriais",
      icon: "📋",
      cor: "orange"
    },
    {
      nome: "Educação e Cursos",
      descricao: "Desenvolvimento curricular e metodologias de ensino",
      icon: "📚",
      cor: "red"
    },
    {
      nome: "Extensão e Comunidade",
      descricao: "Programas de extensão e relacionamento com a comunidade",
      icon: "🤝",
      cor: "cyan"
    }
  ]

  return (
    <SectionLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
                Nossa Equipe
              </h1>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                Conheça os profissionais dedicados que tornam possível a excelência do SENAI
              </p>
            </div>
          </div>
        </section>

        {/* Departamentos */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Departamentos</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossa estrutura organizacional é dividida em departamentos especializados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {departamentos.map((dept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    dept.cor === 'blue' ? 'bg-blue-100' :
                    dept.cor === 'green' ? 'bg-green-100' :
                    dept.cor === 'purple' ? 'bg-purple-100' :
                    dept.cor === 'orange' ? 'bg-orange-100' :
                    dept.cor === 'red' ? 'bg-red-100' :
                    'bg-cyan-100'
                  }`}>
                    <span className="text-2xl">{dept.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{dept.nome}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{dept.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe Principal */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Equipe Principal</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profissionais experientes e qualificados que lideram nossas iniciativas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipeData.map((membro, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={membro.foto} 
                      alt={membro.nome}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-lg font-bold text-white">{membro.nome}</h3>
                      <p className="text-blue-200 text-sm">{membro.cargo}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {membro.area}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {membro.bio}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <span className="mr-2">📧</span>
                      <a 
                        href={`mailto:${membro.contato}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {membro.contato}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trabalhe Conosco */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Faça Parte da Nossa Equipe
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Estamos sempre em busca de talentos excepcionais para se juntar à nossa missão 
              de transformar a educação tecnológica no Brasil. Se você é apaixonado por educação 
              e inovação, queremos conhecê-lo!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Inovação</h3>
                <p className="text-blue-100 text-sm">
                  Ambiente de trabalho que valoriza criatividade e novas ideias
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Crescimento</h3>
                <p className="text-blue-100 text-sm">
                  Oportunidades de desenvolvimento profissional e pessoal
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Propósito</h3>
                <p className="text-blue-100 text-sm">
                  Faça a diferença na formação de milhares de estudantes
                </p>
              </div>
            </div>
            
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Enviar Currículo
            </button>
          </div>
        </section>

        {/* Valores da Equipe */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Nossos Valores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🤝 Colaboração</h3>
                <p className="text-gray-600 text-sm">
                  Trabalhamos em equipe, compartilhando conhecimentos e experiências 
                  para alcançar objetivos comuns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">⭐ Excelência</h3>
                <p className="text-gray-600 text-sm">
                  Buscamos constantemente a melhoria contínua em todos os aspectos 
                  do nosso trabalho.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🎓 Educação</h3>
                <p className="text-gray-600 text-sm">
                  Acreditamos no poder transformador da educação e no desenvolvimento 
                  do potencial humano.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🔬 Inovação</h3>
                <p className="text-gray-600 text-sm">
                  Estamos sempre abertos a novas ideias e tecnologias que possam 
                  melhorar a experiência educacional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  )
}

export default Equipe
