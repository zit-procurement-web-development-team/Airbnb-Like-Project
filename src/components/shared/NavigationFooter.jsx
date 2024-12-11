import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Define the route order for navigation
const ROUTE_ORDER = [
    '/',
    '/starway-home',
    '/become-a-host',
    '/become-a-host/about-your-place',
    '/become-a-host/structure-type',
    '/become-a-host/location',
    '/become-a-host/address',
    '/become-a-host/floor-plan',
    '/become-a-host/step-introduction',
    '/become-a-host/amenities',
    '/become-a-host/photos',
    '/become-a-host/title',
    '/become-a-host/description',
    '/become-a-host/finish-setup',
    '/become-a-host/pricing',
    '/become-a-host/legal',
    '/become-a-host/review',
    '/become-a-host/completion',
];

export default function NavigationFooter({ onNext, onBack, disableNext = false }) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    
    // Calculate progress percentage
    const currentIndex = ROUTE_ORDER.indexOf(currentPath);
    const progress = Math.round((currentIndex / (ROUTE_ORDER.length - 1)) * 100);

    const handleNext = () => {
        if (onNext) {
            // If onNext is provided, use it (for custom validation/logic)
            onNext();
        } else if (currentIndex < ROUTE_ORDER.length - 1 && !disableNext) {
            // Otherwise, just navigate to next route
            navigate(ROUTE_ORDER[currentIndex + 1]);
        }
    };

    const handleBack = () => {
        if (onBack) {
            // If onBack is provided, use it (for custom logic)
            onBack();
        } else if (currentIndex > 0) {
            // Otherwise, navigate to previous route
            navigate(ROUTE_ORDER[currentIndex - 1]);
        } else {
            // If we're at the first route, confirm before exiting
            if (window.confirm('Are you sure you want to exit? Your progress will be saved.')) {
                navigate('/');
            }
        }
    };

    // Hide footer on certain routes
    if (['/'].includes(currentPath)) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50"
        >
            {/* Progress bar */}
            <div className="h-1 bg-gray-100 w-full">
                <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBack}
                    className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 rounded-full
                        hover:bg-gray-200 transition-all duration-300 font-medium space-x-2 group"
                >
                    <FaArrowLeft className="text-gray-600 group-hover:text-gray-800 transition-colors" />
                    <span>Back</span>
                </motion.button>

                {/* Progress indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-500">
                    {progress}% Complete
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    disabled={disableNext}
                    className={`flex items-center px-6 py-3 rounded-full font-medium space-x-2 group
                        ${disableNext 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        } transition-all duration-300`}
                >
                    <span>Next</span>
                    <FaArrowRight className={`${
                        disableNext ? 'text-gray-400' : 'text-white'
                    } group-hover:translate-x-0.5 transition-transform`} />
                </motion.button>
            </div>
        </motion.div>
    );
}
