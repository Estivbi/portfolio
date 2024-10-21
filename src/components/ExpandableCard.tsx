import React, { useState, useRef, useEffect } from "react";

interface ExpandableCardProps {
  title: string;
  date: string;
  content: string;
  image: string;
  link: string;
  technologies: string[];
  children: React.ReactNode;
  onClick: () => void;
  isExpanded: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  date,
  content,
  image,
  link,
  technologies,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
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
        className={`expandable-card ${isExpanded ? 'expanded' : ''} relative bg-black rounded-lg overflow-hidden transition-all duration-300 ease-in-out`}
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
          width: isExpanded ? '80%' : '300px',
          height: isExpanded ? '90%' : '200px',
          maxWidth: isExpanded ? '600px' : 'none',
          maxHeight: isExpanded ? '800px' : 'none',
          zIndex: isExpanded ? 20 : 'auto',
          overflowY: isExpanded ? 'auto' : 'hidden', 
          padding: isExpanded ? '16px' : '0', 
          background: isExpanded
            ? 'black' 
            : 'none', 
          borderRadius: '20px',
          border: isExpanded
            ? '5px solid rgba(255, 255, 255, 0.2)' 
            : '2px solid rgba(255, 255, 255, 0.4)', 
          boxSizing: 'border-box',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="card-content p-4" style={{ maxHeight: '100%', overflowY: 'auto' }}>
          {isExpanded && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt="Imagen logo"
                className="mx-auto mb-8 mt-4 object-contain cursor-pointer hover:opacity-80 hover:border-2 hover:border-blue-500"
                style={{ display: 'block', maxHeight: '50vh', maxWidth: '100%' }} 
              />
            </a>
          )}
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-grey-500">{date}</p>
          {isExpanded && technologies && (
            <div className="technologies-section mt-4">
              <div className="flex flex-wrap gap-3 mt-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-500 text-white py-1 px-3 rounded-lg text-sm"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {isExpanded && (
            <p className="mt-4 transition-opacity duration-300 ease-in-out opacity-100 whitespace-pre-line">
              {content}
            </p>
          )}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ExpandableCard;
