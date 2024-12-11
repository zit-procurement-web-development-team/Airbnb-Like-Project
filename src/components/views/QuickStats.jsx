import React from 'react';
import { FiHome, FiStar, FiDollarSign, FiCalendar, FiUsers, FiMap } from 'react-icons/fi';

const QuickStats = () => {
  const stats = [
    { icon: FiHome, title: 'Total rentals', value: '420 properties' },
    { icon: FiStar, title: 'Average rating', value: '4.8 out of 5' },
    { icon: FiDollarSign, title: 'Average price', value: '$250 per night' },
    { icon: FiCalendar, title: 'Average stay', value: '4 nights' },
    { icon: FiUsers, title: 'Guest capacity', value: 'Up to 12 guests' },
    { icon: FiMap, title: 'Location', value: 'Central Coast, CA' }
  ];

  return (
    <div className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Quick stats about house rentals in Paso Robles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="bg-rose-100 p-3 rounded-lg">
                <stat.icon className="text-2xl text-rose-500" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{stat.title}</h4>
                <p className="text-gray-600">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStats;