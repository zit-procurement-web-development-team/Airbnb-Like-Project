import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';
import { FaMapMarkerAlt, FaSearch, FaLocationArrow, FaTimes, FaMapPin, FaInfoCircle } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 180px)'
};

const defaultCenter = {
    lat: 51.5074,
    lng: -0.1278
};

const libraries = ['places'];

const mapStyles = [
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }, { lightness: 17 }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 18 }]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 16 }]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#dedede" }, { lightness: 21 }]
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 }
};

export default function LocationPicker() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [address, setAddress] = useState(propertyData.address || '');
    const [location, setLocation] = useState(propertyData.location || defaultCenter);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showLocationTooltip, setShowLocationTooltip] = useState(false);
    const [showInfoTooltip, setShowInfoTooltip] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [markerAnimation, setMarkerAnimation] = useState(2);
    const [searchBox, setSearchBox] = useState(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (markerAnimation === 2) {
            const timer = setTimeout(() => setMarkerAnimation(null), 2400);
            return () => clearTimeout(timer);
        }
    }, [markerAnimation]);

    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);

    const onSearchBoxLoad = useCallback((ref) => {
        setSearchBox(ref);
    }, []);

    const handlePlacesChanged = () => {
        if (searchBox) {
            const places = searchBox.getPlaces();
            if (places && places.length > 0) {
                const place = places[0];
                if (place.geometry && place.geometry.location) {
                    const newLocation = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    };
                    setLocation(newLocation);
                    setAddress(place.formatted_address);
                    setMarkerAnimation(2);
                    
                    if (map) {
                        map.panTo(newLocation);
                        map.setZoom(15);
                    }
                }
            }
        }
    };

    const handleAddressChange = (e) => {
        const newAddress = e.target.value;
        setAddress(newAddress);
        setError(null);
    };

    const handleMapClick = (e) => {
        const newLocation = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        };
        setLocation(newLocation);
        setMarkerAnimation(2);

        // Reverse geocoding
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: newLocation }, (results, status) => {
            if (status === 'OK' && results[0]) {
                setAddress(results[0].formatted_address);
            } else {
                setAddress("Location selected on map");
            }
        });
    };

    const handleCurrentLocation = () => {
        setIsLoading(true);
        setError(null);
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setLocation(newLocation);
                    
                    // Reverse geocoding for current location
                    const geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ location: newLocation }, (results, status) => {
                        if (status === 'OK' && results[0]) {
                            setAddress(results[0].formatted_address);
                        } else {
                            setAddress("Current location");
                        }
                        setMarkerAnimation(2);
                        setIsLoading(false);
                        
                        if (map) {
                            map.panTo(newLocation);
                            map.setZoom(15);
                        }
                    });
                },
                (error) => {
                    setError('Unable to get your location. Please check your permissions.');
                    setIsLoading(false);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
            setIsLoading(false);
        }
    };

    const handleClearAddress = () => {
        setAddress('');
        setError(null);
    };

    const handleNext = () => {
        if (address && location) {
            updatePropertyData({
                address,
                location
            });
            navigate('/confirm-address');
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow relative">
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0 w-[450px] h-full bg-white z-10 shadow-2xl"
                >
                    <div className="p-8">
                        <motion.div {...fadeInUp}>
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    Where's your place located?
                                </h1>
                                <div className="relative">
                                    <FaInfoCircle 
                                        className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200"
                                        onMouseEnter={() => setShowInfoTooltip(true)}
                                        onMouseLeave={() => setShowInfoTooltip(false)}
                                    />
                                    <AnimatePresence>
                                        {showInfoTooltip && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                className="absolute right-0 top-full mt-2 p-3 bg-gray-900 text-white text-xs rounded-lg w-64 z-50"
                                            >
                                                Your address is only shared with guests after they've made a reservation.
                                                <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-900 transform rotate-45" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="relative">
                                    {mapLoaded ? (
                                        <StandaloneSearchBox
                                            onLoad={onSearchBoxLoad}
                                            onPlacesChanged={handlePlacesChanged}
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaSearch className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    value={address}
                                                    onChange={handleAddressChange}
                                                    placeholder="Enter your address"
                                                    className="block w-full pl-10 pr-24 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                                                />
                                            </div>
                                        </StandaloneSearchBox>
                                    ) : (
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaSearch className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={address}
                                                onChange={handleAddressChange}
                                                placeholder="Loading search..."
                                                disabled
                                                className="block w-full pl-10 pr-24 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
                                            />
                                        </div>
                                    )}
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
                                        {address && (
                                            <motion.button
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                onClick={handleClearAddress}
                                                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                            >
                                                <FaTimes className="h-4 w-4 text-gray-400" />
                                            </motion.button>
                                        )}
                                        <div className="w-px h-6 bg-gray-200"></div>
                                        <button
                                            onClick={handleCurrentLocation}
                                            onMouseEnter={() => setShowLocationTooltip(true)}
                                            onMouseLeave={() => setShowLocationTooltip(false)}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative"
                                        >
                                            <FaLocationArrow className="h-4 w-4 text-indigo-600" />
                                            <AnimatePresence>
                                                {showLocationTooltip && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 5 }}
                                                        className="absolute right-0 top-full mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50"
                                                    >
                                                        Use current location
                                                        <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-900 transform rotate-45" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </button>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isLoading && (
                                        <motion.div
                                            key="loading"
                                            {...fadeInUp}
                                            className="flex items-center justify-center space-x-2 text-indigo-600 bg-indigo-50 p-3 rounded-lg"
                                        >
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-500 border-t-transparent"></div>
                                            <span className="text-sm">Finding location...</span>
                                        </motion.div>
                                    )}

                                    {error && (
                                        <motion.div
                                            key="error"
                                            {...fadeInUp}
                                            className="p-4 bg-red-50 rounded-lg border border-red-100"
                                        >
                                            <div className="flex items-center space-x-2 text-red-600">
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm font-medium">{error}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.div 
                                    {...fadeInUp}
                                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm"
                                >
                                    <h3 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                                        <FaMapPin className="h-4 w-4 text-indigo-600" />
                                        <span>Selected Location</span>
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-600 text-sm flex justify-between items-center">
                                            <span>Latitude:</span>
                                            <span className="font-mono bg-gray-100 px-2 py-1 rounded">{location.lat.toFixed(6)}</span>
                                        </p>
                                        <p className="text-gray-600 text-sm flex justify-between items-center">
                                            <span>Longitude:</span>
                                            <span className="font-mono bg-gray-100 px-2 py-1 rounded">{location.lng.toFixed(6)}</span>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    {...fadeInUp}
                                    className="bg-blue-50 p-4 rounded-lg"
                                >
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                                        <p className="text-sm text-blue-700">
                                            Click anywhere on the map to set your location precisely. You can also search for an address or use your current location.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="ml-[450px] h-full relative"
                >
                    <LoadScript
                        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                        libraries={libraries}
                        onLoad={() => setMapLoaded(true)}
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={location}
                            zoom={13}
                            onClick={handleMapClick}
                            onLoad={onLoad}
                            options={{
                                styles: mapStyles,
                                disableDefaultUI: true,
                                zoomControl: true,
                                scrollwheel: true,
                                mapTypeControl: false,
                                scaleControl: true,
                                rotateControl: false,
                                fullscreenControl: false
                            }}
                        >
                            <Marker
                                position={location}
                                animation={markerAnimation}
                                icon={{
                                    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                                    fillColor: "#4F46E5",
                                    fillOpacity: 1,
                                    strokeColor: "#312E81",
                                    strokeWeight: 1,
                                    scale: 2,
                                    anchor: { x: 12, y: 24 }
                                }}
                            />
                        </GoogleMap>
                    </LoadScript>

                    <AnimatePresence>
                        {!mapLoaded && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-gray-50 flex items-center justify-center"
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
                                    <p className="text-gray-600">Loading map...</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={!address || !location}
            />
        </div>
    );
}
