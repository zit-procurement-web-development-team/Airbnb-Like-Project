import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

const AmazingPoolCard = ({ images, location, date, hostname, cost }) => {
  const [cardHover, setCardHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardHover = () => setCardHover(true);
  const handleCardUnhover = () => setCardHover(false);

  const rightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const leftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div
        className="relative flex flex-col h-full"
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardUnhover}
      >
        <Link to="/property-details">
          <img
            src={images[currentIndex]}
            alt="property with pool"
            className="w-full h-64 object-cover rounded-xl"
          />
        </Link>
        <i className="fa-regular fa-heart absolute top-2 right-2 text-white z-10"></i>
        <div className="absolute top-2 left-2 text-xs font-semibold bg-white rounded-full p-1 px-2 z-10">
        <p>Guest favorite</p>
        </div>

        {cardHover && (
          <div className="absolute z-20 top-28 flex justify-between w-full px-2 transform transition-transform duration-300 ease-in-out cursor-pointer">
            <span className="bg-white rounded-full p-1 text-xl" onClick={leftClick}>
              <MdKeyboardArrowLeft />
            </span>
            <span className="bg-white rounded-full p-1 text-xl" onClick={rightClick}>
              <MdKeyboardArrowRight />
            </span>
          </div>
        )}

        <div className="flex justify-between mt-2 px-2">
          <h3 className="text-sm font-medium">{location}</h3>
          <div className="flex justify-center gap-1 align-center text-xs">
            <IoStarSharp className="relative top-[.1rem]" />
            <p>5.0</p>
          </div>
        </div>
        <span className="text-gray-500 text-xs px-2">Stay with {hostname}</span>
        <p className="text-gray-500 text-xs px-2">{date}</p>
        <p className="px-2">
          <span className="font-bold text-xs">{cost}</span> per night
        </p>
      </div>
    </div>
  );
};

export default AmazingPoolCard;
