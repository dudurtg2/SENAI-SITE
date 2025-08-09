import React, { useState } from 'react'

const LoginFooter = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')

  const openModal = (title: string, content: string) => {
    setModalTitle(title)
    setModalContent(content)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalTitle('')
    setModalContent('')
  }

  const handleLinkClick = (e: React.MouseEvent, type: 'terms' | 'privacy' | 'contact') => {
    e.preventDefault()
    let title = ''
    let content = ''

    switch (type) {
      case 'terms':
        title = 'Termos de Uso'
        content = '<strong>1. Introdução</strong><br/>Estes Termos de Uso regem o uso do nosso serviço. Ao acessar ou usar o serviço, você concorda em estar vinculado a estes Termos. Se você não concorda com estes Termos, não use o serviço.<br/><br/><strong>2. Uso do Serviço</strong><br/>Você concorda em usar o serviço apenas para fins lícitos e de acordo com estes Termos. Você não deve usar o serviço de forma que possa danificar, desabilitar, sobrecarregar ou prejudicar o serviço.<br/><br/><strong>3. Propriedade Intelectual</strong><br/>Todo o conteúdo do serviço, incluindo texto, gráficos, logotipos e imagens, é de nossa propriedade ou licenciado para nós e é protegido por leis de direitos autorais e outras leis de propriedade intelectual.<br/><br/><strong>4. Limitação de Responsabilidade</strong><br/>Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar o serviço.<br/><br/>Esta é uma versão simplificada e genérica dos Termos de Uso. <strong>É fundamental substituí-la por termos legais completos e específicos para o seu serviço.</strong>'
        break
      case 'privacy':
        title = 'Política de Privacidade'
        content = '<strong>Introdução:</strong> Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.<br/>Ao usar nosso serviço, você concorda com a coleta e uso de informações de acordo com esta política.<br/><br/><strong>Coleta de Informações:</strong> Coletamos informações que você nos fornece diretamente, como nome e email, e automaticamente, como dados de uso e cookies.<br/><br/><strong>Uso das Informações:</strong> Utilizamos essas informações para operar e melhorar o serviço, personalizar sua experiência e comunicar com você.<br/><br/><strong>Compartilhamento de Informações:</strong> Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer o serviço ou por exigência legal.<br/><br/><strong>Seus Direitos:</strong> Você tem o direito de acessar, corrigir ou excluir suas informações.<br/><br/><strong>Importante:</strong> Esta é uma política genérica e deve ser substituída por uma política real e completa.<br/><br/>Última atualização: 25 de Julho de 2024.'
        break
      case 'contact':
        title = 'Contato'
        content = 'Para entrar em contato conosco, utilize as seguintes informações:<br/><br/><strong>Email:</strong> contato@seuservico.com<br/><strong>Telefone:</strong> (XX) XXXX-XXXX<br/><strong>Endereço:</strong> Rua Exemplo, 123, Cidade, Estado, CEP<br/><br/>Responderemos o mais breve possível. Por favor, inclua detalhes relevantes em sua mensagem para que possamos ajudar de forma eficiente.<br/><br/>Este é um texto de contato simulado. <strong>Substitua estas informações pelas suas informações de contato reais.</strong>'
        break
      default:
        break
    }

    openModal(title, content)
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 SENAI. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500" onClick={(e) => handleLinkClick(e, 'terms')}>
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500" onClick={(e) => handleLinkClick(e, 'privacy')}>
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500" onClick={(e) => handleLinkClick(e, 'contact')}>
              Contato
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {modalTitle}
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <p className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: modalContent }}
              >
              </p>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default LoginFooter 