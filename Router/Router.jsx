// src/router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import PropertyDetails from '../src/pages/PropertyDetails';
import PropertyTour from '../src/pages/PropertyTour';
import StarWayYourHome from '../src/pages/StarWayYourHome';
import BookingPage from '../src/pages/BookingPage';
import Signup from "../src/pages/SignUp";
import Login from '../src/pages/Login';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/property-tour" element={<PropertyTour />} />
        <Route path="/star-way-your-home" element={<StarWayYourHome />} />
        <Route path='booking' element={<BookingPage/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
