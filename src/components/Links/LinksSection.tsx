import React from 'react';
import LinkCard from './LinkCard';

const LinksSection: React.FC = () => {
  const links = [
    { id: 1, title: 'Nome do site', description: 'Breve descrição do site' },
    { id: 2, title: 'Nome do site', description: 'Breve descrição do site' },
    { id: 3, title: 'Nome do site', description: 'Breve descrição do site' },
    { id: 4, title: 'Nome do site', description: 'Breve descrição do site' },
    { id: 5, title: 'Nome do site', description: 'Breve descrição do site' },
    { id: 6, title: 'Nome do site', description: 'Breve descrição do site' },
    //{ id: 7, title: 'Nome do site', description: 'Breve descrição do site' },
    //{ id: 8, title: 'Nome do site', description: 'Breve descrição do site' },
    //{ id: 9, title: 'Nome do site', description: 'Breve descrição do site' }
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
