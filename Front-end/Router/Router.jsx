// src/router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../src/pages/Home';
// import About from './components/About';
// import NotFound from './components/NotFound';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
