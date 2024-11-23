import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AirbnbHome from "./AirbnbHome";
import Logo from "/assets/images/STARRWAY-02.png";
import LogoM from "/assets/images/STARRWAY-02.png";
import SettingPopUp from "./SettingPopUp";
import LanguageAndRegion from "./LanguageAndRegion";

const SubNav1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white ">
      {/* Desktop and large screens */}
      <div className="hidden md:flex justify-between items-center px-12 py-2">
        {/* Logo */}
        <img src={Logo} alt="StarrWay Logo" width={160} />


        {/* Right side: Airbnb your home, language and region, settings */}
        <div className="flex items-center gap-6">
          <AirbnbHome />
          <LanguageAndRegion />
          <SettingPopUp />
        </div>
      </div>

      {/* Mobile screens */}
      <div className="md:hidden flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <img src={LogoM} alt="StarrWay Logo" width={80} />


        {/* Menu button for mobile */}
        <button onClick={toggleMenu} className="text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-0 left-0 w-full h-screen z-10 shadow-md">
          <div className="flex flex-col items-center py-4">
            <AirbnbHome />
            <LanguageAndRegion />
            <SettingPopUp />
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubNav1;
