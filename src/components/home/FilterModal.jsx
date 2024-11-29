import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const defaultFilters = {
  priceRange: [0, 1000],
  rooms: 1,
  bathrooms: 1,
  propertyType: 'any',
  amenities: [],
};

const FilterModal = ({ isOpen, onClose, onApply, initialFilters }) => {
  // Use initialFilters if provided, otherwise use defaultFilters
  const startingFilters = initialFilters || defaultFilters;

  const [priceRange, setPriceRange] = useState(startingFilters.priceRange);
  const [rooms, setRooms] = useState(startingFilters.rooms);
  const [bathrooms, setBathrooms] = useState(startingFilters.bathrooms);
  const [propertyType, setPropertyType] = useState(startingFilters.propertyType);
  const [amenities, setAmenities] = useState(startingFilters.amenities);

  if (!isOpen) return null;

  const handleApply = () => {
    const filters = {
      priceRange,
      rooms,
      bathrooms,
      propertyType,
      amenities
    };
    onApply(filters);
  };

  const handleClear = () => {
    setPriceRange(defaultFilters.priceRange);
    setRooms(defaultFilters.rooms);
    setBathrooms(defaultFilters.bathrooms);
    setPropertyType(defaultFilters.propertyType);
    setAmenities(defaultFilters.amenities);
    onApply(null); // Clear filters in parent component
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        {/* Price Range Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Price range</h3>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <span className="text-gray-600">Up to ${priceRange[1]}</span>
          </div>
        </div>

        {/* Rooms & Bathrooms Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Rooms and bathrooms</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Bedrooms</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  className="p-2 border rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <span>{rooms}+</span>
                <button
                  onClick={() => setRooms(rooms + 1)}
                  className="p-2 border rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Bathrooms</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                  className="p-2 border rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <span>{bathrooms}+</span>
                <button
                  onClick={() => setBathrooms(bathrooms + 1)}
                  className="p-2 border rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Type Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Property type</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: 'any', label: 'Any' },
              { id: 'house', label: 'House' },
              { id: 'apartment', label: 'Apartment' },
              { id: 'guesthouse', label: 'Guesthouse' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setPropertyType(type.id)}
                className={`p-4 border rounded-xl text-left transition-all
                  ${propertyType === type.id
                    ? 'border-black bg-gray-50'
                    : 'hover:border-gray-400'
                  }`}
              >
                <span className="block font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Amenities</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: 'wifi', label: 'Wifi' },
              { id: 'kitchen', label: 'Kitchen' },
              { id: 'pool', label: 'Pool' },
              { id: 'gym', label: 'Gym' }
            ].map((amenity) => (
              <label
                key={amenity.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={amenities.includes(amenity.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAmenities([...amenities, amenity.id]);
                    } else {
                      setAmenities(amenities.filter(a => a !== amenity.id));
                    }
                  }}
                  className="w-4 h-4"
                />
                <span>{amenity.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center pt-4 border-t">
          <button
            onClick={handleClear}
            className="text-sm font-semibold underline"
          >
            Clear all
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Apply filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
