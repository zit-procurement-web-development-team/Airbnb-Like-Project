// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// const StructureType = () => {
//   const navigate = useNavigate();
//   const [selectedType, setSelectedType] = useState(null);

//   const structureTypes = [
//     {
//       id: 'house',
//       title: 'Residential home',
//       description: 'A standard residential house',
//     },
//     {
//       id: 'cabin',
//       title: 'Cabin',
//       description: 'A house made with natural materials',
//     },
//     {
//       id: 'villa',
//       title: 'Villa',
//       description: 'A luxury residence with added amenities',
//     },
//     {
//       id: 'townhouse',
//       title: 'Townhouse',
//       description: 'A multi-floor residence attached to other units',
//     },
//     {
//       id: 'cottage',
//       title: 'Cottage',
//       description: 'A cozy house, typically in a rural setting',
//     },
//     {
//       id: 'bungalow',
//       title: 'Bungalow',
//       description: 'A small, single-story house',
//     },
//   ];

//   const handleNext = () => {
//     if (selectedType) {
//       navigate('/become-a-host/privacy-type');
//     }
//   };

//   const handleBack = () => {
//     navigate('/become-a-host/about-your-place');
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
//         <div className="h-full bg-black w-[20%]" />
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
//             Which of these best describes your place?
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {structureTypes.map((type) => (
//               <button
//                 key={type.id}
//                 onClick={() => setSelectedType(type.id)}
//                 className={`p-6 border rounded-xl text-left transition-all ${
//                   selectedType === type.id
//                     ? 'border-black bg-gray-50'
//                     : 'border-gray-200 hover:border-black'
//                 }`}
//               >
//                 <h3 className="text-lg font-medium mb-1">{type.title}</h3>
//                 <p className="text-gray-600">{type.description}</p>
//               </button>
//             ))}
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
//             disabled={!selectedType}
//             className={`px-6 py-3 rounded-lg text-white ${
//               selectedType
//                 ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
//                 : 'bg-gray-200 cursor-not-allowed'
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default StructureType;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../shared/DashboardHeader';
import NavigationFooter from '../shared/NavigationFooter';
import { useProperty } from '../../context/PropertyContext';
import { motion } from 'framer-motion';

const spaceTypes = [
    {
        id: 'entire_place',
        title: 'Entire Place',
        description: 'A place all to yourself',
        details: [
            'Exclusive use of the entire space',
            'Private entrance',
            'No shared spaces'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        id: 'private_room',
        title: 'Private Room',
        description: 'Your own room, shared spaces',
        details: [
            'Private bedroom',
            'Shared common areas',
            'May interact with others'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        )
    },
    {
        id: 'shared_room',
        title: 'Shared Room',
        description: 'Shared sleeping space and areas',
        details: [
            'Shared sleeping area',
            'Shared common spaces',
            'Regular interaction with others'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

export default function SpaceTypeSelector() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [expandedType, setExpandedType] = useState(null);

    const handleSelection = (typeId) => {
        updatePropertyData('spaceType', typeId);
        localStorage.setItem('spaceType', typeId);
        setExpandedType(typeId);
    };

    const handleNext = () => {
        if (propertyData.spaceType) {
          navigate('/become-a-host/location');
        }
    };
    const handleBack = () => {
          navigate('/become-a-host/about-your-place');
        };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 pb-24">
                <motion.div 
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="text-center mb-12">
                        <motion.h1 
                            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            What will guests have?
                        </motion.h1>
                        <motion.p 
                            className="text-lg text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Choose how guests will experience your space
                        </motion.p>
                    </div>

                    <div className="space-y-4">
                        {spaceTypes.map((type) => (
                            <motion.div 
                                key={type.id}
                                variants={itemVariants}
                                className="group"
                            >
                                <motion.button
                                    onClick={() => handleSelection(type.id)}
                                    className={`w-full p-6 rounded-xl transition-all duration-300 bg-white
                                        ${expandedType === type.id ? 'shadow-lg' : 'hover:shadow-md'}
                                        ${propertyData.spaceType === type.id 
                                            ? 'ring-2 ring-indigo-500' 
                                            : 'hover:ring-2 hover:ring-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-200
                                            ${propertyData.spaceType === type.id 
                                                ? 'bg-indigo-100 text-indigo-600' 
                                                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                            }`}
                                        >
                                            {type.icon}
                                        </div>
                                        <div className="flex-grow text-left">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {type.title}
                                            </h3>
                                            <p className="text-gray-600 mb-2">
                                                {type.description}
                                            </p>
                                            {expandedType === type.id && (
                                                <motion.ul
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="space-y-2 mt-3 text-sm text-gray-500"
                                                >
                                                    {type.details.map((detail, index) => (
                                                        <motion.li
                                                            key={index}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span>{detail}</span>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className={`w-6 h-6 rounded-full border-2 transition-colors duration-200
                                                ${propertyData.spaceType === type.id
                                                    ? 'border-indigo-500 bg-indigo-500'
                                                    : 'border-gray-300 group-hover:border-gray-400'
                                                }`}
                                            >
                                                {propertyData.spaceType === type.id && (
                                                    <svg className="w-full h-full text-white" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>

            <NavigationFooter   
                onNext={handleNext}
                onBack={handleBack}
                disableNext={!propertyData.spaceType}
            />
        </div>
    );
}
