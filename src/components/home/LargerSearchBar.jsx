import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { format } from 'date-fns';
import FilterModal from './FilterModal';
import Calendar from './Calendar';

const LargerSearchBar = ({
  onSearch,
  className = "",
  searchQuery,
  setSearchQuery,
  guestCount,
  setGuestCount,
  selectedDates,
  setSelectedDates,
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const searchBarRef = useRef(null);

  const formatDate = (date) => {
    if (!date) return '';
    return format(date, 'MMM d');
  };

  const getDisplayText = (text, maxLength) => {
    if (!text) return '';
    return window.innerWidth <= 768 && text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  const handleFilterApply = (filters) => {
    console.log('Applied filters:', filters);
    // Implement your filter logic here
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setActiveSection(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative" ref={searchBarRef}>
        {/* Main search bar */}
        <div className={`flex items-center ${className}`}>
          <div className="flex-1 flex items-center h-[66px] rounded-full border border-gray-200 bg-white divide-x">
            {/* Location */}
            <button
              onClick={() => setActiveSection('location')}
              className={`flex-1 flex flex-col items-start px-8 py-2 rounded-l-full hover:bg-gray-100 transition
                ${activeSection === 'location' ? 'bg-gray-100' : ''}`}
            >
              <span className="text-xs font-semibold md:text-sm">Where</span>
              <span className="text-sm text-gray-500 md:text-base hidden md:block">
                {getDisplayText(searchQuery || 'Search destinations', 15)}
              </span>
            </button>

            {/* Check-in */}
            <button
              onClick={() => setActiveSection('checkin')}
              className={`flex-1 flex flex-col items-start px-8 py-2 hover:bg-gray-100 transition
                ${activeSection === 'checkin' ? 'bg-gray-100' : ''}`}
            >
              <span className="text-xs font-semibold md:text-sm">Check in</span>
              <span className="text-sm text-gray-500 md:text-base hidden md:block">
                {getDisplayText(selectedDates?.from ? formatDate(selectedDates.from) : 'Add dates', 10)}
              </span>
            </button>

            {/* Check-out */}
            <button
              onClick={() => setActiveSection('checkout')}
              className={`flex-1 flex flex-col items-start px-8 py-2 hover:bg-gray-100 transition
                ${activeSection === 'checkout' ? 'bg-gray-100' : ''}`}
            >
              <span className="text-xs font-semibold md:text-sm">Check out</span>
              <span className="text-sm text-gray-500 md:text-base hidden md:block">
                {getDisplayText(selectedDates?.to ? formatDate(selectedDates.to) : 'Add dates', 10)}
              </span>
            </button>

            {/* Guests */}
            <button
              onClick={() => setActiveSection('guests')}
              className={`flex-1 flex flex-col items-start px-8 py-2 hover:bg-gray-100 transition
                ${activeSection === 'guests' ? 'bg-gray-100' : ''}`}
            >
              <span className="text-xs font-semibold md:text-sm">Who</span>
              <span className="text-sm text-gray-500 md:text-base hidden md:block">
                {getDisplayText(`${guestCount} guest${guestCount > 1 ? 's' : ''}`, 12)}
              </span>
            </button>

            {/* Search Button */}
            <div className="pr-2">
              <button
                onClick={onSearch}
                className="h-12 px-4 flex items-center gap-2 bg-[#FF385C] rounded-full text-white hover:bg-[#D70466] transition"
              >
                <FaSearch className="h-4 w-4" />
                <span className="font-medium hidden md:block">Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dropdowns */}
        {activeSection && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-25 z-[1001]" onClick={() => setActiveSection(null)} />
            
            {/* Dropdown Content */}
            <div className="absolute left-0 right-0 top-[calc(100%+12px)] bg-white rounded-3xl shadow-[0_0_0_1px_rgb(0,0,0,0.04),0_8px_16px_rgb(0,0,0,0.15)] overflow-hidden z-[1002]">
              {/* Location dropdown */}
              {activeSection === 'location' && (
                <div className="bg-white rounded-3xl shadow-[0_0_0_1px_rgb(0,0,0,0.04),0_8px_16px_rgb(0,0,0,0.15)] overflow-hidden">
                  <div className="p-8 max-h-[60vh] overflow-y-auto">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold">Popular destinations</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {['London', 'Paris', 'New York', 'Tokyo', 'Dubai', 'Singapore'].map((city) => (
                          <button
                            key={city}
                            onClick={() => setSearchQuery(city)}
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                            <span className="font-medium">{city}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Calendar dropdown */}
              {(activeSection === 'checkin' || activeSection === 'checkout') && (
                <div className="bg-white rounded-3xl shadow-[0_0_0_1px_rgb(0,0,0,0.04),0_8px_16px_rgb(0,0,0,0.15)] overflow-hidden">
                  <div className="p-8">
                    <div className="flex justify-center">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-center">Select dates</h3>
                        <Calendar
                          selectedRange={selectedDates}
                          onSelect={(range) => {
                            setSelectedDates(range || { from: null, to: null });
                            if (range?.to) {
                              setActiveSection(null);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Guests dropdown */}
              {activeSection === 'guests' && (
                <div className="bg-white rounded-3xl shadow-[0_0_0_1px_rgb(0,0,0,0.04),0_8px_16px_rgb(0,0,0,0.15)] overflow-hidden">
                  <div className="p-8 w-[400px]">
                    <div className="space-y-6">
                      {/* Adults */}
                      <div className="flex items-center justify-between pb-6 border-b">
                        <div>
                          <h3 className="font-semibold">Adults</h3>
                          <p className="text-sm text-gray-500">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setGuestCount(guestCount - 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={guestCount <= 1}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{guestCount}</span>
                          <button
                            onClick={() => setGuestCount(guestCount + 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between pb-6 border-b">
                        <div>
                          <h3 className="font-semibold">Children</h3>
                          <p className="text-sm text-gray-500">Ages 2-12</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition disabled:opacity-50"
                            disabled
                          >
                            -
                          </button>
                          <span className="w-8 text-center">0</span>
                          <button
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Infants</h3>
                          <p className="text-sm text-gray-500">Under 2</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition disabled:opacity-50"
                            disabled
                          >
                            -
                          </button>
                          <span className="w-8 text-center">0</span>
                          <button
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onApply={handleFilterApply}
      />
    </>
  );
};

export default LargerSearchBar;