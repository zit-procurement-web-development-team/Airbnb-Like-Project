import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiStar, FiHeart, FiMapPin } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertySlider = ({ title, subtitle }) => {
  const propertyImages = [
    {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.14(10).jpeg',
      
      ],
      title: 'Luxury Villa with Pool',
      location: 'Downtown Paso Robles',
      rating: 4.9,
      reviews: 128,
      price: 299,
      description: 'Stunning villa with panoramic views'
    },
    {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(11).jpeg',
      
      ],
      title: 'Modern Vineyard Estate',
      location: 'Wine Country',
      rating: 4.8,
      reviews: 95,
      price: 349,
      description: 'Contemporary living among the vines'
    },
    {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(16).jpeg',
        
      ],
      title: 'Historic Downtown Loft',
      location: 'Central Paso Robles',
      rating: 4.7,
      reviews: 76,
      price: 249,
      description: 'Charming space in historic building'
    },
    {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(5).jpeg',
      
      ],
      title: 'Rustic Ranch House',
      location: 'Countryside',
      rating: 4.9,
      reviews: 112,
      price: 279,
      description: 'Authentic ranch experience with modern comforts'
    }, {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(5).jpeg',
      
      ],
      title: 'Rustic Ranch House',
      location: 'Countryside',
      rating: 4.9,
      reviews: 112,
      price: 279,
      description: 'Authentic ranch experience with modern comforts'
    }, {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(5).jpeg',
      
      ],
      title: 'Rustic Ranch House',
      location: 'Countryside',
      rating: 4.9,
      reviews: 112,
      price: 279,
      description: 'Authentic ranch experience with modern comforts'
    }, {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(5).jpeg',
      
      ],
      title: 'Rustic Ranch House',
      location: 'Countryside',
      rating: 4.9,
      reviews: 112,
      price: 279,
      description: 'Authentic ranch experience with modern comforts'
    }, {
      images: [
        '/assets/propertytourimgs/WhatsApp Image 2024-11-25 at 02.11.15(5).jpeg',
      
      ],
      title: 'Rustic Ranch House',
      location: 'Countryside',
      rating: 4.9,
      reviews: 112,
      price: 279,
      description: 'Authentic ranch experience with modern comforts'
    }
  ];

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-8">{subtitle}</p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="property-slider"
          >
            {propertyImages.map((property, propertyIndex) => (
              <SwiperSlide key={propertyIndex}>
                <div className="group relative">
                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden aspect-[4/3]">
                    {property.images.map((image, imageIndex) => (
                      <div 
                        key={imageIndex} 
                        className={`relative overflow-hidden ${
                          imageIndex === 0 ? 'col-span-2 row-span-2' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${property.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200">
                    <FiHeart className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Property Details */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">{property.title}</h3>
                      <div className="flex items-center gap-1">
                        <FiStar className="w-4 h-4 text-rose-500" />
                        <span>{property.rating}</span>
                        <span className="text-gray-500">({property.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{property.location}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{property.description}</p>
                    <p className="font-semibold">
                      ${property.price} <span className="text-gray-500 font-normal">/ night</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PropertySlider;
