import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import Footer from '../components/home/Footer';

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [activeFilters, setActiveFilters] = useState(null);

  const handleFiltersChange = (filters) => {
    setActiveFilters(filters);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onFiltersChange={handleFiltersChange}
        onTypeChange={handleTypeChange}
        selectedType={selectedType}
      />
      <main className="flex-1">
        <Hero 
          selectedType={selectedType}
          activeFilters={activeFilters}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;