// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../Router/Router';
import { PropertyProvider } from './context/PropertyContext';
import { ProgressProvider } from './context/ProgressContext';
import './styles/scrollbar.css';

function App() {
  return (
    <BrowserRouter>
      <PropertyProvider>
        <ProgressProvider>
          <AppRouter />
        </ProgressProvider>
      </PropertyProvider>
    </BrowserRouter>
  );
}

export default App;
