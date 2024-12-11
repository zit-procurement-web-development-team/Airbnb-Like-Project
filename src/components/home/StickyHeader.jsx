import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import AirbnbHome from "./AirbnbHome";
import Logo from "/assets/images/STARRWAY-02.png";
import SettingPopUp from "./SettingPopUp";
import LanguageAndRegion from "./LanguageAndRegion";
import SubNav2 from "./SubNav2";
import LargerSearchBar from "./LargerSearchBar";
import { Link } from 'react-router-dom';

const StickyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
        setShowFullSearch(false);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full ${isSticky ? 'fixed top-0 left-0 shadow-md bg-white z-50' : ''}`}>
      <div className={`max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 transition-all duration-300 ${isSticky ? 'py-4' : 'py-6'}`}>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              alt="Logo"
              className={`transition-all duration-300 ${isSticky ? 'h-8' : 'h-10'}`}
            />
          </div>

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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ) : (
              <LargerSearchBar />
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link to='/become-a-host'>
            <button className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition">
              Become a Host
            </button>
            </Link>
            <button className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full Search Overlay when sticky */}
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
              </div>
              <LargerSearchBar />
            </div>
          </div>
        </div>
      )}

      {/* Menu Popup */}
      {isMenuOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <SettingPopUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyHeader;
