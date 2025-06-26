import React from 'react';
import LinkCard from './LinkCard';

const LinksSection: React.FC = () => {  const links = [
    { id: 1, title: 'Portal SENAI', description: 'Acesse o portal oficial do SENAI' },
    { id: 2, title: 'Processo Seletivo', description: 'Inscreva-se nos nossos cursos' },
    { id: 3, title: 'FIEB', description: 'Federação das Indústrias da Bahia' },
    { id: 4, title: 'SENAI EAD', description: 'Cursos online e ensino à distância' },
    { id: 5, title: 'Biblioteca Digital', description: 'Acervo digital de livros e materiais' },
    { id: 6, title: 'Mundo SENAI', description: 'Competições e olimpíadas do conhecimento' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">OUTROS LINKS</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {links.map(link => (
            <LinkCard 
              key={link.id}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
