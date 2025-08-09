import React from 'react';
import LinkCard from './LinkCard';

const LinksSection: React.FC = () => {
  const links = [
    { 
      id: 1, 
      title: 'SENAI Bahia', 
      description: 'Portal oficial do SENAI Bahia com informações sobre cursos e serviços',
      url: 'https://www.senaibahia.com.br/'
    },
    { 
      id: 2, 
      title: 'SENAI CIMATEC', 
      description: 'Centro de Inovação e Tecnologia em Manufatura Avançada e Robótica',
      url: 'http://www.senaicimatec.com.br/'
    },
    { 
      id: 3, 
      title: 'FIEB', 
      description: 'Federação das Indústrias do Estado da Bahia',
      url: 'https://www.fieb.org.br/'
    },
    { 
      id: 4, 
      title: 'Portal Educacional', 
      description: 'Acesso ao sistema educacional do SENAI para estudantes',
      url: 'https://senaiweb6.fieb.org.br/framehtml/web/app/edu/PortalEducacional/login/'
    },
    { 
      id: 5, 
      title: 'Portal do Professor', 
      description: 'Sistema exclusivo para professores e educadores',
      url: 'https://senaiweb6.fieb.org.br/FrameHTML/web/app/Edu/PortalDoProfessor/#/login'
    },
    { 
      id: 6, 
      title: 'Sobre o Projeto', 
      description: 'Conheça mais sobre este projeto desenvolvido por alunos para alunos',
      url: '/sobre-projeto'
    },
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
              url={link.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
