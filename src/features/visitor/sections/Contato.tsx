import React, { useState } from 'react'
import SectionLayout from '../layout/SectionLayout'

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    tipo: 'geral',
    mensagem: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    
    // Reset do formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      tipo: 'geral',
      mensagem: ''
    })
  }

  const contatosEspecializados = [
    {
      area: "Admissões e Matrículas",
      responsavel: "Secretaria Acadêmica",
      telefone: "(11) 3555-1001",
      email: "matriculas@senai.br",
      horario: "Segunda a Sexta: 8h às 18h",
      icon: "🎓"
    },
    {
      area: "Projetos e Parcerias",
      responsavel: "Coordenação de Projetos",
      telefone: "(11) 3555-1002", 
      email: "projetos@senai.br",
      horario: "Segunda a Sexta: 9h às 17h",
      icon: "🤝"
    },
    {
      area: "Laboratórios e Equipamentos",
      responsavel: "Coordenação Técnica",
      telefone: "(11) 3555-1003",
      email: "laboratorios@senai.br", 
      horario: "Segunda a Sexta: 7h às 19h",
      icon: "⚙️"
    },
    {
      area: "Pesquisa e Inovação",
      responsavel: "Departamento de P&D",
      telefone: "(11) 3555-1004",
      email: "pesquisa@senai.br",
      horario: "Segunda a Sexta: 8h às 17h",
      icon: "🔬"
    },
    {
      area: "Eventos e Extensão",
      responsavel: "Coordenação de Eventos",
      telefone: "(11) 3555-1005",
      email: "eventos@senai.br",
      horario: "Segunda a Sexta: 9h às 18h",
      icon: "📅"
    },
    {
      area: "Suporte Técnico",
      responsavel: "TI e Sistemas",
      telefone: "(11) 3555-1006",
      email: "suporte@senai.br",
      horario: "Segunda a Sexta: 8h às 20h",
      icon: "💻"
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
                Contato
              </h1>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                Entre em contato conosco. Estamos aqui para ajudar e esclarecer suas dúvidas
              </p>
            </div>
          </div>
        </section>

        {/* Informações de Contato Principal */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Endereço</h3>
                <p className="text-gray-600 leading-relaxed">
                  Av. Paulista, 1313<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01311-923
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Telefone</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Geral:</strong> (11) 3555-5555<br />
                  <strong>WhatsApp:</strong> (11) 99999-9999<br />
                  <strong>Emergência:</strong> (11) 3555-5000
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Horário</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Segunda a Sexta:</strong><br />
                  7h às 22h<br />
                  <strong>Sábado:</strong><br />
                  8h às 17h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contatos Especializados */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contatos Especializados</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Para um atendimento mais eficiente, entre em contato diretamente com o departamento responsável
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contatosEspecializados.map((contato, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xl">{contato.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{contato.area}</h3>
                      <p className="text-sm text-gray-600">{contato.responsavel}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📞</span>
                      <a href={`tel:${contato.telefone}`} className="text-blue-600 hover:text-blue-800">
                        {contato.telefone}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📧</span>
                      <a href={`mailto:${contato.email}`} className="text-blue-600 hover:text-blue-800">
                        {contato.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">⏰</span>
                      <span>{contato.horario}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Envie sua Mensagem</h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo e retornaremos o mais breve possível
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Contato
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="geral">Informações Gerais</option>
                      <option value="matricula">Matrículas</option>
                      <option value="projeto">Projetos</option>
                      <option value="parceria">Parcerias</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Resumo do que você gostaria de falar"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva sua dúvida, sugestão ou comentário detalhadamente..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Redes Sociais e Links Úteis */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Siga-nos nas Redes Sociais
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <a href="#" className="group flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-300">
                <span className="text-3xl mb-2">📘</span>
                <span className="text-sm font-medium">Facebook</span>
              </a>
              
              <a href="#" className="group flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-blue-400 transition-colors duration-300">
                <span className="text-3xl mb-2">🐦</span>
                <span className="text-sm font-medium">Twitter</span>
              </a>
              
              <a href="#" className="group flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors duration-300">
                <span className="text-3xl mb-2">📷</span>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              
              <a href="#" className="group flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-blue-700 transition-colors duration-300">
                <span className="text-3xl mb-2">💼</span>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            <p className="text-gray-400 mb-6">
              Fique por dentro das últimas novidades, eventos e oportunidades do SENAI
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Portal SENAI Nacional
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                FIEB
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                CNI
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Mundo SENAI
              </a>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  )
}

export default Contato
