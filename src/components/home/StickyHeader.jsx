// import React from "react";

// const StickyHeader = () => {
//     re
// }

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import AirbnbHome from "./AirbnbHome";
import Logo from "/assets/images/STARRWAY-02.png";
import SettingPopUp from "./SettingPopUp";
import LanguageAndRegion from "./LanguageAndRegion";
import SubNav2 from "./SubNav2";
import LargerSearchBar from "./LargerSearchBar";

const StickyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State to track sticky header visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to toggle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change the 100px to your desired scroll threshold
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Default Header */}
      <div className="px-12 flex flex-col items-center border-b-[1px] pb-7">
        <div className="text-center gap-3 flex items-center ">
          <button className="px-3 py-1 rounded-full">Stay</button>
          <button className="px-3 py-1 rounded-full">Experiences</button>
        </div>
        <LargerSearchBar />
      </div>
      <div>
        <SubNav2/>  
      </div>
      

      {/* Sticky Header (This will become fixed when scrolling) */}
      {isSticky && (
        <div className="fixed top-0 left-0 right-0 z-30 bg-white shadow-md">
          {/* Desktop and large screens */}
          <div className="hidden md:flex justify-between items-center px-16 py-2">
            {/* Logo */}
            <img src={Logo} alt="Airbnb Logo" width={100} />

            {/* Search bar */}
            <div className="w-99">
              <SearchBar />
            </div>

            {/* Right side: Airbnb your home, language and region, settings */}
            <div className="flex items-center gap-6">
              <AirbnbHome />
              <LanguageAndRegion />
              <SettingPopUp />
            </div>
          </div>
          <div>
        <SubNav2/>
      </div>
        </div>
      )}
    </div>
  );
};

export default StickyHeader;
