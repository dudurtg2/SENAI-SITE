import React from 'react';

// Define as props para o componente EventCard
interface EventCardProps {
  imageUrl: string;
  isLarge: boolean; // Determina se é a variante grande do card
  mainTitle?: string; // Título para o card grande (ex: "VEM AÍ MUNDO SENAI 2024")
  dateText?: string; // Texto da data para o card grande (ex: "DIAS 7, 8 E 9 DE AGOSTO.")
  hashtag?: string; // Hashtag para o card grande (ex: "#TÁROLANDONOSENAI")
  buttonLink: string; // URL para o botão 'SABER MAIS'
}

const EventCard: React.FC<EventCardProps> = ({ 
  imageUrl, 
  isLarge, 
  mainTitle, 
  dateText, 
  hashtag, 
  buttonLink 
}) => {
  return (
    // Contêiner principal do card, posicionamento relativo para elementos absolutos
    <div className={`relative group overflow-hidden shadow-md h-64`}> {/* Altura ajustada com base no tipo de card, cantos arredondados e sombra adicionados */}
      {/* Contêiner da imagem */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={mainTitle || "Evento SENAI"} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {/* Sobreposição escura para melhor contraste do texto */}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
      </div>

      {/* Contêiner de conteúdo - posicionado absolutamente */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
        {/* Renderização condicional para conteúdo específico do card grande */}
        {isLarge && (
          <div className="mb-auto pt-4"> {/* Empurra o conteúdo para o topo */}
            {/* Opcional: Adicionar o pequeno logo laranja do SENAI se disponível */}
            {/* <img src={senaiLogoOrange} alt="SENAI" className="w-16 mb-4" /> */}
            <h3 className="text-3xl font-bold uppercase leading-tight mb-2">{mainTitle}</h3>
            <p className="bg-pink-600 text-white text-xs font-semibold inline-block px-2 py-1 mb-4">{dateText}</p>
          </div>
        )}

        {/* Seção inferior: Botão e Hashtag (para o card grande) */}
        <div className="flex justify-between items-end">
          {/* Botão Saber Mais - estilizado como um link */}
          <a 
            href={buttonLink} 
            target="_blank" // Abrir link em nova aba
            rel="noopener noreferrer" // Melhor prática de segurança para target="_blank"
            className="inline-flex items-center text-sm font-semibold hover:underline group-hover:text-gray-200 transition-colors duration-300">
            SABER MAIS
            <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* Hashtag - exibida apenas no card grande */}
          {isLarge && hashtag && (
            <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 self-end">{hashtag}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
