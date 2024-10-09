import React, { useState, useRef, useEffect } from 'react';

interface HoloCardProps {
  children: React.ReactNode;
  title: string;
  date: string;
  content: string;
}

const HoloCard: React.FC<HoloCardProps> = ({ children, title, date, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const customStyle: React.CSSProperties & { [key: string]: string | number } = {
    '--m-x': `${mousePosition.x}%`,
    '--m-y': `${mousePosition.y}%`,
    '--r-x': '0deg',
    '--r-y': '0deg',
    '--bg-x': `${mousePosition.x / 2}%`,
    '--bg-y': `${mousePosition.y / 2}%`,
    '--duration': '500ms',
    '--foil-size': '100%',
    '--opacity': isExpanded ? '0.6' : '0',
    '--radius': '48px',
    '--easing': 'ease',
    '--transition': 'var(--duration) var(--easing)',
  };

  return (
    <li className="flex flex-col items-center cursor-pointer" style={{ opacity: 1 }}>
      <button
        ref={cardRef}
        className="rounded-[48px]"
        aria-label={`View ${title} details`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          style={customStyle}
          className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-[320px] [aspect-ratio:17/21]"
        >
          <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border outline outline-[1px] outline-black hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden opacity-95 hover:opacity-100">
            <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
              <div className="h-full w-full bg-card flex flex-col items-center justify-center">
                <div className="w-12 h-12" style={{ opacity: 1 }}>
                  {children}
                </div>
                <p className="text-white font-bold text-xl mt-4" style={{ opacity: 1 }}>
                  {title}
                </p>
                <p className="absolute bottom-4 text-foreground/50 text-xs" style={{ opacity: 1 }}>
                  {date}
                </p>
                <p className="visually-hidden" aria-hidden="true">
                  {content}
                </p>
              </div>
            </div>
            <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]"></div>
          </div>
        </div>
      </button>
      {isExpanded && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <p>{content}</p>
        </div>
      )}
    </li>
  );
};

export default HoloCard;