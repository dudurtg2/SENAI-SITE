import React from 'react';

interface LinkCardProps {
  title: string;
  description: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description }) => {
  return (
    // Adjusted background, padding, and removed shadow to match the image
    <div className="bg-zinc-200/70 p-4 rounded-lg">
      <div className="flex items-start">
        {/* Adjusted icon color, size, rounding, and margin */}
        <div className="bg-slate-900 w-10 h-10 rounded-md flex-shrink-0 mr-3 mt-1"></div>
        <div>
          {/* Adjusted title size, weight, and color */}
          <h3 className="text-base font-medium text-gray-800">{title}</h3>
          {/* Adjusted description size, color, and margin */}
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {/* Adjusted link size, color, and margin */}
          <a href="#" className="text-sm text-blue-500 hover:text-blue-600 mt-2 inline-block">Ver site</a>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;

