import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { FiX } from 'react-icons/fi';

const MapView = ({ properties, onPropertySelect }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const mapStyles = {
    height: '100%',
    width: '100%'
  };

  const defaultCenter = {
    lat: 35.6274, // Paso Robles latitude
    lng: -120.6910 // Paso Robles longitude
  };

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="h-[600px] relative">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {properties.map((property) => (
            <Marker
              key={property.id}
              position={property.location}
              onClick={() => handleMarkerClick(property)}
            >
              {selectedProperty === property && (
                <InfoWindow
                  position={property.location}
                  onCloseClick={() => setSelectedProperty(null)}
                >
                  <div className="p-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{property.title}</h3>
                      <button
                        onClick={() => setSelectedProperty(null)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <FiX />
                      </button>
                    </div>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-48 h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">${property.price}/night</p>
                    <button
                      onClick={() => onPropertySelect(property)}
                      className="mt-2 w-full bg-rose-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-rose-600 transition"
                    >
                      View Details
                    </button>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;