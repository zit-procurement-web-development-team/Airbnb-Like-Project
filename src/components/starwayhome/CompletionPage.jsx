import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import { FaCheckCircle, FaHome, FaArrowRight } from 'react-icons/fa';

const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 50
};

const steps = [
    { title: 'Saving property details', delay: 1000 },
    { title: 'Preparing your listing', delay: 2000 },
    { title: 'Almost there...', delay: 3000 },
    { title: 'Done!', delay: 4000 }
];

export default function CompletionPage() {
    const navigate = useNavigate();
    const { propertyData } = useProperty();
    const [currentStep, setCurrentStep] = useState(0);
    const [isPublishing, setIsPublishing] = useState(true);
    const [isConfettiActive, setIsConfettiActive] = useState(false);
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current?.({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio),
            colors: ['#FF5A5F', '#00A699', '#FC642D', '#484848']
        });
    }, []);

    const fireConfetti = useCallback(() => {
        setIsConfettiActive(true);
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);

    useEffect(() => {
        let timeout;
        if (currentStep < steps.length) {
            timeout = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
                if (currentStep === steps.length - 2) {
                    setIsPublishing(false);
                    fireConfetti();
                }
            }, steps[currentStep].delay);
        }
        return () => clearTimeout(timeout);
    }, [currentStep, fireConfetti]);

    const handleViewListing = () => {
        // Navigate to the property details page
        // You might want to replace this with the actual property ID
        navigate('/property-details/1');
    };

    const handleCreateAnother = () => {
        navigate('/star-way-your-home');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-4">
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
            
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 text-center relative overflow-hidden">
                {isPublishing ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="w-24 h-24 mx-auto border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={steps[currentStep]?.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-2xl font-semibold text-gray-800"
                            >
                                {steps[currentStep]?.title}
                            </motion.h2>
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <div className="relative">
                            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                <FaCheckCircle className="w-16 h-16 text-green-500" />
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-4 top-0 bg-indigo-600 text-white p-2 rounded-full"
                            >
                                <FaHome className="w-4 h-4" />
                            </motion.div>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Congratulations!
                            </h1>
                            <p className="text-lg text-gray-600">
                                Your property has been successfully listed on StarWay.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleViewListing}
                                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
                            >
                                <span>View Listing</span>
                                <FaArrowRight />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleCreateAnother}
                                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                            >
                                Create Another Listing
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
