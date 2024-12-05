import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlaceTypeSelection from './components/starwayhome/PlaceTypeSelection';
import LocationPicker from './components/starwayhome/LocationPicker';
import AddressConfirm from './components/starwayhome/AddressConfirm';

// Import future components (to be created)
const PropertyAmenities = () => <div>Property Amenities</div>; // Placeholder
const PropertyPhotos = () => <div>Property Photos</div>; // Placeholder
const PropertyTitle = () => <div>Property Title</div>; // Placeholder
const PropertyDescription = () => <div>Property Description</div>; // Placeholder
const PropertyPricing = () => <div>Property Pricing</div>; // Placeholder
const PropertyRules = () => <div>Property Rules</div>; // Placeholder
const PropertyAvailability = () => <div>Property Availability</div>; // Placeholder
const PropertyReview = () => <div>Property Review</div>; // Placeholder

export default function AppRouter() {
    return (
        <Routes>
            {/* Initial Property Setup */}
            <Route path="/" element={<PlaceTypeSelection />} />
            <Route path="/location" element={<LocationPicker />} />
            <Route path="/address-confirmation" element={<AddressConfirm />} />
            
            {/* Property Details */}
            <Route path="/amenities" element={<PropertyAmenities />} />
            <Route path="/photos" element={<PropertyPhotos />} />
            
            {/* Property Information */}
            <Route path="/title" element={<PropertyTitle />} />
            <Route path="/description" element={<PropertyDescription />} />
            
            {/* Booking Settings */}
            <Route path="/pricing" element={<PropertyPricing />} />
            <Route path="/rules" element={<PropertyRules />} />
            <Route path="/availability" element={<PropertyAvailability />} />
            
            {/* Final Review */}
            <Route path="/review" element={<PropertyReview />} />
        </Routes>
    );
}
