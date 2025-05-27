import React from 'react';

// Define a interface para as propriedades de cada item do banner
interface BannerItemProps {
  imageUrl: string;
  title: string;
}

// Componente para um item individual do banner
const BannerItem: React.FC<BannerItemProps> = ({ imageUrl, title }) => {
  return (
    // Ajusta a largura para acomodar 5 itens em telas médias/grandes (md:w-1/5)
    <div className="relative w-full md:w-1/5 h-[600px] group overflow-hidden"> 
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
        // Carrega a imagem da pasta public
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})` }}
      ></div>

      {/* Overlay escuro simples */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50"></div>

      {/* Texto posicionado no canto inferior esquerdo, mas mais acima */}
      {/* Corrigido o 'left-' para 'left-4' para posicionamento */}
      <div className="absolute bottom-8 left-12 flex flex-col items-start">
        <div className="transform -rotate-90 whitespace-nowrap origin-bottom-left">
          <h2 className="text-white text-xl font-semibold tracking-wider uppercase">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

// Componente principal do Banner
const Banner: React.FC = () => {
  // Array com os itens do banner, incluindo o novo item genérico
  const bannerItems = [
    {
      imageUrl: '/images/Imagens/001-Comunidade Maker.jpg',
      title: 'Comunidade Maker',
    },
    {
      imageUrl: '/images/Imagens/002-Biblioteca Maker.jpg',
      title: 'Biblioteca Maker',
    },
    {
      imageUrl: '/images/Imagens/003-Lab Maker.jpg',
      title: 'Lab Maker',
    },
    {
      imageUrl: '/images/Imagens/004-Reproducao de Projetos.jpg',
      title: 'Reprodução de Projetos',
    },
    {
      // Adiciona o novo card com a imagem genérica salva
      imageUrl: '/images/Imagens/005-Oficina-Maker-Generica.jpeg', 
      title: 'Oficina Criativa', // Título genérico para o novo card
    },
  ];

  return (
    <section className="w-full">
      {/* Mantém o flex-col para mobile e flex-row para desktop */}
      <div className="flex flex-col md:flex-row">
        {bannerItems.map((item, index) => (
          <BannerItem key={index} imageUrl={item.imageUrl} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Banner;

