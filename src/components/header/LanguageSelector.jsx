import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const languages = [
  { code: 'en', name: 'English', region: 'United States' },
  { code: 'es', name: 'Español', region: 'España' },
  { code: 'fr', name: 'Français', region: 'France' },
  { code: 'de', name: 'Deutsch', region: 'Deutschland' },
  { code: 'it', name: 'Italiano', region: 'Italia' },
  { code: 'pt', name: 'Português', region: 'Portugal' },
  { code: 'nl', name: 'Nederlands', region: 'Nederland' },
  { code: 'ja', name: '日本語', region: '日本' },
  { code: 'ko', name: '한국어', region: '대한민국' },
  { code: 'zh', name: '中文 (简体)', region: '中国' },
];

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
];

const LanguageSelector = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 z-[1001]" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[1002] px-4">
        <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-6">
            <button
              onClick={onClose}
              className="absolute left-6 top-6 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className="text-center font-semibold">Language and region</h2>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Language Selection */}
            <div>
              <h3 className="font-semibold mb-4">Language and region</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex flex-col p-4 border rounded-xl hover:border-black transition text-left"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-500 text-sm">{lang.region}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Selection */}
            <div>
              <h3 className="font-semibold mb-4">Currency</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    className="flex flex-col p-4 border rounded-xl hover:border-black transition text-left"
                  >
                    <span className="font-medium">{currency.code} - {currency.symbol}</span>
                    <span className="text-gray-500 text-sm">{currency.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSelector;
