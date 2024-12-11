import React, { useState } from 'react';
import Head from './views/Head';
import Amenities from './views/Amenities';
import PropertySlider from './views/PropertySlider';
import QuickStats from './views/QuickStats';
import PropertyDe from './views/PropertyDe';
import Footer from './views/Footer';
import { PropertyProvider } from '../context/PropertyContext';
import SearchFilters from './views/SearchFilters';
import VacationStyles from './views/VacationStyles';
import HotTubProperties from './views/HotTubProperties';
import HeroSection from './views/HeroSection';

// Separate the main content into a new component
const AppContent = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  // const { state, setSelectedProperty } = useProperty();

  const handleFiltersApply = (filters) => {
    console.log('Applied filters:', filters);
    // Handle filters application
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head onFiltersClick={() => setIsFiltersOpen(true)} />
      
      <main className="pt-20 space-y-16 lg:space-y-24">
        {/* Hero Section with full width */}
        <section className="relative w-full">
          <HeroSection />
        </section>

        {/* Main Content with max-width container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {/* Featured Properties Slider */}
            <section className="relative">
              <PropertySlider
                title="Top-rated house rentals in Paso Robles"
                subtitle="Guests agree: these houses are highly rated for location, cleanliness, and more"
                onPropertySelect={handlePropertySelect}
              />
            </section>

            {/* Vacation Styles */}
            <section className="relative bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
              <VacationStyles />
            </section>

            {/* Amenities Section */}
            <section className="relative">
              <Amenities />
            </section>

            {/* Hot Tub Properties Grid */}
            <section className="relative">
              <HotTubProperties onPropertySelect={handlePropertySelect} />
            </section>

            {/* Quick Stats with Background */}
            <section className="relative bg-rose-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
              <QuickStats />
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Modals and Overlays */}
      <SearchFilters
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onApply={handleFiltersApply}
      />
{/* 
      {state.selectedProperty && (
        <PropertyDe
          property={state.selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )} */}
    </div>
  );
};

// Main App component
function Stays() {
  return (
    <PropertyProvider>
      <AppContent />
    </PropertyProvider>
  );
}

export default Stays;