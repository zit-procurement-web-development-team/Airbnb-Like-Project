import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PropertyCard = ({ property, loading }) => {
  if (loading) {
    return (
      <div className="relative animate-pulse">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200" />
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <Skeleton width={120} />
            <Skeleton width={40} />
          </div>
          <Skeleton count={2} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <button className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium z-10">
          Guest favorite
        </button>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium">{property.title}</h4>
          <div className="flex items-center">
            <FiStar className="text-rose-500" />
            <span className="ml-1">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-600">{property.description}</p>
      </div>
    </div>
  );
};

const HotTubProperties = () => {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  // Helper function to get image paths
  const getImagePath = (index) => {
    const imagePaths = [
      'WhatsApp Image 2024-11-25 at 02.11.14(10).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.14(12).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.14(6).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(10).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(11).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(12).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(13).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(15).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(16).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(2).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(3).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(4).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(5).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(7).jpeg',
      'WhatsApp Image 2024-11-25 at 02.11.15(8).jpeg',
      'ptimg1.jpeg'
    ];
    return imagePaths[index % imagePaths.length];
  };

  // Initial 8 properties
  const initialProperties = Array(8).fill({}).map((_, index) => ({
    id: index + 1,
    title: 'Home in Templeton',
    rating: 4.9,
    description: 'The Farm House, Paso Robles | Firepit',
    image: `/assets/propertytourimgs/${getImagePath(index)}`
  }));

  // Additional 8 properties
  const additionalProperties = Array(8).fill({}).map((_, index) => ({
    id: index + 9,
    title: 'Vineyard Estate',
    rating: 4.8,
    description: 'The Farm House, Paso Robles | Firepit',
    image: `/assets/propertytourimgs/${getImagePath(index + 8)}`
  }));

  const handleLoadMore = async () => {
    setLoading(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowMore(true);
    setLoading(false);
  };

  const displayedProperties = showMore
    ? [...initialProperties, ...additionalProperties]
    : initialProperties;

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          House rentals with a hot tub
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              loading={false}
            />
          ))}
          {loading &&
            Array(8)
              .fill(null)
              .map((_, index) => (
                <PropertyCard key={`skeleton-${index}`} loading={true} />
              ))}
        </div>

        {!showMore && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className={`bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition ${
                loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Loading...' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HotTubProperties;
