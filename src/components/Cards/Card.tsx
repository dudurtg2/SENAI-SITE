import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, isReversed = false }) => {
  return (
    // Adicionado mx-auto para centralizar o card horizontalmente e max-w-5xl para limitar a largura
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} my-12 items-center gap-4 mx-auto max-w-5xl`}> 
      {/* Imagem - Ocupa metade da largura */}
      <div className={`w-full md:w-1/2`}>
        <div className="h-80 w-full overflow-hidden rounded-lg shadow-md"> 
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Texto e botão - Ocupa metade da largura */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2> 
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{description}</p> 
        <div>
          <button className="border border-gray-400 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors rounded">
            Saber mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

