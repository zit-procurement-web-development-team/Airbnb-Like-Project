import React, { createContext, useContext, useState } from 'react';

const StepsContext = createContext();

export const steps = [
    {
        id: 1,
        title: 'Tell us about your place',
        pages: [
            '/become-a-host/about-your-place',
            '/become-a-host/structure-type',
            '/become-a-host/privacy-type',
            '/become-a-host/location'
        ]
    },
    {
        id: 2,
        title: 'Set up your space',
        pages: [
            '/become-a-host/address',
            '/become-a-host/floor-plan',
            '/become-a-host/amenities',
            '/become-a-host/photos'
        ]
    },
    {
        id: 3,
        title: 'Describe your place',
        pages: [
            '/become-a-host/title',
            '/become-a-host/description',
            '/become-a-host/finish-setup',
            '/become-a-host/pricing'
        ]
    },
    {
        id: 4,
        title: 'Finish up',
        pages: [
            '/become-a-host/legal',
            '/become-a-host/review',
            '/become-a-host/completion'
        ]
    }
];

export function StepsProvider({ children }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [draftListings, setDraftListings] = useState([]);
    const [currentListingId, setCurrentListingId] = useState(null);

    const updateStep = (pathname) => {
        const stepIndex = steps.findIndex(step => 
            step.pages.includes(pathname)
        );

        if (stepIndex !== -1) {
            const newStep = stepIndex + 1;
            setCurrentStep(newStep);

            if (!completedSteps.includes(newStep - 1) && newStep > 1) {
                setCompletedSteps(prev => [...prev, newStep - 1]);
            }

            if (currentListingId) {
                setDraftListings(prev => prev.map(listing => 
                    listing.id === currentListingId 
                        ? { ...listing, currentStep: newStep, lastPath: pathname }
                        : listing
                ));
            }
        }
    };

    const startNewListing = () => {
        const newListingId = Date.now().toString();
        const newListing = {
            id: newListingId,
            currentStep: 1,
            lastPath: '/become-a-host/about-your-place',
            createdAt: new Date().toISOString(),
            completed: false
        };
        setDraftListings(prev => [...prev, newListing]);
        setCurrentListingId(newListingId);
        setCurrentStep(1);
        setCompletedSteps([]);
        return newListingId;
    };

    const resumeListing = (listingId) => {
        const listing = draftListings.find(l => l.id === listingId);
        if (listing) {
            setCurrentListingId(listingId);
            setCurrentStep(listing.currentStep);
            setCompletedSteps(Array.from({ length: listing.currentStep - 1 }, (_, i) => i + 1));
            return listing.lastPath;
        }
        return null;
    };

    const completeListing = (listingId) => {
        setDraftListings(prev => prev.map(listing =>
            listing.id === listingId
                ? { ...listing, completed: true }
                : listing
        ));
    };

    const value = {
        currentStep,
        completedSteps,
        updateStep,
        totalSteps: steps.length,
        draftListings,
        currentListingId,
        startNewListing,
        resumeListing,
        completeListing
    };

    return (
        <StepsContext.Provider value={value}>
            {children}
        </StepsContext.Provider>
    );
}

export function useSteps() {
    const context = useContext(StepsContext);
    if (context === undefined) {
        throw new Error('useSteps must be used within a StepsProvider');
    }
    return context;
}
