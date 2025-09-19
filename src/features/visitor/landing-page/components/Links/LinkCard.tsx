import React from 'react';

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, url }) => {
  const handleClick = () => {
    if (url.startsWith('/')) {
      // Internal route
      window.location.href = url;
    } else {
      // External URL
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    // Adjusted background, padding, and removed shadow to match the image
    <div className="bg-zinc-200/70 p-4 rounded-lg">
      <div className="flex items-start">
        <div>
          {/* Adjusted title size, weight, and color */}
          <h3 className="text-base font-medium text-gray-800">{title}</h3>
          {/* Adjusted description size, color, and margin */}
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {/* Adjusted link size, color, and margin */}
          <button 
            onClick={handleClick}
            className="text-sm text-blue-500 hover:text-blue-600 mt-2 inline-block cursor-pointer"
          >
            Ver site
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;

