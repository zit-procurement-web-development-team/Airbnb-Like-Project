import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';

const PropertyDescription = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const maxLength = 500;

  const handleNext = () => {
    if (description.length > 0) {
      navigate('/become-a-host/finish-setup');
    }
  };

  const handleBack = () => {
    navigate('/become-a-host/title');
  };

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setDescription(text);
    }
  };

  const remainingChars = maxLength - description.length;

  const placeholderTips = [
    "What makes your place unique?",
    "What are the standout features?",
    "What's the vibe of the neighborhood?",
    "What would guests love about staying here?",
    "What special touches do you provide?"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-black w-[80%]" />
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
            Create your description
          </h1>
          <p className="text-gray-600 mb-8">
            Share what makes your place special.
          </p>

          <div className="space-y-6">
            <div className="relative">
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Start typing here..."
                className="w-full h-48 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
              />
              <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                {remainingChars} characters left
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium mb-4">Tips for writing a great description:</h3>
              <ul className="space-y-3">
                {placeholderTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-600">• {tip}</span>
                  </li>
                ))}
              </ul>
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
            disabled={description.length === 0}
            className={`px-6 py-3 rounded-lg text-white ${
              description.length > 0
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
                : 'bg-gray-200 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </footer> */}
         <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={description.length === 0}
            />
    </div>
  );
};

export default PropertyDescription;
