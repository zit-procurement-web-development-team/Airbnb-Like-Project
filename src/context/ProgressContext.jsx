import React, { createContext, useContext, useState } from 'react';

export const ProgressContext = createContext();

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(0);

    const updateProgress = (step) => {
        setProgress(step);
    };

    const value = {
        progress,
        updateProgress
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
