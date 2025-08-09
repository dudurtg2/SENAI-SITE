import React from 'react'
import Card from './Card'
import image1 from '@/assets/images/Imagens/005-Titulo sobre o Senai.png'
import image2 from '@/assets/images/Imagens/005-Titulo sobre o Senai - 2.png'

const CardSection: React.FC = () => {  const cardData = [
    {
      id: 1,
      title: 'INOVAÇÃO E TECNOLOGIA',
      description:
        'O SENAI Feira de Santana é referência em educação profissional e tecnológica, oferecendo cursos técnicos, graduação e pós-graduação alinhados às demandas da indústria. Nossos laboratórios modernos e professores especializados garantem uma formação de excelência para o mercado de trabalho.',
      imageUrl: image1,
      isReversed: false,
      actionLink: '#outros-links'
    },
    {
      id: 2,
      title: 'EDUCAÇÃO PARA O FUTURO',
      description:
        'Com mais de 70 anos de história, o SENAI é pioneiro na formação de profissionais qualificados para a indústria brasileira. Nossa metodologia conecta teoria e prática, preparando estudantes para os desafios da Indústria 4.0 e as profissões do futuro.',
      imageUrl: image2,
      isReversed: true,
      actionLink: '#equipe'
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            isReversed={card.isReversed}
            actionLink={card.actionLink}
          />
        ))}
      </div>
    </section>
  )
}

export default CardSection
