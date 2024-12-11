import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaKey, FaUserFriends } from 'react-icons/fa';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';

const FinishSetup = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    instantBook: true,
    checkIn: '15:00',
    checkOut: '11:00',
    minNights: 1,
    maxGuests: 4,
  });

  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    navigate('/become-a-host/pricing');
  };

  const handleBack = () => {
    navigate('/become-a-host/description');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-black w-[85%]" />
      </div>

      {/* Navigation header */}
       <DashboardHeader />

      <main className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold mb-8">
            Finish setting up your listing
          </h1>
          <p className="text-gray-600 mb-8">
            Set your house rules and booking settings.
          </p>

          <div className="space-y-8">
            {/* Instant Book Setting */}
            <div className="p-6 border rounded-xl">
              <div className="flex items-start space-x-4">
                <FaKey className="w-6 h-6 text-gray-700" />
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium">Instant Book</h3>
                      <p className="text-gray-600">Guests can book instantly without host approval</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.instantBook}
                        onChange={(e) => handleChange('instantBook', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Check-in/Check-out Times */}
            <div className="p-6 border rounded-xl">
              <div className="flex items-start space-x-4">
                <FaClock className="w-6 h-6 text-gray-700" />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-4">Check-in/out times</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 mb-2">Check-in time</label>
                      <input
                        type="time"
                        value={settings.checkIn}
                        onChange={(e) => handleChange('checkIn', e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2">Check-out time</label>
                      <input
                        type="time"
                        value={settings.checkOut}
                        onChange={(e) => handleChange('checkOut', e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimum Nights */}
            <div className="p-6 border rounded-xl">
              <div className="flex items-start space-x-4">
                <FaCalendarAlt className="w-6 h-6 text-gray-700" />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-4">Minimum nights</h3>
                  <input
                    type="number"
                    min="1"
                    value={settings.minNights}
                    onChange={(e) => handleChange('minNights', parseInt(e.target.value))}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            {/* Maximum Guests */}
            <div className="p-6 border rounded-xl">
              <div className="flex items-start space-x-4">
                <FaUserFriends className="w-6 h-6 text-gray-700" />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-4">Maximum guests</h3>
                  <input
                    type="number"
                    min="1"
                    value={settings.maxGuests}
                    onChange={(e) => handleChange('maxGuests', parseInt(e.target.value))}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer navigation */}
      {/* <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-sm font-semibold underline"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
          >
            Next
          </button>
        </div>
      </footer> */}
       <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={false}
            />
    </div>
  );
};

export default FinishSetup;
