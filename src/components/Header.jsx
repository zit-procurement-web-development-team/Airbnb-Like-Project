import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import LargerSearchBar from './home/LargerSearchBar';
import LanguageSelector from './home/LanguageSelector';
import SubNav2 from './home/SubNav2';
import Logo from '/assets/images/STARRWAY-02.png';

const Header = ({ onFiltersChange, onTypeChange, selectedType }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const userMenuRef = useRef(null);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
      if (window.scrollY > 20) {
        setShowFullSearch(false);
      }
    };

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageSelectorOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full z-[1000] bg-white">
      <div className={`w-full ${isSticky ? 'fixed top-0 left-0 shadow-md bg-white' : ''}`}>
        <div className={`max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 transition-all duration-300 ${isSticky ? 'py-3' : 'py-5'}`}>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 my-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
              <img
                src={Logo}
                alt="Starrway"
                className={`transition-all duration-300 ${isSticky ? 'h-8 md:h-12' : 'h-10 md:h-16'} w-auto object-contain`}
              />
            </Link>

            {/* Search Bar */}
            <div className={`flex-1 flex justify-center transition-all duration-300 ${isSticky ? 'max-w-[720px]' : ''}`}>
              {isSticky ? (
                <div 
                  className="border rounded-full py-2 px-4 shadow-sm hover:shadow-md cursor-pointer transition flex items-center justify-between w-full"
                  onClick={() => setShowFullSearch(true)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-semibold">Anywhere</div>
                    <div className="hidden sm:block text-sm text-gray-600">Any week</div>
                    <div className="hidden sm:block text-sm text-gray-600">Add guests</div>
                  </div>
                  <div className="p-2 bg-[#FF385C] rounded-full text-white">
                    <BiSearch className="h-4 w-4" />
                  </div>
                </div>
              ) : (
                <LargerSearchBar />
              )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Link to="/star-way-your-home" className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition">
                Become a Host
              </Link>
              <div className="relative" ref={languageMenuRef}>
                <button 
                  className="hidden md:flex items-center justify-center p-3 rounded-full hover:bg-gray-100 transition"
                  onClick={() => setIsLanguageSelectorOpen(!isLanguageSelectorOpen)}
                >
                  <FaGlobe className="h-5 w-5" />
                </button>

                {/* Language Menu Dropdown */}
                {isLanguageSelectorOpen && (
                  <LanguageSelector isOpen={isLanguageSelectorOpen} onClose={() => setIsLanguageSelectorOpen(false)} />
                )}
              </div>
              <div className="relative" ref={userMenuRef}>
                <button
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <FaBars className="h-4 w-4" />
                  <FaUserCircle className="h-6 w-6 text-gray-500" />
                </button>

                {/* User Menu Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-[calc(100%+0.5rem)] w-[240px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="py-2">
                      <Link to="/signup" className="w-full px-4 py-3 hover:bg-gray-100 transition text-left font-semibold">
                        Sign up
                      </Link>
                      <Link to="/login" className="w-full px-4 py-3 hover:bg-gray-100 transition text-left">
                        Log in
                      </Link>
                    </div>
                    <div className="border-t py-2">
                      <Link to="/star-way-your-home" className="w-full px-4 py-3 hover:bg-gray-100 transition text-left">
                        Host your home
                      </Link>
                      <button className="w-full px-4 py-3 hover:bg-gray-100 transition text-left">
                        Help Center
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Categories */}
        <SubNav2
          onFiltersChange={onFiltersChange}
          onTypeChange={onTypeChange}
          selectedType={selectedType}
        />
      </div>

      {/* Full Search Overlay */}
      {showFullSearch && isSticky && (
        <div className="fixed inset-0 bg-gray-800/50 z-50">
          <div className="absolute top-0 left-0 w-full bg-white py-8">
            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setShowFullSearch(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="text-lg font-semibold">Search Starrway</div>
                <div className="w-10" /> {/* Spacer for alignment */}
              </div>
              <LargerSearchBar />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
