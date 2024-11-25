import React, { useState } from "react"; // Import React and useState

function SecondHero() {
  // State to store the range value (e.g., total earnings)
  const [value, setValue] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  const nightlyEarnings = 73;
  const totalEarnings = value * nightlyEarnings;

  return (
    <main>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Left section with the range slider and text */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="text-center mr-50 w-full">
                <h1 className="title-font text-6xl font-medium text-gray-900 mb-4">
                  Your home could make <span className="text-black-500">${totalEarnings}</span> USD on Airbnb
                </h1>
                <p className="text-xl mb-4">
                  {value} nights · ${nightlyEarnings} USD/night
                </p>
                <a href="#" className="text-lg hover:text-gray-700">
                  Learn how we <u>estimate earnings</u>
                </a>
              </div>
            </div>

            {/* Range Slider Section */}
            <div className="flex flex-col items-center space-y-4">
              <label htmlFor="range-slider" className="text-xl font-semibold mt-[-80px]">
                {/* You can add a label for the slider if needed */}
              </label>
              <input
                type="range"
                id="range-slider"
                min="1"  // Set min to 1 night to ensure the slider doesn't go below 1
                max="30" // Set max to 30 nights
                value={value}
                onChange={handleChange}
                className="w-72 h-2 bg-gradient-to-r from-pink-500 to-pink-500 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 range-slider leading-none"
              />
            </div>

            {/* Search Bar Section */}
            <div className="mt-8 w-full max-w-md mx-auto mt-[-20px]">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Bong,·Entire place,·2 bedrooms"
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Right section - Map and Address/Contact Info */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SecondHero;
