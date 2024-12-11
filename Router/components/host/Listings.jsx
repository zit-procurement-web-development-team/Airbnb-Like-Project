import React from 'react';
import { Link } from 'react-router-dom';

const Listings = () => {
  // Mock data - replace with real data from your backend
  const listings = [
    {
      id: 1,
      title: "Sample Property",
      status: "active",
      type: "Entire place",
      location: "Sample Location",
      price: 100,
      rating: 4.5,
      reviews: 10,
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Your Listings</h1>
          <Link 
            to="/become-a-host"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            Create New Listing
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="border rounded-lg overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{listing.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                    {listing.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{listing.type} · {listing.location}</p>
                <p className="font-medium mb-2">${listing.price} / night</p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{listing.rating}</span>
                  <span className="mx-1">·</span>
                  <span>{listing.reviews} reviews</span>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="flex space-x-4">
                  <button className="flex-1 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
