import React from 'react';
import { motion } from 'framer-motion';

const starVariants = {
  initial: { opacity: 0, x: 0, y: 0 },
  animate: { opacity: 1, x: 200, y: 200 },
  exit: { opacity: 0, x: 200, y: 400 },
};

const BackgroundMotion: React.FC = () => {
  const stars = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star}
          className="absolute bg-green-500 rounded-full"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
			boxShadow: '0 0 10px 2px rgba(0, 255, 0, 0.5)', // Efecto de brillo
            transform: 'rotate(45deg)', // Rotar para dar efecto
          }}
          variants={starVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundMotion;