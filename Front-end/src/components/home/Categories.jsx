import React, { useState, useEffect, useRef } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'; // Left and right arrows

const Categories = ({ categories, handleCategoryClick }) => {
  const scrollContainerRef = useRef(null); // Reference to the scroll container
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track if it's a small screen
  const [startIndex, setStartIndex] = useState(0); // Used to manage which categories are visible for small screens
  const [itemsToShow, setItemsToShow] = useState(10); // Default to 10 items for desktop screens

  // Check screen width and set isSmallScreen on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 887); // Detect if the screen is small
      if (width < 640) {
        setItemsToShow(2); // Mobile screens
      } else if (width < 768) {
        setItemsToShow(4); // Small tablet screens
      } else if (width < 1024) {
        setItemsToShow(6); // Medium-sized tablets or small desktops
      } else {
        setItemsToShow(10); // Desktop screens
      }
    };

    // Initial check on mount
    window.addEventListener('resize', handleResize);
    handleResize(); // Trigger resize check on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle left and right button clicks for smaller screens
  const handleMoveLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleMoveRight = () => {
    if (startIndex < categories.length - itemsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="relative">
      {/* Categories Grid */}
      <div
        ref={scrollContainerRef}
        className={`flex ${isSmallScreen ? 'overflow-x-auto' : 'flex-wrap'} transition duration-300`}
      >
        {categories.slice(startIndex, startIndex + itemsToShow).map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-md whitespace-nowrap"
          >
            <p className=" text-gray-800 text-sm font-semibold">{category}</p>
          </div>
        ))}
      </div>

      {/* Left scroll button (only for small screens) */}
      {isSmallScreen && startIndex > 0 && (
        <div
          onClick={handleMoveLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg cursor-pointer hover:opacity-80"
        >
          <TfiAngleLeft className="text-white text-3xl" />
        </div>
      )}

      {/* Right scroll button (only for small screens) */}
      {isSmallScreen && startIndex < categories.length - itemsToShow && (
        <div
          onClick={handleMoveRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg cursor-pointer hover:opacity-80"
        >
          <TfiAngleRight className="text-white text-3xl" />
        </div>
      )}
    </div>
  );
};

export default Categories;
