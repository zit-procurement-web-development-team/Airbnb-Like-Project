import React from 'react';
import { Link } from 'react-router-dom';

const HostDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold">$0</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Active Listings</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/become-a-host" className="bg-black text-white p-6 rounded-lg hover:bg-gray-900">
            <h3 className="text-lg font-medium mb-2">Create New Listing</h3>
            <p>List a new property on StarWay</p>
          </Link>
          <Link to="/hosting/reservations" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium mb-2">View Reservations</h3>
            <p>Manage your bookings</p>
          </Link>
          <Link to="/hosting/earnings" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium mb-2">View Earnings</h3>
            <p>Track your income</p>
          </Link>
          <Link to="/hosting/insights" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100">
            <h3 className="text-lg font-medium mb-2">View Insights</h3>
            <p>Analyze your performance</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;
