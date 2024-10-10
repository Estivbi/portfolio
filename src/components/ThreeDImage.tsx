import { useState, useRef } from 'react';
import type { FunctionComponent } from 'react';

interface ThreeDImageProps {
  src: string;
  alt: string;
}

const ThreeDImage: FunctionComponent<ThreeDImageProps> = ({ src, alt }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={imageRef}
      className="relative w-64 h-64 mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-full"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s',
		  opacity: 0.8
        }}
      />
    </div>
  );
};

export default ThreeDImage;