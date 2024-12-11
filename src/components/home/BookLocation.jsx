import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; // Leaflet CSS

const BookLocation = () => {
  // State to control visibility of the map popup and message
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [destinationChosen, setDestinationChosen] = useState(false); // State to track if destination is selected
  const [inputValue, setInputValue] = useState(""); // State for the input field

  const mapPopupRef = useRef(null); // Reference for detecting outside clicks

  // Coordinates for different countries
  const countryCoordinates = {
    'Africa': [1.6500, 25.1000],
    'USA': [37.0902, -95.7129],
    'India': [20.5937, 78.9629],
    'Australia': [-25.2744, 133.7751],
    'Brazil': [-14.2350, -51.9253],
    'Canada': [56.1304, -106.3468]
  };

  // Handle showing and hiding the map
  const handleMapClick = () => setIsMapVisible(true);

  // Handle closing the map if clicked outside the popup
  const handleOutsideClick = (event) => {
    if (mapPopupRef.current && !mapPopupRef.current.contains(event.target)) {
      setIsMapVisible(false);
    }
  };

  // Set up event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDestinationChosen(true); // Mark destination as chosen
    setInputValue(country); // Set the input value to the selected country
    setIsMapVisible(false); // Close the popup when a country is selected
  };

  return (
    <div>
      {/* The div that will trigger the map popup */}
      <div
        onClick={handleMapClick}
        className="text-sm font-semibold text-black rounded-full border-none cursor-pointer p-3"
        style={{
          width: "200px",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          margin: "20px",
        }}
      >
        <h3>Where</h3>
        <input
          className="px-5 py-2 border-none"
          placeholder="Type your destination"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Allow typing in the input
        />
      </div>

      {/* The Map Popup (hidden by default) */}
      {isMapVisible && (
        <div
          ref={mapPopupRef}
          style={{
            position: "absolute",
            top: "29%",
            left: "10%",
            width: "650px",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            zIndex: 9999,
            marginTop: "10px",
          }}
        >
          {/* Message Box with Country Options */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            {Object.keys(countryCoordinates).map((country) => (
              <div
                key={country}
                onClick={() => handleCountrySelect(country)}
                style={{
                  padding: "10px",
                  width: "100%",
                  maxWidth: "150px",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  textAlign: "center",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#ddd")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              >
                {country}
                <MapContainer
                  center={countryCoordinates[country]}
                  zoom={4}
                  style={{ width: "100%", height: "100px", marginTop: "10px" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={countryCoordinates[country]}>
                    <Popup>{country}</Popup>
                  </Marker>
                </MapContainer>
              </div>
              
            ))}
          </div>
        </div>
      )}

      {/* Show the confirmation message when a destination is selected */}
      {/* {destinationChosen && selectedCountry && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #c3e6cb",
            borderRadius: "5px",
            width: "100%",
            maxWidth: "650px",
            textAlign: "center",
          }}
        >
          You have chosen {selectedCountry} as your destination!
        </div>
      )} */}
    </div>
  );
};

export default BookLocation;
