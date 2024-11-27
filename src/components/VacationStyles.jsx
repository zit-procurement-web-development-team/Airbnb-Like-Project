import React from 'react';
import house from '/assets/property-detail-img/property-d-img-5.jpeg';

const VacationStyles = () => {
  const styles = [
    {
      title: 'Apartments',
      description: 'Convenient locations with everyday essentials',
      image: '/assets/property-detail-img/property-d-img-5.jpeg'
    },
    {
      title: 'Houses',
      description: 'Comfortable spaces with room for everyone',
      image: '/assets/property-detail-img/property-d-img-5.jpeg'
    },
    {
      title: 'Unique Stays',
      description: 'Spaces that are more than just a place to sleep',
      image: '/assets/property-detail-img/property-d-img-5.jpeg'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Vacation rentals for every style
        </h2>
        <p className="text-gray-600 mb-8">
          Get the amount of space that is right for you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{style.title}</h4>
                <p className="text-gray-600">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacationStyles;
