// Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="card m2 w-full max-w-none mx-auto p-4">
		  <div className="relative z-10 card-content">
			{children}
		  </div>
		</div>
	  );
};

export default Card;