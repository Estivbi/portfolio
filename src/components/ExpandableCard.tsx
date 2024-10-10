import React, { useState, useRef, useEffect } from 'react';
import ThreeDImage from './ThreeDImage';

interface ExpandableCardProps {
  title: string;
  date: string;
  content: string;
  image: string;
  children: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, date, content, image, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isExpanded]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded && <div className="overlay" onClick={handleCardClick}></div>}
      <div
        ref={cardRef}
        className={`expandable-card ${isExpanded ? 'expanded' : ''} relative bg-gray-500 rounded-lg overflow-hidden transition-all duration-300 ease-in-out`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        style={{
          transform: isExpanded
            ? 'translate(-50%, -50%)'
            : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.2s ease',
          position: isExpanded ? 'fixed' : 'relative',
          top: isExpanded ? '50%' : 'auto',
          left: isExpanded ? '50%' : 'auto',
          width: isExpanded ? '60%' : '300px',
          height: isExpanded ? '90%' : '200px',
          maxWidth: isExpanded ? '600px' : 'none',
          maxHeight: isExpanded ? '800px' : 'none',
          zIndex: isExpanded ? 20 : 'auto',
        }}
      >
        <ThreeDImage src={image} alt={title} />
        <div className="card-content p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-grey-500">{date}</p>
          {isExpanded && (
            <p className="mt-4 transition-opacity duration-300 ease-in-out opacity-100">{content}</p>
          )}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ExpandableCard;