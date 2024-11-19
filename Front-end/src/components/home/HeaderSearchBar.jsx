import React from "react";

const HeaderSearchBar = ({ icon, description }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center text-gray-500 hover:text-black cursor-pointer gap-2 m-5">
        <img src={icon} alt={description} className="h-6 w-6 object-cover "  />
        <p className="text-xs font-normal mt-2">{description}</p>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
