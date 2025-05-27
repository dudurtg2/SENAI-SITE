import React from 'react';

interface InfoSectionProps {
  // Propriedades do componente, se necessário
}

const InfoSection: React.FC<InfoSectionProps> = () => {
  const teamMembers = [
    {
      id: 1,
      imageUrl: require('../../assets/images/Imagens/014-Nome Cuso e turma.png'),
      name: 'Nome',
      details: 'Curso e turma'
    },
    {
      id: 2,
      imageUrl: require('../../assets/images/Imagens/015-Nome Cuso e turma.png'),
      name: 'Nome',
      details: 'Curso e turma'
    },
    {
      id: 3,
      imageUrl: require('../../assets/images/Imagens/016-Nome Cuso e turma.png'),
      name: 'Nome',
      details: 'Curso e turma'
    },
    {
      id: 4,
      imageUrl: require('../../assets/images/Imagens/017-Nome Cuso e turma.png'),
      name: 'Nome',
      details: 'Curso e turma'
    },
    {
      id: 5,
      imageUrl: require('../../assets/images/Imagens/018-Nome Cuso e turma.png'),
      name: 'Nome',
      details: 'Curso e turma'
    },
    {
      id: 6,
      imageUrl: require('../../assets/images/Imagens/019-Nome Cuso e turma.png'),
      name: 'Nome',
      details: 'Curso e turma'
    }
    // Adicione mais membros aqui se necessário
  ];

  // Duplica os membros para o efeito de loop infinito
  const doubledMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="py-8 bg-gray-100"> {/* Fundo cinza claro */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-4">INFORMAÇÃO SOBRE</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet. Ut nihil praesentium eos enim esse est possimus internos sit soluta tempore et maiores veritatis ab asperiores sequi ut repudiandae quia.
        </p>

        {/* Carrossel em Loop */}
        <div className="overflow-hidden w-full group">
          <div className="flex whitespace-nowrap animate-scroll group-hover:pause">
            {doubledMembers.map((member, index) => (
              // Card com estilo original (arredondado, com espaço)
              <div key={`${member.id}-${index}`} className="inline-block w-48 flex-shrink-0 mx-2"> {/* Mantido mx-2 para espaçamento */}
                <div className="relative group bg-white rounded-lg shadow-md overflow-hidden"> {/* Mantido rounded-lg */}
                  <img
                    src={member.imageUrl}
                    alt={member.name} // Revertido para usar member.name como alt
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" /* Altura ajustada */
                  />
                  {/* Texto sobre a imagem, alinhado à esquerda, sem fundo escuro */}
                  <div className="absolute bottom-0 left-0 right-0 text-white p-3"> {/* Mantido sem fundo escuro, alinhado à esquerda */}
                    <p className="text-sm font-semibold text-left">{member.name}</p>
                    <p className="text-xs text-left text-gray-300">{member.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

