import React from 'react'

// Caminhos das imagens
import instagramIconPath from '@/assets/images/Imagens/020-Instagram.png'
import facebookIconPath from '@/assets/images/Imagens/021-Facebook.png'
import img1 from '@/assets/images/Imagens/006.jpg'
import img2 from '@/assets/images/Imagens/007.jpg'
import img3 from '@/assets/images/Imagens/008.jpg'
import img4 from '@/assets/images/Imagens/009.png'

interface SocialMediaSectionProps {
  // Propriedades do componente, se necessário
}

// Importe as imagens do carrossel

const SocialMediaSection: React.FC<SocialMediaSectionProps> = () => {
  // Array de imagens para o carrossel
  const carouselImages = [
    {
      src: img1,
      alt: 'Tecnologia 1'
    },
    {
      src: img2,
      alt: 'Tecnologia 2'
    },
    {
      src: img3,
      alt: 'Tecnologia 3'
    },
    { src: img4, alt: 'Tecnologia 4' }
    // Adicione mais imagens aqui se desejar
  ]

  // Duplica as imagens múltiplas vezes para garantir que toda a tela seja preenchida
  // Criamos muitas cópias para cobrir telas grandes
  const doubledImages = [
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
    ...carouselImages
  ]

  return (
    <section className="w-full">
      {/* Seção Superior com fundo azul - Mesma cor do header "SENAI" */}
      <div className="bg-blue-600 py-12 flex flex-col md:flex-row justify-center items-center space-y- md:space-y-0 md:space-x-20">
        {' '}
        {/* Alterado bg-slate-900 para bg-blue-600 */}
        {/* Bloco Instagram */}
        <div className="flex items-center text-white cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.open('https://www.instagram.com/mobiliza.senaifeira/', '_blank')}>
          <img
            src={instagramIconPath}
            alt="Instagram"
            className="w-20 h-20 mr-4"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">#Mobilizasenai</span>
            <span className="text-sm">@Mobilizasenai</span>
          </div>
        </div>
        {/* Bloco Facebook */}
        <div className="flex items-center text-white cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.open('https://www.facebook.com/Mobilizasenai', '_blank')}>
          <img
            src={facebookIconPath}
            alt="Facebook"
            className="w-20 h-20 mr-4"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Follow us</span>
            <span className="text-sm">@Mobilizasenai</span>
          </div>
        </div>
      </div>

      {/* Seção Inferior com Carrossel Horizontal em Loop */}
      {/* Container principal com overflow hidden. */}
      <div className="overflow-hidden w-full group bg-gray-100">
        {/* Container interno que se move com a animação. */}
        <div className="flex animate-scroll group-hover:pause" style={{ width: 'max-content' }}>
          {doubledImages.map((image, index) => (
            // Cada item do carrossel: largura fixa, altura aumentada, sem espaços
            <div key={index} className="flex-shrink-0 w-96 h-80">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMediaSection
