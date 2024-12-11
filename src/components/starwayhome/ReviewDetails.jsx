import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaCheck, FaTimes, FaHome, FaBed, FaBath, FaUsers } from 'react-icons/fa';
import DashboardHeader from '../shared/DashboardHeader';
import NavigationFooter from '../shared/NavigationFooter';
import { useProperty } from '../../context/PropertyContext';

const DetailCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
            <div className="p-3 bg-indigo-100 rounded-xl">
                <Icon className="text-indigo-600 text-xl" />
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <p className="text-lg font-semibold text-gray-900">{value}</p>
            </div>
        </div>
    </div>
);

export default function ReviewDetails() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [editingTitle, setEditingTitle] = useState(false);
    const [editingDescription, setEditingDescription] = useState(false);
    const [tempTitle, setTempTitle] = useState(propertyData.title || '');
    const [tempDescription, setTempDescription] = useState(propertyData.description || '');
    const [error, setError] = useState('');

    const handleTitleSave = () => {
        if (tempTitle.trim().length < 10) {
            setError('Title should be at least 10 characters long');
            return;
        }
        updatePropertyData('title', tempTitle.trim());
        setEditingTitle(false);
        setError('');
    };

    const handleDescriptionSave = () => {
        const words = tempDescription.trim().split(/\s+/).filter(word => word.length > 0);
        if (words.length < 50) {
            setError('Description should be at least 50 words');
            return;
        }
        updatePropertyData('description', tempDescription.trim());
        setEditingDescription(false);
        setError('');
    };

    const handleNext = () => {
        // if (!propertyData.title || !propertyData.description) {
        //     setError('Please complete both title and description before proceeding');
        //     return;
        // }
        navigate('/become-a-host/completion');
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Review your listing
                        </h1>
                        <p className="text-lg text-gray-600">
                            Make sure everything looks good before publishing
                        </p>
                    </motion.div>

                    {/* Basic Details Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        <DetailCard
                            icon={FaUsers}
                            title="Guests"
                            value={propertyData.basicDetails?.guests || 0}
                        />
                        <DetailCard
                            icon={FaBed}
                            title="Bedrooms"
                            value={propertyData.basicDetails?.bedrooms || 0}
                        />
                        <DetailCard
                            icon={FaBath}
                            title="Bathrooms"
                            value={propertyData.basicDetails?.bathrooms || 0}
                        />
                    </motion.div>

                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-sm p-6 mb-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Title</h2>
                            <button
                                onClick={() => setEditingTitle(true)}
                                className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-2"
                            >
                                <FaEdit />
                                <span>Edit</span>
                            </button>
                        </div>
                        <AnimatePresence mode="wait">
                            {editingTitle ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                >
                                    <textarea
                                        value={tempTitle}
                                        onChange={(e) => setTempTitle(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                                        rows="2"
                                    />
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            onClick={() => {
                                                setTempTitle(propertyData.title || '');
                                                setEditingTitle(false);
                                            }}
                                            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                                        >
                                            <FaTimes />
                                        </button>
                                        <button
                                            onClick={handleTitleSave}
                                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                                        >
                                            <FaCheck />
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-gray-700"
                                >
                                    {propertyData.title || 'No title set'}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Description Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-sm p-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                            <button
                                onClick={() => setEditingDescription(true)}
                                className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-2"
                            >
                                <FaEdit />
                                <span>Edit</span>
                            </button>
                        </div>
                        <AnimatePresence mode="wait">
                            {editingDescription ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                >
                                    <textarea
                                        value={tempDescription}
                                        onChange={(e) => setTempDescription(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                                        rows="6"
                                    />
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            onClick={() => {
                                                setTempDescription(propertyData.description || '');
                                                setEditingDescription(false);
                                            }}
                                            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                                        >
                                            <FaTimes />
                                        </button>
                                        <button
                                            onClick={handleDescriptionSave}
                                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                                        >
                                            <FaCheck />
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-gray-700 whitespace-pre-wrap"
                                >
                                    {propertyData.description || 'No description set'}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-center"
                        >
                            {error}
                        </motion.div>
                    )}
                </div>
            </main>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                // disableNext={!propertyData.title || !propertyData.description}
            />
        </div>
    );
}
