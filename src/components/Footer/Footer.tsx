import React from 'react';

// Importar os novos ícones e logo
const senaiLogoPath = require('../../assets/images/Imagens/022-Senai.png');
const instagramIconPath = require('../../assets/images/Imagens/023-Instagram.png');
const whatsappIconPath = require('../../assets/images/Imagens/024-WhatsApp.png');
const facebookIconPath = require('../../assets/images/Imagens/025-Facebook.png');

interface FooterProps {
  // Propriedades do componente, se necessário
}

const Footer: React.FC<FooterProps> = () => {
  // Endereço e informações de contato da imagem de referência
  const address = {
    street: 'Av. Eduardo Fróes da Mota, nº 5.000',
    neighborhood: 'Campo Limpo - Feira de Santana/BA',
    cep: 'CEP: 44032-002',
  };

  const contacts = {
    phone1: '(75) 3229-9100',
    phone2: 'Call Center SENAI BAHIA: (71) 3534-8090',
    email: 'cacsenaifeira@fieb.org.br',
  };

  // URL de embed do Google Maps
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13036.791117188173!2d-38.96966714231582!3d-12.234397357549454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71438165404b7db%3A0x82474a6ddb9068c0!2sSENAI%20Feira%20de%20Santana!5e0!3m2!1spt-BR!2sbr!4v1748392537876!5m2!1spt-BR!2sbr";


  return (
    <footer className="bg-white text-gray-700"> {/* Fundo branco, texto cinza escuro */}
      <div className="container mx-auto px-4 py-12 flex items-center justify-center"> {/* Padding vertical */}
        {/* Grid principal para mapa e informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> 
          {/* Coluna do Mapa - Ajustado para ser quadrado */}
          <div style={{ width: '450px', height: '450px' }} className="mx-auto rounded-tl-xl rounded-br-3xl overflow-hidden shadow-lg bg-slate-700"> 
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização SENAI Feira de Santana"
            ></iframe>
          </div>

          {/* Coluna de Endereço e Contatos - Centralizada verticalmente */}
          <div className="flex flex-col justify-center h-full mx-auto"> 
            <div className="mb-5"> 
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Onde estamos</h2> 
              <p className="mb-1 text-base">{address.street}</p> 
              <p className="mb-1 text-base">{address.neighborhood}</p>
              <p className="text-base">{address.cep}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Contatos</h2>
              <p className="mb-1 text-base">{contacts.phone1}</p>
              <p className="mb-1 text-base">{contacts.phone2}</p>
              <p className="text-base hover:underline cursor-pointer">{contacts.email}</p> 
            </div>
          </div>
        </div>
      </div>


      {/* Divisor e Rodapé Inferior (Faixa escura) */}
      {/* Cor alterada para bg-slate-900 */}
      <div className="bg-slate-900 text-white"> 
        <div className="container mx-auto px-0 py-8"> 
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo SENAI - Tamanho aumentado */}
            <div className="mb-6 md:mb-0">
              {/* Aumentada a altura para h-16 */}
              <img src={senaiLogoPath} alt="Logo SENAI" className="h-25" /> 
            </div>
            
            {/* Links e Redes Sociais */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-8 sm:gap-12"> 
              <div>
                <h3 className="font-semibold mb-2 text-lg">Atalhos</h3> 
                <p className="text-sm hover:underline cursor-pointer">Repositório</p>
                <p className="text-sm hover:underline cursor-pointer">Biblioteca Maker</p>
                <p className="text-sm hover:underline cursor-pointer">Lab Maker</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Team</h3>
                <p className="text-sm hover:underline cursor-pointer">Desenvolvedores</p>
                <p className="text-sm hover:underline cursor-pointer">Auxiliares</p>
                <p className="text-sm hover:underline cursor-pointer">Pensadores</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Nossas redes sociais:</h3>
                {/* Ícones de redes sociais - Usando as imagens fornecidas */}
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src={instagramIconPath} alt="Instagram" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                  </a>
                  <a
                    href="https://wa.me/557532299100"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Whatsapp"
                  >
                    <img src={whatsappIconPath} alt="Whatsapp" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <img src={facebookIconPath} alt="Facebook" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

