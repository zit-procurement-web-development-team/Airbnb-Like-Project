import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const WishlistButton = ({ propertyId }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleWishlist = () => {
    setIsAnimating(true);
    setIsWishlisted(!isWishlisted);
    
    // Store in localStorage
    const wishlisted = JSON.parse(localStorage.getItem('wishlisted') || '[]');
    if (!isWishlisted) {
      localStorage.setItem('wishlisted', JSON.stringify([...wishlisted, propertyId]));
    } else {
      localStorage.setItem('wishlisted', JSON.stringify(wishlisted.filter(id => id !== propertyId)));
    }

    // Reset animation
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleWishlist}
      className={`absolute top-3 right-3 z-10 p-2 rounded-full 
        ${isWishlisted ? 'bg-rose-500' : 'bg-white'} 
        transition-all duration-300 hover:scale-110
        ${isAnimating ? 'animate-pulse' : ''}`}
    >
      <FiHeart
        className={`text-xl ${isWishlisted ? 'text-white fill-current' : 'text-gray-600'}`}
      />
    </button>
  );
};

export default WishlistButton;