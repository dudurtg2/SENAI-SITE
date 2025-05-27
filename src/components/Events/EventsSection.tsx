import React from 'react'; // useState removido, pois o estado do carrossel não é mais necessário
import EventCard from './EventCard';

// Importar imagens - Ajuste os caminhos se necessário com base nos locais reais dos arquivos
const imgMundoSenai = require('../../assets/images/Imagens/010-Saiba mais - Eventos e Noticias.jpg'); // Placeholder - Substitua pela imagem real do Mundo SENAI, se disponível
const imgStudent = require('../../assets/images/Imagens/011-Eventos e Noticias.png'); // Placeholder - Substitua pela imagem real do estudante, se disponível
const imgWorkshop = require('../../assets/images/Imagens/012-Saiba mais - Eventos e Noticias.jpg'); // Placeholder - Substitua pela imagem real do workshop, se disponível
const imgBuilding = require('../../assets/images/Imagens/013-Saiba mais - Eventos e Noticias.jpg'); // Placeholder - Substitua pela imagem real do prédio, se disponível

const EventsSection: React.FC = () => {
  // Definir dados dos eventos com base na estrutura da imagem de referência
  // Removido o 5º item, pois era apenas para repetição do carrossel
  const eventsData = [
    {
      id: 1,
      imageUrl: imgMundoSenai,
      isLarge: true, // Sinalizador para o card grande
      mainTitle: "VEM AÍ MUNDO SENAI 2024",
      dateText: "DIAS 7, 8 E 9 DE AGOSTO.",
      hashtag: "#TÁROLANDONOSENAI",
      buttonLink: "#" // Link para o botão Saber Mais
    },
    {
      id: 2,
      imageUrl: imgStudent,
      isLarge: false,
      buttonLink: "#" // Link para o botão Saber Mais
    },
    {
      id: 3,
      imageUrl: imgWorkshop,
      isLarge: false,
      buttonLink: "#" // Link para o botão Saber Mais
    },
    {
      id: 4,
      imageUrl: imgBuilding,
      isLarge: false,
      buttonLink: "#" // Link para o botão Saber Mais
    }
    // Removido item com id: 5, pois o carrossel foi removido
  ];

  // Estado e manipuladores do carrossel removidos (useState, handlePrev, handleNext)

  // Dados separados para a linha superior e linha inferior (exibição estática)
  const topRowEvents = eventsData.slice(0, 2); // Dois primeiros itens para a linha superior
  const bottomRowEvents = eventsData.slice(2); // Itens 3 e 4 para a linha inferior

  // Lógica de exibição do carrossel removida (displayedCarouselEvents, currentPageNumber, totalCarouselPages)

  return (
    // Contêiner da seção com preenchimento e fundo
    <section className="py-12 bg-gray-100"> {/* Fundo alterado para cinza claro como na referência */}
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <h2 className="text-3xl font-light text-center mb-10 text-gray-700 tracking-wider">EVENTOS E NOTÍCIAS</h2> {/* Estilização ajustada para corresponder à referência */}
        
        {/* Contêiner de grade para o layout assimétrico superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Card Grande - Ocupando 2 colunas em telas médias e maiores */}
          <div className="md:col-span-2">
            {topRowEvents[0] && (
              <EventCard
                key={topRowEvents[0].id}
                imageUrl={topRowEvents[0].imageUrl}
                isLarge={topRowEvents[0].isLarge}
                //mainTitle={topRowEvents[0].mainTitle}
                dateText={topRowEvents[0].dateText}
                //hashtag={topRowEvents[0].hashtag}
                buttonLink={topRowEvents[0].buttonLink} // Passar o link
              />
            )}
          </div>
          {/* Card Pequeno - Canto Superior Direito */}
          <div className="md:col-span-1">
            {topRowEvents[1] && (
              <EventCard
                key={topRowEvents[1].id}
                imageUrl={topRowEvents[1].imageUrl}
                isLarge={topRowEvents[1].isLarge}
                buttonLink={topRowEvents[1].buttonLink} // Passar o link
              />
            )}
          </div>
        </div>

        {/* Seção de Grade Estática para a Linha Inferior (Substitui o Carrossel) */}
        {/* Div de wrapper de posicionamento relativo removida */}
        {/* Flex container para a linha inferior */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 3 (Estreito) */}
          {bottomRowEvents[0] && (
            <div className="w-full md:w-1/3"> {/* Largura fixa em telas médias e maiores */}
              <EventCard
                key={bottomRowEvents[0].id}
                imageUrl={bottomRowEvents[0].imageUrl}
                isLarge={bottomRowEvents[0].isLarge}
                buttonLink={bottomRowEvents[0].buttonLink}
              />
            </div>
          )}
          {/* Card 4 (Largo - Ocupa espaço restante) */}
          {bottomRowEvents[1] && (
            <div className="flex-1"> {/* Ocupa o espaço restante */}
              <EventCard
                key={bottomRowEvents[1].id}
                imageUrl={bottomRowEvents[1].imageUrl}
                isLarge={bottomRowEvents[1].isLarge}
                buttonLink={bottomRowEvents[1].buttonLink}
              />
            </div>
          )}
        </div>

        {/* Controles do Carrossel Removidos */}
        {/* A div contendo botões e indicador de página foi removida */}
      </div>
    </section>
  );
};

export default EventsSection;
