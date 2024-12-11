// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// const AboutYourPlace = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState(null);

//   const placeTypes = [
//     {
//       id: 'house',
//       title: 'A house',
//       description: 'A home that may stand alone or be attached to other homes',
//     },
//     {
//       id: 'apartment',
//       title: 'An apartment',
//       description: 'A place within a multi-unit building or complex',
//     },
//     {
//       id: 'guesthouse',
//       title: 'A guest house',
//       description: 'A separate building on the same property as a main house',
//     },
//     {
//       id: 'hotel',
//       title: 'A hotel',
//       description: 'A business offering private and shared rooms',
//     },
//   ];

//   const handleNext = () => {
//     if (selectedOption) {
//       navigate('/become-a-host/structure-type');
//     }
//   };

//   const handleBack = () => {
//     navigate('/become-a-host');
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
//         <div className="h-full bg-black w-[10%]" />
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
//             What kind of place will you host?
//           </h1>

//           <div className="space-y-4">
//             {placeTypes.map((type) => (
//               <button
//                 key={type.id}
//                 onClick={() => setSelectedOption(type.id)}
//                 className={`w-full p-6 border rounded-xl text-left transition-all ${
//                   selectedOption === type.id
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
//             disabled={!selectedOption}
//             className={`px-6 py-3 rounded-lg text-white ${
//               selectedOption
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

// export default AboutYourPlace;






import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import { FaHome, FaHotel, FaCaravan, FaTree, FaShip, FaUmbrellaBeach, FaWarehouse, FaMountain, FaBuilding } from 'react-icons/fa';
import { GiCastle, GiCaveEntrance, GiWindmill, GiFarmTractor, GiTreehouse, GiIsland, GiMountainCave } from 'react-icons/gi';
import { BiBuildingHouse, BiHotel } from 'react-icons/bi';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';

const propertyTypes = [
    { id: 'bed-breakfast', name: 'Bed & breakfast', icon: BiHotel, description: 'Cozy accommodations with homemade breakfast' },
    { id: 'boat', name: 'Boat', icon: FaShip, description: 'Floating paradise on the water' },
    { id: 'cabin', name: 'Cabin', icon: FaHome, description: 'Rustic retreat in nature' },
    { id: 'camper-rv', name: 'Camper/RV', icon: FaCaravan, description: 'Adventure on wheels' },
    { id: 'casa-particular', name: 'Casa particular', icon: BiBuildingHouse, description: 'Traditional Cuban homestay' },
    { id: 'castle', name: 'Castle', icon: GiCastle, description: 'Historic fortress or palace' },
    { id: 'cave', name: 'Cave', icon: GiCaveEntrance, description: 'Natural rock dwelling' },
    { id: 'container', name: 'Container', icon: FaWarehouse, description: 'Modern converted shipping container' },
    { id: 'cycladic-home', name: 'Cycladic home', icon: FaHome, description: 'Traditional Greek island dwelling' },
    { id: 'dammuso', name: 'Dammuso', icon: GiMountainCave, description: 'Traditional Italian stone house' },
    { id: 'dome', name: 'Dome', icon: FaHome, description: 'Unique spherical structure' },
    { id: 'earth-home', name: 'Earth home', icon: FaMountain, description: 'Eco-friendly underground dwelling' },
    { id: 'farm', name: 'Farm', icon: GiFarmTractor, description: 'Rural agricultural property' },
    { id: 'guesthouse', name: 'Guesthouse', icon: BiBuildingHouse, description: 'Private secondary residence' },
    { id: 'hotel', name: 'Hotel', icon: FaHotel, description: 'Professional hospitality venue' },
    { id: 'houseboat', name: 'Houseboat', icon: FaShip, description: 'Permanent floating home' },
    { id: 'kezhan', name: 'Kezhan', icon: BiHotel, description: 'Traditional Chinese guesthouse' },
    { id: 'minsu', name: 'Minsu', icon: BiBuildingHouse, description: 'Taiwanese bed and breakfast' },
    { id: 'riad', name: 'Riad', icon: FaHome, description: 'Traditional Moroccan house' },
    { id: 'ryokan', name: 'Ryokan', icon: BiHotel, description: 'Traditional Japanese inn' },
    { id: 'shepherds-hut', name: "Shepherd's hut", icon: FaHome, description: 'Rustic countryside shelter' },
    { id: 'tent', name: 'Tent', icon: FaUmbrellaBeach, description: 'Temporary canvas shelter' },
    { id: 'tiny-home', name: 'Tiny home', icon: FaHome, description: 'Compact living space' },
    { id: 'tower', name: 'Tower', icon: FaBuilding, description: 'Vertical historic structure' },
    { id: 'treehouse', name: 'Treehouse', icon: GiTreehouse, description: 'Elevated forest dwelling' },
    { id: 'trullo', name: 'Trullo', icon: GiIsland, description: 'Traditional Apulian stone hut' },
    { id: 'windmill', name: 'Windmill', icon: GiWindmill, description: 'Converted wind power structure' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
};

const MotionCard = ({ type, isSelected, onClick }) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`
                relative p-6 rounded-2xl cursor-pointer transition-all duration-200
                ${isSelected
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg ring-2 ring-indigo-600 ring-offset-2'
                    : 'bg-white hover:shadow-md hover:bg-gray-50'
                }
            `}
        >
            <div className="flex flex-col items-center space-y-4">
                <div className={`
                    p-4 rounded-full transition-colors duration-200
                    ${isSelected
                        ? 'bg-white/20'
                        : 'bg-indigo-50'
                    }
                `}>
                    <type.icon
                        className={`w-8 h-8 ${
                            isSelected
                                ? 'text-white'
                                : 'text-indigo-600'
                        }`}
                    />
                </div>
                <div className="text-center">
                    <h3 className={`
                        font-medium text-lg mb-2
                        ${isSelected ? 'text-white' : 'text-gray-900'}
                    `}>
                        {type.name}
                    </h3>
                    <p className={`
                        text-sm
                        ${isSelected ? 'text-white/80' : 'text-gray-500'}
                    `}>
                        {type.description}
                    </p>
                </div>
            </div>
            {isSelected && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
            )}
        </motion.div>
    );
};

export default function PlaceTypeSelection() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [selectedType, setSelectedType] = useState(propertyData.placeType || '');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTypes = propertyTypes.filter(type =>
        type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    


    const handleNext = () => {
        if (selectedType) {
            updatePropertyData('about-your-place', selectedType);
            navigate('/become-a-host/structure-type');
        }
    };

    const handleBack = () => {
        navigate('/become-a-host');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            What type of place will you host?
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Choose the option that best describes your property
                        </p>

                        <div className="max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search property types..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 pl-10"
                                />
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredTypes.map((type) => (
                                <MotionCard
                                    key={type.id}
                                    type={type}
                                    isSelected={selectedType === type.id}
                                    onClick={() => setSelectedType(type.id)}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>

            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={!selectedType}
            />
        </div>
    );
}
