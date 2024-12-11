// src/router.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Main pages
import Home from '../src/pages/Home';
import PropertyDetails from '../src/pages/PropertyDetails';
import PropertyTour from '../src/pages/PropertyTour';
import StarWayYourHome from '../src/pages/StarWayYourHome';
import Stays from '../src/components/Stays';
import SignUp from '../src/regestarAndLogin/SignUp';
import Login from '../src/regestarAndLogin/Login';
import BookingPage from "../src/pages/BookingPage"

// Host flow components
import DashBoardHost from '../src/components/starwayhome/DashBoardHost';
import AboutYourPlace from '../src/components/starwayhome/AboutYourPlace';
import StructureType from '../src/components/starwayhome/StructureType';
// import PrivacyType from '../src/components/starwayhome/PrivacyType';
import LocationPicker from '../src/components/starwayhome/LocationPicker';
import AddressConfirm from '../src/components/starwayhome/AddressConfirm';
import StepIntroduction from '../src/components/starwayhome/StepIntroduction';
import FloorPlan from '../src/components/starwayhome/FloorPlan';
import StandoutAmenities from '../src/components/starwayhome/StandoutAmenities';
import PhotoUploader from '../src/components/starwayhome/PhotoUploader';
import TitleSelector from '../src/components/starwayhome/TitleSelector';
import PropertyDescription from '../src/components/starwayhome/PropertyDescription';
import FinishSetup from '../src/components/starwayhome/FinishSetup';
import PricingSettings from '../src/components/starwayhome/PricingSettings';
import LegalInfo from '../src/components/starwayhome/LegalInfo';
import ReviewDetails from '../src/components/starwayhome/ReviewDetails';
import CompletionPage from '../src/components/starwayhome/CompletionPage';

// Host dashboard components
import HostLayout from './components/host/HostLayout';
import HostDashboard from './components/host/HostDashboard';
import Listings from './components/host/Listings';
import Reservations from './components/host/Reservations';
import Earnings from './components/host/Earnings';
import Insights from './components/host/Insights';

// Context
import { StepsProvider } from '../src/context/StepsContext';

function AppRouter() {
  return (
    <StepsProvider>
      <Routes>
        {/* Main public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<PropertyDetails />} />
        <Route path="/experiences/:id" element={<PropertyTour />} />
        <Route path="/host/homes" element={<StarWayYourHome />} />
        <Route path="/host/stays" element={<Stays />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='booking' element={<BookingPage/>} />

        {/* Host onboarding flow */}
        <Route path="/become-a-host">
          <Route index element={<DashBoardHost />} />
          <Route path="about-your-place" element={<AboutYourPlace />} />
          <Route path="structure-type" element={<StructureType />} />
          <Route path="step-introduction" element={<StepIntroduction />} />
          <Route path="location" element={<LocationPicker />} />
          <Route path="address" element={<AddressConfirm />} />
          <Route path="floor-plan" element={<FloorPlan />} />
          <Route path="amenities" element={<StandoutAmenities />} />
          <Route path="photos" element={<PhotoUploader />} />
          <Route path="title" element={<TitleSelector />} />
          <Route path="description" element={<PropertyDescription />} />
          <Route path="finish-setup" element={<FinishSetup />} />
          <Route path="pricing" element={<PricingSettings />} />
          <Route path="legal" element={<LegalInfo />} />
          <Route path="review" element={<ReviewDetails />} />
          <Route path="completion" element={<CompletionPage />} />
        </Route>

        {/* Host dashboard routes */}
        <Route path="/hosting" element={<HostLayout />}>
          <Route index element={<Navigate to="/hosting/dashboard" replace />} />
          <Route path="dashboard" element={<HostDashboard />} />
          <Route path="listings" element={<Listings />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="insights" element={<Insights />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </StepsProvider>
  );
}

export default AppRouter;
