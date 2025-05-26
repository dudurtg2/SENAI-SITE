import React from 'react';

interface LinkCardProps {
  title: string;
  description: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="bg-blue-800 w-6 h-6 rounded-sm flex-shrink-0 mr-3"></div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-600 mt-1">{description}</p>
          <a href="#" className="text-xs text-blue-600 mt-2 inline-block">Ver site</a>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
