import React, { useState } from "react";
import { FiX, FiMinus, FiPlus, FiBox, FiDroplet, FiHome } from "react-icons/fi";
import ReactSlider from "react-slider";

const SearchFilters = ({ isOpen, onClose, onApply }) => {
  const [priceRange, setPriceRange] = useState([50, 1000]);
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [propertyType, setPropertyType] = useState("all");

  const handleGuestChange = (type, increment) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(
        type === "adults" ? 1 : 0,
        Math.min(16, prev[type] + increment)
      ),
    }));
  };

  const propertyTypes = [
    { id: "all", label: "All", icon: FiHome },
    { id: "house", label: "House", icon: FiHome },
    { id: "apartment", label: "Apartment", icon: FiHome },
    { id: "guesthouse", label: "Guesthouse", icon: FiHome },
  ];

  const handleApply = () => {
    onApply({
      priceRange,
      guests,
      bedrooms,
      bathrooms,
      propertyType,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX className="w-5 h-5" />
          </button>
          <h2 className="font-semibold">Filters</h2>
          <div className="w-9" /> {/* Spacer for alignment */}
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-4">Price range</h3>
            <ReactSlider
              className="h-2 bg-gray-200 rounded-full"
              thumbClassName="w-6 h-6 bg-white border-2 border-rose-500 rounded-full -mt-2 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              trackClassName="h-2 bg-rose-500 rounded-full"
              value={priceRange}
              onChange={setPriceRange}
              min={0}
              max={2000}
            />
            <div className="flex justify-between mt-4">
              <div className="border rounded-lg p-3">
                <div className="text-xs font-medium text-gray-500">Minimum</div>
                <div>${priceRange[0]}</div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="text-xs font-medium text-gray-500">Maximum</div>
                <div>${priceRange[1]}</div>
              </div>
            </div>
          </div>

          {/* Guests */}
          <div>
            <h3 className="font-medium mb-4">Guests</h3>
            <div className="space-y-4">
              {[
                { type: "adults", label: "Adults", subtitle: "Ages 13 or above" },
                { type: "children", label: "Children", subtitle: "Ages 2-12" },
                { type: "infants", label: "Infants", subtitle: "Under 2" },
              ].map(({ type, label, subtitle }) => (
                <div
                  key={type}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <div className="font-medium">{label}</div>
                    <div className="text-sm text-gray-500">{subtitle}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleGuestChange(type, -1)}
                      className="p-2 border rounded-full hover:border-gray-400 disabled:opacity-50"
                      disabled={
                        type === "adults"
                          ? guests[type] <= 1
                          : guests[type] <= 0
                      }
                    >
                      <FiMinus />
                    </button>
                    <span className="w-6 text-center">{guests[type]}</span>
                    <button
                      onClick={() => handleGuestChange(type, 1)}
                      className="p-2 border rounded-full hover:border-gray-400"
                      disabled={guests[type] >= 16}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rooms */}
          <div>
            <h3 className="font-medium mb-4">Rooms and beds</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Bedrooms",
                  value: bedrooms,
                  onChange: setBedrooms,
                  icon: FiBox,
                },
                {
                  label: "Bathrooms",
                  value: bathrooms,
                  onChange: setBathrooms,
                  icon: FiDroplet,
                },
              ].map(({ label, value, onChange, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">{label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onChange(value - 1)}
                      className="p-2 border rounded-full hover:border-gray-400"
                      disabled={value <= 1}
                    >
                      <FiMinus />
                    </button>
                    <span className="w-6 text-center">{value}</span>
                    <button
                      onClick={() => onChange(value + 1)}
                      className="p-2 border rounded-full hover:border-gray-400"
                      disabled={value >= 8}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h3 className="font-medium mb-4">Property type</h3>
            <div className="grid grid-cols-2 gap-4">
              {propertyTypes.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setPropertyType(id)}
                  className={`p-4 border rounded-xl flex items-center gap-3 hover:border-gray-400 ${
                    propertyType === id ? "border-rose-500" : ""
                  }`}
                >
                  <Icon className="w-6 h-6 text-gray-600" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t p-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="font-medium underline hover:text-gray-600"
          >
            Clear all
          </button>
          <button
            onClick={handleApply}
            className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600"
          >
            Show results
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
