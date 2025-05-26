import React from 'react';

interface BannerProps {
  // Propriedades do componente, se necessário
}

const Banner: React.FC<BannerProps> = () => {
  return (
    <section className="w-full relative">
      <div className="container mx-auto">
        <div className="relative">
          {/* Banner principal com imagem de fundo */}
          <div className="w-full h-[400px] bg-gray-300 relative overflow-hidden">
            {/* Imagem principal do banner */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={require('../../assets/images/Imagens/001-Comunidade Maker.jpg')} 
                alt="Estudantes colaborando" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Textos verticais nas laterais */}
            <div className="absolute left-0 top-0 h-full flex items-center">
              <div className="transform -rotate-90 origin-top-left translate-y-16 text-white font-semibold bg-black/30 px-4 py-1">
                Bibliossssteca Maker
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full flex items-center">
              <div className="transform -rotate-90 origin-top-right translate-y-16 translate-x-10 text-white font-semibold bg-black/30 px-4 py-1">
                Lab Maker
              </div>
            </div>
            <div className="absolute left-0 top-0 h-full flex items-center">
              <div className="transform -rotate-90 origin-top-left translate-y-16 text-white font-semibold bg-black/30 px-4 py-1">
                R      epositórios de Projeto     s
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full flex items-center">
              <div className="transform -rotate-90 origin-top-right translate-y-16 translate-x-10 text-white font-semibold bg-black/30 px-4 py-1">
                Comunidade Maker
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
