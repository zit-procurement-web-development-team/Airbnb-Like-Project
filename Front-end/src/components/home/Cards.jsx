import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Card({ images, location, date, hostname, cost }) {
  const [CardHover, SetCardHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  const handleCardHover = () => {
    SetCardHover(true);
  };

  const handleCardUnhover = () => {
    SetCardHover(false);
  };

  const rightClick = () => {
    // Move to the next image, wrap around if we're at the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const leftClick = () => {
    // Move to the previous image, wrap around if we're at the beginning
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div
        className="relative flex flex-col h-full"
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardUnhover}
      >
        <a href="#"> 
          <img
            src={images[currentIndex]} // Display the image based on current index
            alt="card"
            className="w-full h-64 object-cover rounded-xl" // Responsive image size
          />
        </a>
        <i className="fa-regular fa-heart absolute top-2 right-2 text-white z-10"></i>
        <div className="absolute top-2 left-2 text-xs font-semibold bg-white rounded-full p-1 px-2 z-10">
          <p>Guest favorite</p>
        </div>

        {/* Hover content */}
        {CardHover && (
          <div className="absolute z-20 top-28 flex justify-between w-full px-2 transform transition-transform duration-300 ease-in-out cursor-pointer">
            <span className="bg-white rounded-full p-1 text-xl" onClick={leftClick}>
              <MdKeyboardArrowLeft />
            </span>
            <span className="bg-white rounded-full p-1 text-xl" onClick={rightClick}>
              <MdKeyboardArrowRight />
            </span>
          </div>
        )}

        {/* Main card content */}
        <div className="flex justify-between mt-2 px-2">
          <h3 className="text-sm font-medium">{location}</h3>
          <div className="flex justify-center gap-1 align-center text-xs">
            <IoStarSharp className="relative top-[.1rem]" />
            <p>5.0</p>
          </div>
        </div>
        <span className="text-gray-500 text-xs">Stay with <>{hostname}</></span>
        <p className="text-gray-500 text-xs">{date}</p>
        <p>
          <span className="font-bold text-xs">{cost}</span> per night
        </p>
      </div>
    </div>
  );
}

export default Card;
