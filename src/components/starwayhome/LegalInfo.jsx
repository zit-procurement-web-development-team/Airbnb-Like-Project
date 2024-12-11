import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaShieldAlt, FaBook, FaHandshake } from 'react-icons/fa';
import { PropertyContext } from '../../context/PropertyContext';
import DashboardHeader from '../shared/DashboardHeader';
import NavigationFooter from '../shared/NavigationFooter';

const LegalInfo = () => {
  const navigate = useNavigate();
  const { propertyData, updatePropertyData } = useContext(PropertyContext);
  const [agreements, setAgreements] = useState(propertyData.agreements || {
    rules: false,
    safety: false,
    standards: false,
  });
  const [error, setError] = useState('');

  const handleToggleAgreement = (key) => {
    const newAgreements = {
      ...agreements,
      [key]: !agreements[key]
    };
    setAgreements(newAgreements);
    updatePropertyData('agreements', newAgreements);
  };

  const allAgreed = Object.values(agreements).every(value => value);

  const handleNext = () => {
    if (!allAgreed) {
      setError('Please agree to all terms before continuing');
      return;
    }
    setError('');
    navigate('/become-a-host/review');
  };

  const handleBack = () => {
    navigate('/become-a-host/pricing');
  };

  const agreements_list = [
    {
      id: 'rules',
      title: 'StarWay Rules',
      description: 'By selecting this, you agree to follow StarWay\'s rules for hosts, including our non-discrimination policy.',
      icon: FaBook
    },
    {
      id: 'safety',
      title: 'Safety Guidelines',
      description: 'You agree to follow our safety guidelines for protecting yourself and your guests.',
      icon: FaShieldAlt
    },
    {
      id: 'standards',
      title: 'Hosting Standards',
      description: 'You agree to maintain high standards of cleanliness, communication, and commitment to reservations.',
      icon: FaHandshake
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />
      
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-black w-[95%]" />
      </div>

      <main className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold mb-8">
            Just one last step
          </h1>
          <p className="text-gray-600 mb-8">
            Before you can start hosting, please review and agree to our hosting requirements.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-center">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {agreements_list.map(({ id, title, description, icon: Icon }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 border rounded-xl transition-all ${
                  agreements[id]
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <button
                      onClick={() => handleToggleAgreement(id)}
                      className={`flex items-center space-x-2 ${
                        agreements[id]
                          ? 'text-black'
                          : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                          agreements[id]
                            ? 'bg-black border-black'
                            : 'border-gray-300'
                        }`}
                      >
                        {agreements[id] && (
                          <FaCheck className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span>I agree</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
            disabled={!allAgreed}
            className={`px-6 py-3 rounded-lg text-white ${
              allAgreed
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
                : 'bg-gray-200 cursor-not-allowed'
            }`}
          >
            Agree and continue
          </button>
        </div>
      </footer> */}
       <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={!allAgreed}
            />
    </div>
  );
};

export default LegalInfo;
