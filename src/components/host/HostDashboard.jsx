import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSteps } from '../../context/StepsContext';

const HostDashboard = () => {
  const navigate = useNavigate();
  const { draftListings, startNewListing, resumeListing } = useSteps();

  const handleCreateNewListing = () => {
    startNewListing();
    navigate('/become-a-host/about-your-place');
  };

  const handleResumeListing = (listingId) => {
    const lastPath = resumeListing(listingId);
    if (lastPath) {
      navigate(lastPath);
    }
  };

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
            <p className="text-3xl font-bold">{draftListings.filter(l => l.completed).length}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Draft Listings</h3>
            <p className="text-3xl font-bold">{draftListings.filter(l => !l.completed).length}</p>
          </div>
        </div>

        {/* Draft Listings */}
        {draftListings.filter(l => !l.completed).length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Continue Working on Your Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {draftListings
                .filter(listing => !listing.completed)
                .map(listing => (
                  <div key={listing.id} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Draft Listing</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Started {new Date(listing.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Progress: Step {listing.currentStep} of 4
                    </p>
                    <button
                      onClick={() => handleResumeListing(listing.id)}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 w-full"
                    >
                      Continue Editing
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={handleCreateNewListing}
            className="bg-black text-white p-6 rounded-lg hover:bg-gray-900 text-left"
          >
            <h3 className="text-lg font-medium mb-2">Create New Listing</h3>
            <p>List a new property on StarWay</p>
          </button>
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
