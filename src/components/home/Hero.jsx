import React, { useState, useEffect } from 'react';
import Card from './Cards';
import TrendingCard from './cards/TrendingCard';
import BeachfrontCard from './cards/BeachfrontCard';
import AmazingPoolCard from './cards/AmazingPoolCard';
import image1 from "/assets/images/card1.jpg";
import image2 from "/assets/images/beach1.webp";
import image3 from "/assets/images/beach2.webp";
import image4 from "/assets/images/beach3.webp";
import image5 from "/assets/images/beach4.webp";

const placesData = [
  { 
    id: 1,
    date: "02 May - 4 Jan",
    cost: "$44 USD",
    price: 44,
    location: "Freetown, Sierra Leone",
    hostname: "Victoria",
    images: [image1, image2, image3, image4, image5],
    rooms: 2,
    bathrooms: 1,
    type: 'trending',
    amenities: ['wifi', 'kitchen']
  },
  { 
    id: 2,
    date: "02 Mar - 4 Feb",
    cost: "$64 USD",
    price: 64,
    location: "Abuja, Nigeria",
    hostname: "Thompson",
    images: [image5, image4, image3, image2, image1],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
  { 
    id: 3,
    date: "15 Apr - 15 Jun",
    cost: "$88 USD",
    price: 88,
    location: "Accra, Ghana",
    hostname: "Kwame",
    images: [image2, image1, image3, image4, image5],
    rooms: 4,
    bathrooms: 2,
    type: 'amazing_pools',
    amenities: ['wifi', 'pool', 'kitchen', 'gym']
  },
  { 
    id: 4,
    date: "01 Jul - 15 Aug",
    cost: "$120 USD",
    price: 120,
    location: "Lagos, Nigeria",
    hostname: "Ademola",
    images: [image3, image2, image1, image4, image5],
    rooms: 2,
    bathrooms: 1,
    type: 'trending',
    amenities: ['wifi', 'kitchen']
  },
  { 
    id: 5,
    date: "10 May - 20 Aug",
    cost: "$100 USD",
    price: 100,
    location: "Monrovia, Liberia",
    hostname: "Ellen",
    images: [image1, image2, image3, image4, image5],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
  { 
    id: 6,
    date: "18 Feb - 28 Apr",
    cost: "$150 USD",
    price: 150,
    location: "Nairobi, Kenya",
    hostname: "Mwangi",
    images: [image1, image2, image3, image4, image5],
    rooms: 4,
    bathrooms: 2,
    type: 'amazing_pools',
    amenities: ['wifi', 'pool', 'kitchen', 'gym']
  },
  { 
    id: 7,
    date: "22 Apr - 30 May",
    cost: "$55 USD",
    price: 55,
    location: "Dakar, Senegal",
    hostname: "Omar",
    images: [image1, image2, image3, image4, image5],
    rooms: 2,
    bathrooms: 1,
    type: 'trending',
    amenities: ['wifi', 'kitchen']
  },
  { 
    id: 8,
    date: "14 Jan - 20 Mar",
    cost: "$75 USD",
    price: 75,
    location: "Mombasa, Kenya",
    hostname: "Amina",
    images: [image1, image2, image3, image4, image5],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
  { 
    id: 9,
    date: "01 Mar - 10 May",
    cost: "$40 USD",
    price: 40,
    location: "Lome, Togo",
    hostname: "Femi",
    images: [image1, image2, image3, image4, image5],
    rooms: 2,
    bathrooms: 1,
    type: 'trending',
    amenities: ['wifi', 'kitchen']
  },
  { 
    id: 10,
    date: "02 Dec - 05 Feb",
    cost: "$90 USD",
    price: 90,
    location: "Banjul, Gambia",
    hostname: "Salifu",
    images: [image4, image2, image3, image5, image1],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
  { 
    id: 11,
    date: "11 Jan - 05 Apr",
    cost: "$130 USD",
    price: 130,
    location: "Cotonou, Benin",
    hostname: "Marcel",
    images: [image1, image2, image3, image4, image5],
    rooms: 4,
    bathrooms: 2,
    type: 'amazing_pools',
    amenities: ['wifi', 'pool', 'kitchen', 'gym']
  },
  { 
    id: 12,
    date: "17 Jul - 20 Sep",
    cost: "$110 USD",
    price: 110,
    location: "Conakry, Guinea",
    hostname: "Saidou",
    images: [image1, image2, image3, image4, image5],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
  { 
    id: 13,
    date: "19 Mar - 15 May",
    cost: "$95 USD",
    price: 95,
    location: "Abidjan, Ivory Coast",
    hostname: "Kwasi",
    images: [image1, image2, image3, image4, image5],
    rooms: 2,
    bathrooms: 1,
    type: 'trending',
    amenities: ['wifi', 'kitchen']
  },
  { 
    id: 14,
    date: "12 Jan - 03 Mar",
    cost: "$60 USD",
    price: 60,
    location: "Lagos, Nigeria",
    hostname: "Ngozi",
    images: [image1, image2, image3, image4, image5],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
  { 
    id: 15,
    date: "01 Jun - 25 Oct",
    cost: "$120 USD",
    price: 120,
    location: "Accra, Ghana",
    hostname: "Kojo",
    images: [image1, image2, image3, image4, image5],
    rooms: 4,
    bathrooms: 2,
    type: 'amazing_pools',
    amenities: ['wifi', 'pool', 'kitchen', 'gym']
  },
  { 
    id: 16,
    date: "04 Apr - 28 Jul",
    cost: "$150 USD",
    price: 150,
    location: "Harare, Zimbabwe",
    hostname: "Tariro",
    images: [image1, image2, image3, image4, image5],
    rooms: 3,
    bathrooms: 2,
    type: 'beachfront',
    amenities: ['wifi', 'pool', 'kitchen']
  },
];

const Hero = ({ selectedType, activeFilters }) => {
  const [filteredPlaces, setFilteredPlaces] = useState(placesData);

  useEffect(() => {
    let filtered = [...placesData];

    // Filter by type if selected
    if (selectedType && selectedType !== 'all') {
      filtered = filtered.filter(place => place.type === selectedType);
    }

    // Apply additional filters if they exist
    if (activeFilters) {
      filtered = filtered.filter(place => {
        const meetsPrice = place.price >= activeFilters.priceRange[0] && 
                          place.price <= activeFilters.priceRange[1];
        const meetsRooms = !activeFilters.rooms || place.rooms >= activeFilters.rooms;
        const meetsBathrooms = !activeFilters.bathrooms || place.bathrooms >= activeFilters.bathrooms;
        const meetsPropertyType = !activeFilters.propertyType || 
                                activeFilters.propertyType === 'any' || 
                                place.type === activeFilters.propertyType;
        const meetsAmenities = !activeFilters.amenities.length || 
                              activeFilters.amenities.every(amenity => 
                                place.amenities.includes(amenity));

        return meetsPrice && meetsRooms && meetsBathrooms && 
               meetsPropertyType && meetsAmenities;
      });
    }

    setFilteredPlaces(filtered);
  }, [selectedType, activeFilters]);

  return (
    <div className="pt-3 pb-20 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => {
            switch (place.type) {
              case 'trending':
                return <TrendingCard key={place.id} {...place} />;
              case 'beachfront':
                return <BeachfrontCard key={place.id} {...place} />;
              case 'amazing_pools':
                return <AmazingPoolCard key={place.id} {...place} />;
              default:
                return <Card key={place.id} {...place} />;
            }
          })
        ) : (
          <div className="col-span-full text-center py-10">
            <h3 className="text-xl font-semibold mb-2">No places found</h3>
            <p className="text-gray-500">Try adjusting your filters or search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
