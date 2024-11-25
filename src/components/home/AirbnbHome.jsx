import React from "react";
import { Link } from "react-router-dom"
 
const AirbnbHome = () => {
  return (
    <Link to="/star-way-your-home" className="hidden lg:block text-sm font-semibold text-gray-600 bg-transparent border-none cursor-pointer">
      StarrWay your home
    </Link>
  );
};

export default AirbnbHome;