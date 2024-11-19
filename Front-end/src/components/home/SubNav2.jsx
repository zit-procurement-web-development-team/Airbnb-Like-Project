import React, { useState } from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

// Importing images
import TrendingIcon from "/assets/images/trending.jpg";
import Icon1 from "/assets/images/tp1 (1).jpg";
import Icon2 from "/assets/images/tp1 (2).jpg";
import Icon3 from "/assets/images/tp1 (3).jpg";
import Icon4 from "/assets/images/tp1 (4).jpg";
import Icon5 from "/assets/images/tp1 (5).jpg";
import Icon6 from "/assets/images/tp1 (6).jpg";
import Icon7 from "/assets/images/tp1 (7).jpg";
import Icon8 from "/assets/images/tp1 (8).jpg";
import Icon42 from "/assets/images/tp1 (42).jpg";
import Icon10 from "/assets/images/tp1 (10).jpg";
import Icon11 from "/assets/images/tp1 (11).jpg";
import Icon12 from "/assets/images/tp1 (12).jpg";
import Icon13 from "/assets/images/tp1 (13).jpg";
import Icon14 from "/assets/images/tp1 (14).jpg";
import Icon15 from "/assets/images/tp1 (15).jpg";
import Icon16 from "/assets/images/tp1 (16).jpg";
import Icon17 from "/assets/images/tp1 (17).jpg";
import Icon18 from "/assets/images/tp1 (18).jpg";
import Icon19 from "/assets/images/tp1 (19).jpg";
import Icon20 from "/assets/images/tp1 (20).jpg";
import Icon21 from "/assets/images/tp1 (21).jpg";
import Icon22 from "/assets/images/tp1 (22).jpg";
import Icon23 from "/assets/images/tp1 (23).jpg";
import Icon24 from "/assets/images/tp1 (24).jpg";
import Icon25 from "/assets/images/tp1 (25).jpg";
import Icon26 from "/assets/images/tp1 (26).jpg";
import Icon27 from "/assets/images/tp1 (27).jpg";
import Icon28 from "/assets/images/tp1 (28).jpg";

const SubNav2 = () => {
  const iconItems = [
    { icon: TrendingIcon, discription: "Trending" },
    { icon: Icon1, discription: "Amazing pools" },
    { icon: Icon2, discription: "Icon1" },
    { icon: Icon3, discription: "Icon1" },
    { icon: Icon4, discription: "Icon1" },
    { icon: Icon5, discription: "Icon1" },
    { icon: Icon6, discription: "Golfing" },
    { icon: Icon7, discription: "Arctic" },
    { icon: Icon8, discription: "Cabins" },
    { icon: Icon42, discription: "Cabins" },
    { icon: Icon10, discription: "Icon1" },
    { icon: Icon11, discription: "Vineyards" },
    { icon: Icon12, discription: "Icon1" },
    { icon: Icon13, discription: "Icon1" },
    { icon: Icon14, discription: "Icon1" },
    { icon: Icon15, discription: "Surfing" },
    { icon: Icon16, discription: "Icon1" },
    { icon: Icon17, discription: "Icon1" },
    { icon: Icon18, discription: "Icon1" },
    { icon: Icon19, discription: "Icon1" },
    { icon: Icon20, discription: "Icon1" },
    { icon: Icon21, discription: "Icon1" },
    { icon: Icon22, discription: "Icon1" },
    { icon: Icon23, discription: "Icon1" },
    { icon: Icon24, discription: "Icon1" },
    { icon: Icon25, discription: "Icon1" },
    { icon: Icon26, discription: "Icon1" },
    { icon: Icon27, discription: "Icon1" },
    { icon: Icon28, discription: "Icon1" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 15; // Show 6 icons on smaller screens

  const handleMoveLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleMoveRight = () => {
    if (startIndex < iconItems.length - itemsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="relative flex justify-center items-center overflow-hidden py-5">
      {/* Left arrow container with gradient */}
      {startIndex > 0 && (
        <div
          onClick={handleMoveLeft}
          className="absolute left-10 z-10  cursor-pointer rounded-full bg-gradient-to-r from-gray-800 to-transparent hover:opacity-80"
        >
          <TfiAngleLeft className="text-white text-3xl" />
        </div>
      )}

      {/* Icons container */}
      <div className="flex  overflow-hidden transition duration-300 z-0">
        {iconItems.slice(startIndex, startIndex + itemsToShow).map((eachIcon, index) => (
          <HeaderSearchBar
            key={index}
            icon={eachIcon.icon}
            description={eachIcon.discription}
          />
        ))}
      </div>

      {/* Right arrow container with gradient */}
      {startIndex < iconItems.length - itemsToShow && (
        <div
          onClick={handleMoveRight}
          className="absolute right-10 z-10  cursor-pointer rounded-full bg-gradient-to-l from-gray-400 to-transparent hover:opacity-80"
        >
          <TfiAngleRight className="text-white text-3xl" />
        </div>
      )}
    </div>
  );
};

export default SubNav2;
