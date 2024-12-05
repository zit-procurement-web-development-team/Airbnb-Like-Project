import React, { createContext, useContext, useState } from 'react';

export const PropertyContext = createContext();

export const useProperty = () => {
    const context = useContext(PropertyContext);
    if (!context) {
        throw new Error('useProperty must be used within a PropertyProvider');
    }
    return context;
};

export const PropertyProvider = ({ children }) => {
    const [propertyData, setPropertyData] = useState({
        basicInfo: {
            propertyType: '',
            location: '',
            description: ''
        },
        placeType: '',
        amenities: [],
        photos: [],
        pricing: {
            basePrice: '',
            currency: 'USD'
        }
    });

    const updatePropertyData = (field, value) => {
        setPropertyData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const value = {
        propertyData,
        updatePropertyData
    };

    return (
        <PropertyContext.Provider value={value}>
            {children}
        </PropertyContext.Provider>
    );
};
