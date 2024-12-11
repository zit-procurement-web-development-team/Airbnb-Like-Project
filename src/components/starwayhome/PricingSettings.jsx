import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';

const PricingSettings = () => {
  const navigate = useNavigate();
  const [basePrice, setBasePrice] = useState(100);
  const [suggestedPrice, setSuggestedPrice] = useState({
    min: 80,
    max: 120,
    optimal: 100
  });

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setBasePrice(value);
    }
  };

  const handleNext = () => {
    navigate('/become-a-host/legal');
  };

  const handleBack = () => {
    navigate('/become-a-host/finish-setup');
  };

  const calculatePriceCompetitiveness = () => {
    if (basePrice < suggestedPrice.min) return 'Lower than average';
    if (basePrice > suggestedPrice.max) return 'Higher than average';
    return 'Competitive';
  };

  const getPriceColor = () => {
    if (basePrice < suggestedPrice.min) return 'text-yellow-600';
    if (basePrice > suggestedPrice.max) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-black w-[90%]" />
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
            Now, set your price
          </h1>
          <p className="text-gray-600 mb-8">
            You can change it anytime.
          </p>

          <div className="space-y-8">
            {/* Price Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaDollarSign className="text-gray-400" />
              </div>
              <input
                type="number"
                value={basePrice}
                onChange={handlePriceChange}
                className="block w-full pl-10 pr-12 py-4 text-4xl font-semibold border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                min="0"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-400">per night</span>
              </div>
            </div>

            {/* Price Competitiveness */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Price Analysis</h3>
                <span className={`font-medium ${getPriceColor()}`}>
                  {calculatePriceCompetitiveness()}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Suggested price range</span>
                  <span className="font-medium">
                    ${suggestedPrice.min} - ${suggestedPrice.max}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Optimal price</span>
                  <span className="font-medium">${suggestedPrice.optimal}</span>
                </div>
              </div>
            </div>

            {/* Smart Pricing Info */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <FaInfoCircle className="text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Smart Pricing</h3>
                  <p className="text-gray-600">
                    Our smart pricing adjusts your nightly price based on changes in demand for listings like yours. You're always in control - set your minimum and maximum prices, and we'll optimize within that range.
                  </p>
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

            />
    </div>
  );
};

export default PricingSettings;
