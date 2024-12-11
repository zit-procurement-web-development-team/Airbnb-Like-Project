// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaBed, FaBath, FaUser } from 'react-icons/fa';

// const FloorPlan = () => {
//   const navigate = useNavigate();
//   const [floorPlan, setFloorPlan] = useState({
//     guests: 1,
//     bedrooms: 1,
//     beds: 1,
//     bathrooms: 1,
//   });

//   const handleIncrement = (field) => {
//     setFloorPlan((prev) => ({
//       ...prev,
//       [field]: prev[field] + 1,
//     }));
//   };

//   const handleDecrement = (field) => {
//     if (floorPlan[field] > 1) {
//       setFloorPlan((prev) => ({
//         ...prev,
//         [field]: prev[field] - 1,
//       }));
//     }
//   };

//   const handleNext = () => {
//     navigate('/become-a-host/amenities');
//   };

//   const handleBack = () => {
//     navigate('/become-a-host/address');
//   };

//   const Counter = ({ label, value, field, icon: Icon }) => (
//     <div className="flex items-center justify-between py-6 border-b">
//       <div className="flex items-center gap-4">
//         <Icon className="w-6 h-6 text-gray-700" />
//         <span className="text-lg">{label}</span>
//       </div>
//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => handleDecrement(field)}
//           className={`p-2 rounded-full border ${
//             value === 1
//               ? 'border-gray-200 text-gray-300 cursor-not-allowed'
//               : 'border-gray-700 text-gray-700 hover:border-black hover:bg-gray-100'
//           }`}
//           disabled={value === 1}
//         >
//           -
//         </button>
//         <span className="w-8 text-center">{value}</span>
//         <button
//           onClick={() => handleIncrement(field)}
//           className="p-2 rounded-full border border-gray-700 text-gray-700 hover:border-black hover:bg-gray-100"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
//         <div className="h-full bg-black w-[50%]" />
//       </div>

//       {/* Navigation header */}
//       <header className="fixed top-0 left-0 right-0 h-16 flex items-center px-6 bg-white border-b">
//         <button
//           onClick={handleBack}
//           className="p-2 hover:bg-gray-100 rounded-full"
//         >
//           <FaArrowLeft className="w-4 h-4" />
//         </button>
//       </header>

//       <main className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-3xl font-semibold mb-8">
//             Share some basics about your place
//           </h1>
//           <p className="text-gray-600 mb-8">
//             You'll add more details later, like bed types.
//           </p>

//           <div className="space-y-2">
//             <Counter
//               label="Guests"
//               value={floorPlan.guests}
//               field="guests"
//               icon={FaUser}
//             />
//             <Counter
//               label="Bedrooms"
//               value={floorPlan.bedrooms}
//               field="bedrooms"
//               icon={FaBed}
//             />
//             <Counter
//               label="Beds"
//               value={floorPlan.beds}
//               field="beds"
//               icon={FaBed}
//             />
//             <Counter
//               label="Bathrooms"
//               value={floorPlan.bathrooms}
//               field="bathrooms"
//               icon={FaBath}
//             />
//           </div>
//         </motion.div>
//       </main>

//       {/* Footer navigation */}
//       <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-6">
//         <div className="max-w-3xl mx-auto flex justify-between items-center">
//           <button
//             onClick={handleBack}
//             className="text-sm font-semibold underline"
//           >
//             Back
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
//           >
//             Next
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FloorPlan;




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
    navigate('/become-a-host/step-introduction');
  };

  const handleBack = () => {
    navigate('/become-a-host/address');
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
