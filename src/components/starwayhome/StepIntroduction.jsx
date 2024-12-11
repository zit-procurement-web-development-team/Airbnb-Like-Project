import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCamera, FaList, FaPencilAlt, FaArrowRight } from 'react-icons/fa';
import NavigationFooter from '../shared/NavigationFooter';

export default function StepIntroduction() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    const progressBarVariants = {
        hidden: { width: "0%" },
        visible: {
            width: "60%",
            transition: { duration: 1, delay: 0.5 }
        }
    };

    const handleNext = () => {
        navigate('/become-a-host/amenities');
    };

    const handleBack = () => {
        navigate('/become-a-host/floor-plan');
    };

    return (
        <div className="min-h-screen pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col">
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative p-8 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 z-0" />
                    <div className="relative z-10 w-full max-w-md flex items-center justify-center">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-64 h-64 relative"
                        >
                            {/* Animated House Icon */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaHome className="w-32 h-32 text-indigo-600" />
                            </motion.div>
                            
                            {/* Decorative circles */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="absolute inset-0 rounded-full border-4 border-indigo-200 opacity-20" />
                                <div className="absolute inset-4 rounded-full border-4 border-purple-200 opacity-20" />
                                <div className="absolute inset-8 rounded-full border-4 border-pink-200 opacity-20" />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-8 lg:p-16 flex flex-col justify-center bg-white"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center justify-center p-2 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
                               step:2
                            </span>
                            <div className="flex-1">
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <motion.div
                                        variants={progressBarVariants}
                                        className="h-full bg-indigo-600 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Make your place
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> stand out</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-600 mb-12"
                    >
                        Let's make your property shine with amazing amenities, stunning photos, and an engaging description.
                    </motion.p>

                    <div className="space-y-6">
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm cursor-pointer"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <FaList className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Amenities</h3>
                                    <p className="text-gray-600">Highlight what makes your space unique</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm cursor-pointer"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FaCamera className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Photos</h3>
                                    <p className="text-gray-600">Add 5+ high-quality photos</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm cursor-pointer"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaPencilAlt className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Title & Description</h3>
                                    <p className="text-gray-600">Create an engaging listing title and description</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="mt-12 flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <span>Continue</span>
                        <FaArrowRight />
                    </motion.button> */}
                </motion.div>
            </div>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
            />
        </div>
    );
}
