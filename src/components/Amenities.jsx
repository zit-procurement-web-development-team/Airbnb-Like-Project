import React from 'react';
import { FiWifi, FiHome, FiDroplet, FiTruck, FiWind } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const AmenityCard = ({ Icon, name }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition duration-300">
    <div className="bg-rose-100 p-3 rounded-lg">
      <Icon className="text-2xl text-rose-500" />
    </div>
    <span className="font-medium whitespace-nowrap">{name}</span>
  </div>
);

const Amenities = () => {
  const amenities = [
    { icon: FiHome, name: 'Kitchen' },
    { icon: FiWifi, name: 'Wifi' },
    { icon: FiDroplet, name: 'Pool' },
    { icon: FiTruck, name: 'Free parking on premises' },
    { icon: FiWind, name: 'Air conditioning' }
  ];

  return (
    <div className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Popular amenities for Paso Robles house rentals
        </h2>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} Icon={amenity.icon} name={amenity.name} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView="auto"
            freeMode={true}
            className="!pb-4"
          >
            {amenities.map((amenity, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <AmenityCard Icon={amenity.icon} name={amenity.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
