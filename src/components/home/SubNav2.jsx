import React, { useState, useRef, useEffect } from "react";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { FaFilter } from "react-icons/fa";
import FilterModal from './FilterModal';

const propertyTypes = [
  { id: 'trending', label: 'Trending', icon: '🔥' },
  { id: 'beachfront', label: 'Beachfront', icon: '🏖' },
  { id: 'amazing_pools', label: 'Amazing pools', icon: '🏊‍♂️' },
  { id: 'islands', label: 'Islands', icon: '🏝' },
  { id: 'amazing-views', label: 'Amazing views', icon: '🏔' },
  { id: 'tiny-homes', label: 'Tiny homes', icon: '🏡' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'camping', label: 'Camping', icon: '⛺' },
  { id: 'arctic', label: 'Arctic', icon: '❄️' },
  { id: 'caves', label: 'Caves', icon: '🗿' },
  { id: 'surfing', label: 'Surfing', icon: '🏄‍♂️' },
  { id: 'lakefront', label: 'Lakefront', icon: '🌊' },
  { id: 'skiing', label: 'Skiing', icon: '⛷' },
  { id: 'castles', label: 'Castles', icon: '🏰' },
  { id: 'countryside', label: 'Countryside', icon: '🌳' },
  { id: 'luxe', label: 'Luxe', icon: '✨' },
  { id: 'vineyard', label: 'Vineyard', icon: '🍷' },
  { id: 'historical', label: 'Historical', icon: '🏛' }
];

const SubNav2 = ({ onFiltersChange, onTypeChange, selectedType }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState(null);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleFilterApply = (filters) => {
    setActiveFilters(filters);
    onFiltersChange(filters);
    setShowFilterModal(false);
  };

  const handleTypeClick = (typeId) => {
    onTypeChange(typeId === selectedType ? null : typeId);
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative border-t border-gray-200">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex items-center justify-between py-3 my-2 md:py-4 md:my-3">
          <div className="relative flex-1 max-w-[calc(100%-120px)]">
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition hidden md:flex items-center justify-center"
              >
                <TfiAngleLeft size={12} />
              </button>
            )}
            
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide relative"
              onScroll={checkScrollButtons}
            >
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeClick(type.id)}
                  className={`flex flex-col items-center min-w-fit pb-1 md:pb-2 border-b-2 transition-all ${
                    selectedType === type.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-black'
                  }`}
                >
                  <span className="text-xl md:text-2xl mb-1">{type.icon}</span>
                  <span className="text-[10px] md:text-xs whitespace-nowrap">{type.label}</span>
                </button>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition hidden md:flex items-center justify-center"
              >
                <TfiAngleRight size={12} />
              </button>
            )}
          </div>

          <div className="ml-4 flex-shrink-0">
            <button
              onClick={() => setShowFilterModal(true)}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 border rounded-lg hover:shadow-md transition ${
                activeFilters ? 'border-black' : 'border-gray-200'
              }`}
            >
              <FaFilter size={12} className="md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">Filters</span>
            </button>
          </div>
        </div>
      </div>

      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onApply={handleFilterApply}
        initialFilters={activeFilters}
      />
    </div>
  );
};

export default SubNav2;
