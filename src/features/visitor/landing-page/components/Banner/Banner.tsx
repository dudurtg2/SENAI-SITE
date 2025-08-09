import React from 'react'

// Importar as imagens diretamente
import img1 from '@/assets/images/Imagens/001-Comunidade Maker.jpg'
import img2 from '@/assets/images/Imagens/002-Biblioteca Maker.jpg'
import img3 from '@/assets/images/Imagens/003-Lab Maker.jpg'
import img4 from '@/assets/images/Imagens/004-Reproducao de Projetos.jpg'
import img5 from '@/assets/images/Imagens/005-Titulo sobre o Senai.png'

// Define a interface para as propriedades de cada item do banner
interface BannerItemProps {
  imageUrl: string
  title: string
}

// Componente para um item individual do banner
const BannerItem: React.FC<BannerItemProps> = ({ imageUrl, title }) => {
  return (
    // Ajusta a largura para acomodar 5 itens em telas médias/grandes (md:w-1/5)
    <div className="relative w-full md:w-1/5 h-[600px] group overflow-hidden">
      {/* Imagem de fundo */}      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110 "
        // Carrega a imagem da pasta public
        style={{ backgroundImage: `url(${imageUrl})` }}
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
  )
}

// Componente principal do Banner
const Banner: React.FC = () => {  // Array com os itens do banner usando as imagens importadas
  const bannerItems = [
    {
      imageUrl: img1,
      title: 'Comunidade Maker'
    },
    {
      imageUrl: img2,
      title: 'Biblioteca Maker'
    },
    {
      imageUrl: img3,
      title: 'Laboratório Maker'
    },
    {
      imageUrl: img4,
      title: 'Projetos Inovadores'
    },
    {
      // Adiciona o novo card usando uma das imagens disponíveis
      imageUrl: img5,
      title: 'Educação Tecnológica' // Título relacionado ao SENAI
    }
  ]

  return (
    <section className="w-full">
      {/* Mantém o flex-col para mobile e flex-row para desktop */}
      <div className="flex flex-col md:flex-row">
        {bannerItems.map((item, index) => (
          <BannerItem key={index} imageUrl={item.imageUrl} title={item.title} />
        ))}
      </div>
    </section>
  )
}

export default Banner
