import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardHeader from '../shared/DashboardHeader';
import NavigationFooter from '../shared/NavigationFooter';
import { useProperty } from '../../context/PropertyContext';
// import { useNavigate } from 'react-router-dom';
const MAX_CHARS = 100;

export default function TitleSelector() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [title, setTitle] = useState(propertyData.title || '');
    const [charCount, setCharCount] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        setCharCount(title.length);
    }, [title]);

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        if (newTitle.length <= MAX_CHARS) {
            setTitle(newTitle);
            setError('');
        }
    };

    const handleNext = () => {
        if (title.trim().length < 10) {
            setError('Title should be at least 10 characters long');
            return;
        }
        updatePropertyData('title', title.trim());
        navigate('/become-a-host/description');
    };

    const handleBack = () => {
        navigate('/become-a-host/amenities');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Now, let's give your castle a title
                        </h1>
                        <p className="text-lg text-gray-600">
                            Create a title that captures what makes your place special
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                    >
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Property Title
                                    </label>
                                    <span className={`text-sm ${
                                        charCount > MAX_CHARS - 20 
                                            ? charCount >= MAX_CHARS 
                                                ? 'text-red-500' 
                                                : 'text-yellow-500' 
                                            : 'text-gray-500'
                                    }`}>
                                        {charCount}/{MAX_CHARS} characters
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Cozy Retreat in the Heart of the City"
                                    className={`w-full px-4 py-3 text-lg rounded-xl border ${
                                        error ? 'border-red-500' : 'border-gray-200'
                                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200`}
                                />
                                {error && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex items-center space-x-3 text-gray-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Tips for a great title:</span>
                                </div>
                                <ul className="space-y-2 text-gray-600 ml-9">
                                    <li>• Highlight unique features of your property</li>
                                    <li>• Mention the property type and location</li>
                                    <li>• Keep it concise but descriptive</li>
                                    <li>• Use proper capitalization</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <NavigationFooter 
                
                onNext={handleNext}
                onBack={handleBack}
                disableNext={title.trim().length < 10}
            />
        </div>
    );
}
