// src/router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import PropertyDetails from '../src/pages/PropertyDetails';
import PropertyTour from '../src/pages/PropertyTour';
import StarWayYourHome from '../src/pages/StarWayYourHome';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/property-tour" element={<PropertyTour />} />
        <Route path="/star-way-your-home" element={<StarWayYourHome />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
