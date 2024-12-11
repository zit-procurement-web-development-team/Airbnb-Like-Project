import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';
import { FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';

export default function AddressConfirm() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [showTooltip, setShowTooltip] = useState(false);
    const [formData, setFormData] = useState({
        country: 'LR',
        streetAddress: '',
        aptFloor: '',
        city: '',
        province: '',
        postalCode: '',
        showSpecificLocation: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleNext = () => {
        updatePropertyData({
            ...propertyData,
            addressDetails: formData
        });
        navigate('/become-a-host/floor-plan');
    };

    const handleBack = () => {
        navigate('/become-a-host/location');
    };

    const isFormValid = () => {
        return formData.country && formData.streetAddress && formData.city;
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Confirm your address
                        </h1>
                        <div className="flex items-start space-x-2 text-gray-600">
                            <FaInfoCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <p>Your address is only shared with guests after they've made a reservation.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Country / region
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="LR">Liberia - LR</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Street address
                                </label>
                                <input
                                    type="text"
                                    name="streetAddress"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your street address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Apt, floor, bldg (if applicable)
                                </label>
                                <input
                                    type="text"
                                    name="aptFloor"
                                    value={formData.aptFloor}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Optional"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    City / town / village
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your city"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Province / state / territory (if applicable)
                                </label>
                                <input
                                    type="text"
                                    name="province"
                                    value={formData.province}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Optional"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Postal code (if applicable)
                                </label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Optional"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="relative">
                                <div className="flex items-start space-x-3">
                                    <div className="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            name="showSpecificLocation"
                                            checked={formData.showSpecificLocation}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                                            <span>Show your specific location</span>
                                            <FaMapMarkerAlt 
                                                className="text-gray-400 cursor-pointer"
                                                onMouseEnter={() => setShowTooltip(true)}
                                                onMouseLeave={() => setShowTooltip(false)}
                                            />
                                        </label>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Make it clear to guests where your place is located. We'll only share your address after they've made a reservation.
                                            <a href="#" className="text-indigo-600 hover:text-indigo-700 ml-1">
                                                Learn more
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {showTooltip && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            className="absolute left-0 -bottom-20 bg-gray-900 text-white text-xs rounded-lg p-3 w-64 z-10"
                                        >
                                            Your exact location will only be shared with confirmed guests.
                                            <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={!isFormValid()}
            />
        </div>
    );
}
