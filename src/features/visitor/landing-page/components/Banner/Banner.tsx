import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { useNavigate } from 'react-router-dom'

// Importar os estilos do Swiper
import 'swiper/css'
import 'swiper/css/autoplay'

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
  onClick?: () => void
}

// Componente para um item individual do banner
const BannerItem: React.FC<BannerItemProps> = ({ imageUrl, title, onClick }) => {
  return (
    <div 
      className="relative w-full h-[600px] group overflow-hidden m-0 p-0 border-0 cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Overlay escuro simples */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-30"></div>

      {/* Indicador de clique */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
          <span className="text-white text-sm">→</span>
        </div>
      </div>

      {/* Texto posicionado no canto inferior esquerdo, mas mais acima */}
      <div className="absolute bottom-8 left-12 flex flex-col items-start">
        <div className="transform -rotate-90 whitespace-nowrap origin-bottom-left">
          <h2 className="text-white text-xl font-semibold tracking-wider uppercase group-hover:text-blue-200 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>

      {/* Overlay de hover com call-to-action */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <p className="text-white text-lg font-semibold mb-2">Explorar</p>
          <p className="text-white text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

// Componente principal do Banner
const Banner: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const navigate = useNavigate()

  // Array com os itens do banner usando as imagens importadas
  const bannerItems = [
    {
      imageUrl: img1,
      title: 'Vitrine Tecnológica',
      route: '/vitrine-tecnologica'
    },
    {
      imageUrl: img2,
      title: 'Biblioteca Maker',
      route: '/biblioteca-maker'
    },
    {
      imageUrl: img3,
      title: 'Laboratório Maker',
      route: '/laboratorio-maker'
    },
    {
      imageUrl: img4,
      title: 'Comunidade Maker',
      route: '/comunidade-maker'
    },
    {
      imageUrl: img5,
      title: 'Educação Tecnológica',
      route: '/educacao-tecnologica'
    }
  ]

  // Para garantir loop perfeito, duplicamos os slides se necessário
  const extendedItems = [...bannerItems, ...bannerItems]

  // Função para navegar para a página correspondente
  const handleItemClick = (route: string) => {
    navigate(route)
  }

  useEffect(() => {
    // Garantir que o loop funcione após a montagem do componente
    const timer = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.loopDestroy()
        swiperRef.current.loopCreate()
        swiperRef.current.update()
        swiperRef.current.autoplay?.start()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full h-[600px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} // Remove todo espaçamento
        slidesPerView={3} // Mostra 3 slides por vez
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500, // 2.5 segundos entre transições
          disableOnInteraction: false, // Continua mesmo após interação
          pauseOnMouseEnter: true, // Pausa quando hover
        }}
        speed={800} // Velocidade da transição em ms
        breakpoints={{
          // Responsivo - removendo spaceBetween de todos os breakpoints
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 0,
          }
        }}
        className="h-full !p-0 !m-0"
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onInit={(swiper) => {
          // Inicialização mais robusta
          setTimeout(() => {
            swiper.loopDestroy()
            swiper.loopCreate()
            swiper.update()
          }, 100)
        }}
      >
        {extendedItems.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`} className="!p-0 !m-0">
            <BannerItem 
              imageUrl={item.imageUrl} 
              title={item.title}
              onClick={() => handleItemClick(item.route)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Banner
