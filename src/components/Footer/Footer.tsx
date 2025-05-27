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
  const mapEmbedUrl = "https://www.google.com/maps/embed/v1/place?q=Av.+Eduardo+Fróes+da+Mota,+5000+-+Campo+Limpo,+Feira+de+Santana+-+BA,+44032-002";

  return (
    <footer className="bg-white text-gray-700"> {/* Fundo branco, texto cinza escuro */}
      <div className="container mx-auto px-4 py-12"> {/* Padding vertical */}
        {/* Grid principal para mapa e informações */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start"> 
          {/* Coluna do Mapa */}
          <div className="md:col-span-2 h-72 md:h-auto rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg"> 
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

          {/* Coluna de Endereço e Contatos */}
          <div className="md:col-span-3 flex flex-col justify-center h-full"> 
            <div className="mb-8"> 
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Onde estamos</h2> 
              <p className="mb-1 text-base">{address.street}</p> 
              <p className="mb-1 text-base">{address.neighborhood}</p>
              <p className="text-base">{address.cep}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">Contatos</h2>
              <p className="mb-1 text-base">{contacts.phone1}</p>
              <p className="mb-1 text-base">{contacts.phone2}</p>
              <p className="text-base hover:text-senai-blue hover:underline cursor-pointer">{contacts.email}</p> 
            </div>
          </div>
        </div>
      </div>

      {/* Divisor e Rodapé Inferior (Faixa escura) */}
      {/* Cor alterada para bg-slate-900 */}
      <div className="bg-slate-900 text-white"> 
        <div className="container mx-auto px-4 py-8"> 
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
                  <a href="#" aria-label="Instagram">
                    <img src={instagramIconPath} alt="Instagram" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                  </a>
                  <a href="#" aria-label="Whatsapp">
                    <img src={whatsappIconPath} alt="Whatsapp" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                  <a href="#" aria-label="Facebook">
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

