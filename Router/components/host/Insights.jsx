import React from 'react';

const Insights = () => {
  // Mock data - replace with real data from your backend
  const stats = {
    viewsLastMonth: 0,
    bookingsLastMonth: 0,
    averageRating: 0,
    responseRate: 0,
    occupancyRate: 0
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold mb-8">Insights</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Views Last Month</h3>
            <p className="text-3xl font-bold">{stats.viewsLastMonth}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Bookings Last Month</h3>
            <p className="text-3xl font-bold">{stats.bookingsLastMonth}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Average Rating</h3>
            <p className="text-3xl font-bold">{stats.averageRating} ★</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Response Rate</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ width: `${stats.responseRate}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{stats.responseRate}% response rate</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Occupancy Rate</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ width: `${stats.occupancyRate}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{stats.occupancyRate}% occupancy rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and Recommendations */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recommendations to Improve</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Update Your Calendar</h3>
                <p className="text-gray-600">Keep your calendar up to date to improve your response rate and avoid cancellations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Improve Response Time</h3>
                <p className="text-gray-600">Respond to inquiries within 24 hours to maintain a high response rate.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Update Your Listing</h3>
                <p className="text-gray-600">Keep your photos and description up to date to attract more guests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
