// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import { FaHome, FaArrowRight, FaTachometerAlt } from 'react-icons/fa';
// import StepsProgress from './StepsProgress';
// import { useSteps } from '../../context/StepsContext';

// const houseVariants = {
//     initial: {
//         scale: 0.8,
//         opacity: 0,
//         y: 20
//     },
//     animate: {
//         scale: 1,
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.8,
//             ease: "easeOut"
//         }
//     }
// };

// const floatingAnimation = {
//     initial: { y: 0 },
//     animate: {
//         y: [-10, 0, -10],
//         transition: {
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//         }
//     }
// };

// export default function DashBoardHost() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { updateStep } = useSteps();

//     React.useEffect(() => {
//         updateStep(location.pathname);
//     }, [location.pathname, updateStep]);

//     const handleNext = () => {
//         navigate('/become-a-host/about-your-place');
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 {/* Top Navigation Bar */}
//                 <div className="mb-12 flex justify-between items-center">
//                     <Link 
//                         to="/hosting/dashboard"
//                         className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
//                     >
//                         <FaTachometerAlt className="w-5 h-5" />
//                         <span className="font-semibold">Go to Host Dashboard</span>
//                     </Link>
//                 </div>

//                 {/* Steps Progress */}
//                 <StepsProgress />

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
//                     {/* Left Column - Text Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="space-y-8"
//                     >
//                         <div className="space-y-4">
//                             <motion.div
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3 }}
//                                 className="inline-block bg-indigo-100 rounded-full px-4 py-2 text-indigo-600 font-semibold"
//                             >
//                                 Step 1
//                             </motion.div>
//                             <motion.h1
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.4 }}
//                                 className="text-4xl sm:text-5xl font-bold text-gray-900"
//                             >
//                                 Tell us about your place
//                             </motion.h1>
//                             <motion.p
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.5 }}
//                                 className="text-xl text-gray-600 leading-relaxed"
//                             >
//                                 In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
//                             </motion.p>
//                         </div>

//                         <motion.button
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.6 }}
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             onClick={handleNext}
//                             className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
//                         >
//                             <span>Get Started</span>
//                             <FaArrowRight />
//                         </motion.button>
//                     </motion.div>

//                     {/* Right Column - Illustration */}
//                     <motion.div
//                         variants={houseVariants}
//                         initial="initial"
//                         animate="animate"
//                         className="relative"
//                     >
//                         <motion.div
//                             variants={floatingAnimation}
//                             initial="initial"
//                             animate="animate"
//                             className="w-full h-96 bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center"
//                         >
//                             <FaHome className="w-32 h-32 text-indigo-600" />
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }






import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const houseVariants = {
    initial: {
        scale: 0.8,
        opacity: 0,
        y: 20
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 0, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function DashBoardHost() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/become-a-host/about-your-place');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-block bg-indigo-100 rounded-full px-4 py-2 text-indigo-600 font-semibold"
                            >
                                Step 1
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl sm:text-5xl font-bold text-gray-900"
                            >
                                Tell us about your place
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl text-gray-600 leading-relaxed"
                            >
                                In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
                            </motion.p>
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleNext}
                            className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                        >
                            <span>Get Started</span>
                            <FaArrowRight />
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Animated House */}
                    <motion.div
                        variants={houseVariants}
                        initial="initial"
                        animate="animate"
                        className="relative"
                    >
                        <motion.div
                            variants={floatingAnimation}
                            initial="initial"
                            animate="animate"
                            className="relative w-full aspect-square max-w-lg mx-auto"
                        >
                            {/* Main House */}
                            <motion.div className="absolute inset-0">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {/* House Body */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        d="M40 100 L100 40 L160 100 L160 180 L40 180 Z"
                                        fill="none"
                                        stroke="#4F46E5"
                                        strokeWidth="4"
                                    />
                                    {/* Roof */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                        d="M30 100 L100 30 L170 100"
                                        fill="none"
                                        stroke="#4F46E5"
                                        strokeWidth="4"
                                    />
                                    {/* Door */}
                                    <motion.rect
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 1, delay: 1.5 }}
                                        x="85"
                                        y="120"
                                        width="30"
                                        height="60"
                                        fill="#4F46E5"
                                    />
                                    {/* Windows */}
                                    <motion.rect
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 2 }}
                                        x="60"
                                        y="100"
                                        width="20"
                                        height="20"
                                        fill="#4F46E5"
                                    />
                                    <motion.rect
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 2.2 }}
                                        x="120"
                                        y="100"
                                        width="20"
                                        height="20"
                                        fill="#4F46E5"
                                    />
                                </svg>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.5, duration: 0.5 }}
                                className="absolute -top-8 -right-8 bg-purple-100 rounded-full p-4"
                            >
                                <FaHome className="w-8 h-8 text-purple-600" />
                            </motion.div>
                        </motion.div>

                        {/* Background Decorative Circles */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            transition={{ delay: 1 }}
                            className="absolute inset-0 -z-10"
                        >
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-200 rounded-full blur-xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200 rounded-full blur-xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}