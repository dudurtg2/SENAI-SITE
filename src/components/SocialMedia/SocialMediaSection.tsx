import React from 'react';

// Caminhos das imagens
const instagramIconPath = require("../../assets/images/Imagens/020-Instagram.png");
const facebookIconPath = require("../../assets/images/Imagens/021-Facebook.png");

interface SocialMediaSectionProps {
  // Propriedades do componente, se necessário
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = () => {
  // Array de imagens para o carrossel
  const carouselImages = [
    { src: require('../../assets/images/Imagens/006.jpg'), alt: 'Tecnologia 1' },
    { src: require('../../assets/images/Imagens/007.jpg'), alt: 'Tecnologia 2' },
    { src: require('../../assets/images/Imagens/008.jpg'), alt: 'Tecnologia 3' },
    { src: require('../../assets/images/Imagens/009.png'), alt: 'Tecnologia 4' },
    // Adicione mais imagens aqui se desejar
  ];

  // Duplica as imagens para o efeito de loop infinito
  const doubledImages = [...carouselImages, ...carouselImages];

  return (
    <section className="w-full">
      {/* Seção Superior com fundo escuro - Altura aumentada novamente */}
      <div className="bg-slate-900 py-12 flex flex-col md:flex-row justify-center items-center space-y- md:space-y-0 md:space-x-20"> {/* Alterado py-12 expessura da faixa azul */}
        {/* Bloco Instagram */}
        <div className="flex items-center text-white">
          <img src={instagramIconPath} alt="Instagram" className="w-20 h-20 mr-4" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">#Mobilizasenai</span>
            <span className="text-sm">@Mobilizasenai</span>
          </div>
        </div>
        {/* Bloco Facebook */}
        <div className="flex items-center text-white">
          <img src={facebookIconPath} alt="Facebook" className="w-20 h-20 mr-4" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Follow us</span>
            <span className="text-sm">@Mobilizasenai</span>
          </div>
        </div>
      </div>

      {/* Seção Inferior com Carrossel Horizontal em Loop */}
      {/* Container principal com overflow hidden. */}
      <div className="overflow-hidden w-full group">
        {/* Container interno que se move com a animação. */}
        <div className="flex whitespace-nowrap animate-scroll group-hover:pause">
          {doubledImages.map((image, index) => (
            // Cada item do carrossel: largura fixa, altura aumentada novamente, não encolher.
            <div key={index} className="inline-block w-64 h-80 flex-shrink-0"> {/* Alterado h-64 para h-80 */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover shadow-md" // Bordas retas (sem rounded-lg), mantido shadow-md
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;

