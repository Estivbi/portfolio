import React, { useState } from 'react';

interface ExpandableCardProps {
  title: string;
  description: string;
  tags: string[];
  content: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, description, tags, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 border-gray-700 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700">
      <div className="p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      {isExpanded && (
        <div className="p-4 border-t border-gray-700">
          <p className="mb-4">{content}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;