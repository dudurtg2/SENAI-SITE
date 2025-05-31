import React from 'react'
import Card from './Card'
import image1 from '../../../../assets/images/Imagens/005-Titulo sobre o Senai.png'
import image2 from '../../../../assets/images/Imagens/005-Titulo sobre o Senai - 2.png'

const CardSection: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: 'TÍTULO SOBRE O SENAI',
      description:
        'Lorem ipsum dolor sit amet. Ut nihil praesentium eos enim esse est possimus internos sit soluta tempore et maiores veritatis ab asperiores sequi ut repudiandae quia.',
      imageUrl: image1,
      isReversed: false
    },
    {
      id: 2,
      title: 'TÍTULO SOBRE O SENAI',
      description:
        'Lorem ipsum dolor sit amet. Ut nihil praesentium eos enim esse est possimus internos sit soluta tempore et maiores veritatis ab asperiores sequi ut repudiandae quia.',
      imageUrl: image2,
      isReversed: true
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            isReversed={card.isReversed}
          />
        ))}
      </div>
    </section>
  )
}

export default CardSection
