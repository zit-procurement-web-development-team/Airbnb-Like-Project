import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from '/assets/images/STARRWAY-02.png';

const Header = ({ onFiltersClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section
      const heroSection = document.querySelector('.hero-section');
      const heroHeight = heroSection?.offsetHeight || 0;
      
      // Show the scrolled header after the hero section
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial Header (shown at the top)
  const InitialHeader = () => (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="STAR WAY" 
            className=""
            width={100}
          />
        </div>

        {/* Airbnb your place button */}
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
          Airbnb your place
        </button>
      </div>
    </div>
  );

  // Scrolled Header (shown after scrolling past hero)
  const ScrolledHeader = () => (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo}  
            alt="STAR WAY" 
            width={100}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
            Airbnb your place
          </button>
          <button 
            onClick={onFiltersClick}
            className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition flex items-center gap-2"
          >
            <FiSearch className="w-4 h-4" />
            Start your search
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Initial Header (always visible at top) */}
      <header className="absolute top-0 left-0 w-full z-40 py-6">
        <InitialHeader />
      </header>

      {/* Scrolled Header (appears after hero section) */}
      <header 
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="py-4">
          <ScrolledHeader />
        </div>
      </header>
    </>
  );
};

export default Header;
