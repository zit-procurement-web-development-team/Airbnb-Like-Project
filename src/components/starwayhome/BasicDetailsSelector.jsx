import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBed, FaBath, FaUsers, FaPlus, FaMinus } from 'react-icons/fa';
import DashboardHeader from '../shared/DashboardHeader';
import NavigationFooter from '../shared/NavigationFooter';
import { useProperty } from '../../context/PropertyContext';

const DetailCard = ({ title, icon: Icon, value, onIncrement, onDecrement, maxValue = 50, description }) => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 rounded-xl">
                    <Icon className="text-indigo-600 text-xl" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    {description && (
                        <p className="text-sm text-gray-500">{description}</p>
                    )}
                </div>
            </div>
            
            <div className="flex items-center justify-between">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onDecrement}
                    disabled={value <= 1}
                >
                    <FaMinus className="text-sm" />
                </motion.button>

                <motion.span
                    key={value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl font-bold text-gray-800 mx-4"
                >
                    {value}
                </motion.span>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onIncrement}
                    disabled={value >= maxValue}
                >
                    <FaPlus className="text-sm" />
                </motion.button>
            </div>

            <div className="mt-2 text-center text-sm text-gray-500">
                {value >= maxValue ? `Maximum ${maxValue}` : '\u00A0'}
            </div>
        </motion.div>
    );
};

export default function BasicDetailsSelector() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [details, setDetails] = useState({
        guests: propertyData.basicDetails?.guests || 1,
        bedrooms: propertyData.basicDetails?.bedrooms || 1,
        bathrooms: propertyData.basicDetails?.bathrooms || 1
    });

    const handleIncrement = (field) => {
        setDetails(prev => {
            const newDetails = {
                ...prev,
                [field]: Math.min(prev[field] + 1, 50)
            };
            updatePropertyData('basicDetails', newDetails);
            return newDetails;
        });
    };

    const handleDecrement = (field) => {
        setDetails(prev => {
            const newDetails = {
                ...prev,
                [field]: Math.max(prev[field] - 1, 1)
            };
            updatePropertyData('basicDetails', newDetails);
            return newDetails;
        });
    };

    const handleNext = () => {
        if (details.guests >= 1 && details.bedrooms >= 1 && details.bathrooms >= 1) {
            navigate('/step-introduction');
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Let's set up your space
                        </h1>
                        <p className="text-lg text-gray-600">
                            Share some basic info about your property
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <DetailCard
                            title="Guests"
                            description="Maximum number of guests allowed"
                            icon={FaUsers}
                            value={details.guests}
                            onIncrement={() => handleIncrement('guests')}
                            onDecrement={() => handleDecrement('guests')}
                        />
                        
                        <DetailCard
                            title="Bedrooms"
                            description="Number of private sleeping areas"
                            icon={FaBed}
                            value={details.bedrooms}
                            onIncrement={() => handleIncrement('bedrooms')}
                            onDecrement={() => handleDecrement('bedrooms')}
                        />
                        
                        <DetailCard
                            title="Bathrooms"
                            description="Number of bathrooms available"
                            icon={FaBath}
                            value={details.bathrooms}
                            onIncrement={() => handleIncrement('bathrooms')}
                            onDecrement={() => handleDecrement('bathrooms')}
                        />
                    </motion.div>
                </div>
            </main>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={!details.guests || !details.bedrooms || !details.bathrooms}
            />
        </div>
    );
}
