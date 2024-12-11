import React, { useState } from 'react';
import { FiX, FiShare, FiCalendar, FiUsers, FiBox, FiHome } from 'react-icons/fi';
import WishlistButton from './WishlistButton';
import { useProperty } from '../../context/PropertyContext';

const PropertyDetails = ({ property, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { state, setSelectedProperty } = useProperty();
  
  const handleClose = () => {
    setSelectedProperty(null);
    onClose();
  };

  const amenities = [
    { icon: FiHome, label: 'Entire home' },
    { icon: FiUsers, label: `${property.maxGuests} guests` },
    { icon: FiBox, label: `${property.bedrooms} bedrooms` },
    { icon: FiCalendar, label: 'Self check-in' }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10 px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <FiX className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-full">
            <FiShare className="w-5 h-5" />
            <span>Share</span>
          </button>
          <WishlistButton propertyId={property.id} />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={property.images[selectedImage]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 
                ${selectedImage === index ? 'border-rose-500' : 'border-transparent'}`}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold mb-4">{property.title}</h1>
            <div className="flex flex-wrap gap-4 mb-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <span>{amenity.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="prose max-w-none">
              <p>{property.description}</p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-start-3">
            <div className="sticky top-24 bg-white rounded-xl border p-6 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-2xl font-semibold">${property.price}</span>
                  <span className="text-gray-600"> / night</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">★ {property.rating}</span>
                  <span className="text-gray-600 text-sm">({property.reviews} reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="border rounded-lg p-3">
                  <div className="text-xs font-medium">CHECK-IN</div>
                  <div>Add date</div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="text-xs font-medium">CHECKOUT</div>
                  <div>Add date</div>
                </div>
                <div className="col-span-2 border rounded-lg p-3">
                  <div className="text-xs font-medium">GUESTS</div>
                  <div>1 guest</div>
                </div>
              </div>

              <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;