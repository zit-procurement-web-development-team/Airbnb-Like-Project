// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import PropertyDetails from '../src/pages/PropertyDetails';
import PropertyAmenities from '../src/components/starwayhome/PropertyAmenities';
import PropertyTour from '../src/pages/PropertyTour';
import StarWayYourHome from '../src/pages/StarWayYourHome';
import DashBoardHost from '../src/components/starwayhome/DashBoardHost';
import PlaceTypeSelection from '../src/components/starwayhome/PlaceTypeSelection';
import LocationPicker from '../src/components/starwayhome/LocationPicker';
import SpaceTypeSelector from '../src/components/starwayhome/SpaceTypeSelector';
import AddressConfirm from '../src/components/starwayhome/AddressConfirm';
import BasicDetailsSelector from '../src/components/starwayhome/BasicDetailsSelector';
import PhotoUploader from '../src/components/starwayhome/PhotoUploader';
// import AmenitiesSelector from '../src/components/starwayhome/AmenitiesSelector';
import TitleSelector from '../src/components/starwayhome/TitleSelector';
import StepIntroduction from '../src/components/starwayhome/StepIntroduction';
import ReviewDetails from '../src/components/starwayhome/ReviewDetails';
import CompletionPage from '../src/components/starwayhome/CompletionPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/star-way-your-home" element={<StarWayYourHome />} />
      <Route path="/dash-board-host" element={<DashBoardHost />} />
      <Route path="/place-type" element={<PlaceTypeSelection />} />
      <Route path="/space-type" element={<SpaceTypeSelector />} />
      <Route path="/basic-details" element={<BasicDetailsSelector />} />
      <Route path="/step-introduction" element={<StepIntroduction />} />
      {/* <Route path="/amenities" element={<AmenitiesSelector />} /> */}
      <Route path="/photos" element={<PhotoUploader />} />
      <Route path="/title" element={<TitleSelector />} />
      <Route path="/location" element={<LocationPicker />} />
      <Route path="/confirm-address" element={<AddressConfirm />} />
      <Route path="/review" element={<ReviewDetails />} />
      <Route path="/completion" element={<CompletionPage />} />
      <Route path="/property-details/:id" element={<PropertyDetails />} />
      <Route path="/property-tour/:id" element={<PropertyTour />} />
      <Route path="/amenities" element={<PropertyAmenities />} />
    </Routes>
  );
}

export default AppRouter;
