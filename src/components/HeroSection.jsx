import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import house from '/assets/images/beach1.webp';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!location || !checkIn || !checkOut) {
      alert('Please fill in all fields');
      return;
    }

    setIsSearching(true);
    try {
      // Simulate search delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Searching for:', { location, checkIn, checkOut });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="relative pt-20 lg:pt-24 pb-10 lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Search Interface */}
          <div className="w-full lg:w-2/5 lg:pr-8 z-10 ">
            <div className="bg-white p-6 rounded-2xl shadow-lg lg:translate-x-4">
              <h2 className="text-3xl font-bold mb-3">
                House vacation rentals in Paso Robles
              </h2>
              <p className="text-gray-600 mb-6">
                Find and book unique houses on Airbnb
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <DatePicker
                      selected={checkIn}
                      onChange={date => setCheckIn(date)}
                      selectsStart
                      startDate={checkIn}
                      endDate={checkOut}
                      minDate={new Date()}
                      placeholderText="Check in"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative flex-1">
                    <DatePicker
                      selected={checkOut}
                      onChange={date => setCheckOut(date)}
                      selectsEnd
                      startDate={checkIn}
                      endDate={checkOut}
                      minDate={checkIn || new Date()}
                      placeholderText="Check out"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className={`w-full bg-rose-500 text-white py-4 rounded-lg hover:bg-rose-600 transition flex items-center justify-center gap-2 ${
                    isSearching ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <FiSearch className="text-xl" />
                  {isSearching ? 'Searching...' : 'Search'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Large Image */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0 right-0">
            <div className="relative h-[300px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={house}
                alt="Paso Robles Vacation Rental"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
