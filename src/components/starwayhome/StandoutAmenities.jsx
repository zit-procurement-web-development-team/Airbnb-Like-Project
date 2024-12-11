// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaWifi, FaTv, FaParking, FaSwimmingPool, 
//          FaSnowflake, FaFire, FaWater, FaDumbbell } from 'react-icons/fa';

// const StandoutAmenities = () => {
//   const navigate = useNavigate();
//   const [selectedAmenities, setSelectedAmenities] = useState(new Set());

//   const amenities = [
//     {
//       id: 'wifi',
//       title: 'Wifi',
//       icon: FaWifi,
//       category: 'essentials'
//     },
//     {
//       id: 'tv',
//       title: 'TV',
//       icon: FaTv,
//       category: 'essentials'
//     },
//     {
//       id: 'parking',
//       title: 'Free parking',
//       icon: FaParking,
//       category: 'essentials'
//     },
//     {
//       id: 'pool',
//       title: 'Pool',
//       icon: FaSwimmingPool,
//       category: 'standout'
//     },
//     {
//       id: 'ac',
//       title: 'Air conditioning',
//       icon: FaSnowflake,
//       category: 'essentials'
//     },
//     {
//       id: 'heating',
//       title: 'Heating',
//       icon: FaFire,
//       category: 'essentials'
//     },
//     {
//       id: 'hottub',
//       title: 'Hot tub',
//       icon: FaWater,
//       category: 'standout'
//     },
//     {
//       id: 'gym',
//       title: 'Exercise equipment',
//       icon: FaDumbbell,
//       category: 'standout'
//     }
//   ];

//   const toggleAmenity = (id) => {
//     const newSelected = new Set(selectedAmenities);
//     if (newSelected.has(id)) {
//       newSelected.delete(id);
//     } else {
//       newSelected.add(id);
//     }
//     setSelectedAmenities(newSelected);
//   };

  // const handleNext = () => {
  //   navigate('/become-a-host/photos');
  // };

  // const handleBack = () => {
  //   navigate('/become-a-host/floor-plan');
  // };

//   const categories = {
//     essentials: 'Essentials',
//     standout: 'Standout amenities'
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
//         <div className="h-full bg-black w-[60%]" />
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
//             Tell guests what your place has to offer
//           </h1>
//           <p className="text-gray-600 mb-8">
//             You can add more amenities after you publish your listing.
//           </p>

//           {Object.entries(categories).map(([categoryId, categoryName]) => (
//             <div key={categoryId} className="mb-8">
//               <h2 className="text-xl font-semibold mb-4">{categoryName}</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {amenities
//                   .filter(amenity => amenity.category === categoryId)
//                   .map(({ id, title, icon: Icon }) => (
//                     <button
//                       key={id}
//                       onClick={() => toggleAmenity(id)}
//                       className={`p-6 border rounded-xl text-left transition-all flex items-center ${
//                         selectedAmenities.has(id)
//                           ? 'border-black bg-gray-50'
//                           : 'border-gray-200 hover:border-black'
//                       }`}
//                     >
//                       <Icon className="w-6 h-6 mr-4" />
//                       <span className="text-lg">{title}</span>
//                     </button>
//                   ))}
//               </div>
//             </div>
//           ))}
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

// export default StandoutAmenities;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../context/PropertyContext';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';
import { FaWifi, FaParking, FaTv, FaSnowflake, FaFire, FaSwimmingPool, 
         FaHotTub, FaDumbbell, FaUmbrellaBeach, FaFirstAid, FaFireExtinguisher, 
         FaLock, FaVideo, FaSearch, FaCoffee, FaBed, FaShower, FaWater,
         FaBaby, FaGamepad, FaBicycle, FaCar, FaChair, FaPaw, FaSmoking,
         FaWheelchair, FaUtensils, FaWind, FaCocktail, FaDesktop, FaInfoCircle } from 'react-icons/fa';

const amenityCategories = [
    {
        title: "Essentials",
        description: "Must-have amenities for a comfortable stay",
        items: [
            { id: 'wifi', name: 'Wifi', icon: FaWifi, description: 'Continuous access in the listing' },
            { id: 'tv', name: 'TV', icon: FaTv, description: 'HDTV with standard cable/streaming' },
            { id: 'kitchen', name: 'Kitchen', icon: FaUtensils, description: 'Space for cooking and storing food' },
            { id: 'washer', name: 'Washer', description: 'In unit - free', icon: FaWater },
            { id: 'dryer', name: 'Dryer', description: 'In unit - free', icon: FaWind },
            { id: 'ac', name: 'Air conditioning', icon: FaSnowflake, description: 'Central or window unit' },
            { id: 'heating', name: 'Heating', icon: FaFire, description: 'Central or portable heating' },
            { id: 'workspace', name: 'Dedicated workspace', icon: FaDesktop, description: 'Private desk/table' },
        ]
    },
    {
        title: "Bathroom",
        description: "Bathroom and personal care amenities",
        items: [
            { id: 'shower', name: 'Shower', icon: FaShower, description: 'Walk-in or bathtub shower' },
            { id: 'toiletries', name: 'Essential toiletries', description: 'Toilet paper, soap, shampoo' },
            { id: 'hairdryer', name: 'Hair dryer', description: 'Available for guest use' },
            { id: 'bathtub', name: 'Bathtub', description: 'Separate or combined with shower' },
            { id: 'bidet', name: 'Bidet', description: 'Toilet with bidet function' },
        ]
    },
    {
        title: "Bedroom",
        description: "Sleeping and comfort amenities",
        items: [
            { id: 'bed_linens', name: 'Bed linens', icon: FaBed, description: 'Fresh, clean sheets and pillowcases' },
            { id: 'extra_pillows', name: 'Extra pillows and blankets', description: 'Additional comfort items' },
            { id: 'blackout_shades', name: 'Blackout shades', description: 'Light blocking window covers' },
            { id: 'hangers', name: 'Hangers', description: 'For clothes storage' },
            { id: 'iron', name: 'Iron', description: 'For pressing clothes' },
        ]
    },
    {
        title: "Entertainment",
        description: "Fun and relaxation amenities",
        items: [
            { id: 'pool', name: 'Pool', icon: FaSwimmingPool, description: 'Private or shared access' },
            { id: 'hottub', name: 'Hot tub', icon: FaHotTub, description: 'Private or shared access' },
            { id: 'gym', name: 'Gym', icon: FaDumbbell, description: 'Private or shared access' },
            { id: 'beach', name: 'Beach access', icon: FaUmbrellaBeach, description: 'Direct or nearby access' },
            { id: 'games', name: 'Game console', icon: FaGamepad, description: 'Gaming system available' },
            { id: 'bikes', name: 'Bicycles', icon: FaBicycle, description: 'Available for guest use' },
        ]
    },
    {
        title: "Location & Access",
        description: "Parking and building amenities",
        items: [
            { id: 'parking', name: 'Free parking on premises', icon: FaParking, description: 'Designated spot included' },
            { id: 'ev_charging', name: 'EV charger', icon: FaCar, description: 'Electric vehicle charging' },
            { id: 'elevator', name: 'Elevator', description: 'Building has an elevator' },
            { id: 'private_entrance', name: 'Private entrance', icon: FaLock, description: 'Separate street/building entry' },
        ]
    },
    {
        title: "Safety",
        description: "Essential safety features",
        items: [
            { id: 'firstaid', name: 'First aid kit', icon: FaFirstAid, description: 'Available for emergencies' },
            { id: 'fireext', name: 'Fire extinguisher', icon: FaFireExtinguisher, description: 'Available for emergencies' },
            { id: 'security', name: 'Security cameras', icon: FaVideo, description: 'On property (outdoor only)' },
            { id: 'smartlock', name: 'Smart lock', icon: FaLock, description: 'Self check-in available' },
            { id: 'smoke_detector', name: 'Smoke detector', description: 'Working condition' },
            { id: 'carbon_monoxide', name: 'Carbon monoxide detector', description: 'Working condition' },
        ]
    },
    {
        title: "Services",
        description: "Additional services and conveniences",
        items: [
            { id: 'breakfast', name: 'Breakfast', icon: FaCoffee, description: 'Included or available' },
            { id: 'cleaning', name: 'Cleaning before checkout', description: 'Included in price' },
            { id: 'long_term', name: 'Long term stays allowed', description: '28+ days allowed' },
            { id: 'luggage_dropoff', name: 'Luggage dropoff', description: 'For early arrival/late departure' },
        ]
    },
    {
        title: "Special Features",
        description: "Unique property features",
        items: [
            { id: 'patio', name: 'Patio or balcony', icon: FaChair, description: 'Private outdoor space' },
            { id: 'bbq', name: 'BBQ grill', description: 'Available for guest use' },
            { id: 'fireplace', name: 'Indoor fireplace', icon: FaFire, description: 'Working fireplace' },
            { id: 'bar', name: 'Mini bar', icon: FaCocktail, description: 'Available for guest use' },
        ]
    },
    {
        title: "House Rules",
        description: "Property policies and allowances",
        items: [
            { id: 'pets', name: 'Pets allowed', icon: FaPaw, description: 'Bring your furry friends' },
            { id: 'smoking', name: 'Smoking allowed', icon: FaSmoking, description: 'In designated areas' },
            { id: 'events', name: 'Events allowed', description: 'Parties/events permitted' },
            { id: 'children', name: 'Children welcome', icon: FaBaby, description: 'Suitable for kids' },
        ]
    },
    {
        title: "Accessibility",
        description: "Features for guests with mobility needs",
        items: [
            { id: 'step_free', name: 'Step-free access', icon: FaWheelchair, description: 'No stairs to enter' },
            { id: 'wide_doorway', name: 'Wide doorways', description: 'At least 32 inches wide' },
            { id: 'accessible_bathroom', name: 'Accessible bathroom', description: 'With grab bars' },
            { id: 'accessible_parking', name: 'Accessible parking', description: 'Reserved spot nearby' },
        ]
    }
];

export default function PropertyAmenities() {
    const navigate = useNavigate();
    const { propertyData, updatePropertyData } = useProperty();
    const [selectedAmenities, setSelectedAmenities] = useState(propertyData.amenities || {});
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [showTooltip, setShowTooltip] = useState(false);

    const handleAmenityToggle = (amenityId) => {
        setSelectedAmenities(prev => ({
            ...prev,
            [amenityId]: !prev[amenityId]
        }));
    };

    const handleNext = () => {
        updatePropertyData({
            ...propertyData,
            amenities: selectedAmenities
        });
        navigate('/become-a-host/photos');
    };

    const handleBack = () => {
        navigate('/become-a-host/step-introduction');
    };
   
  
    // const handleBack = () => {
    //   navigate('/become-a-host/floor-plan');
    // };

    const filteredCategories = amenityCategories.map(category => ({
        ...category,
        items: category.items.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (activeCategory === 'all' || activeCategory === category.title.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    const getSelectedCount = () => {
        return Object.values(selectedAmenities).filter(Boolean).length;
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <DashboardHeader />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Tell guests what your place has to offer
                        </h1>
                        <p className="text-gray-600">
                            You can add more amenities after you publish your listing.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for amenities"
                                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50"
                            >
                                <FaInfoCircle className="h-5 w-5 text-gray-400" />
                            </button>
                            <AnimatePresence>
                                {showTooltip && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute right-0 top-full mt-2 p-3 bg-gray-900 text-white text-sm rounded-lg w-64 z-50"
                                    >
                                        Select amenities that accurately represent your property. You can always add more later.
                                        <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-full ${
                                activeCategory === 'all'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            } transition-colors duration-200`}
                        >
                            All
                        </button>
                        {amenityCategories.map(category => (
                            <button
                                key={category.title}
                                onClick={() => setActiveCategory(category.title.toLowerCase())}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                                    activeCategory === category.title.toLowerCase()
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                } transition-colors duration-200`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-12">
                        {filteredCategories.map(category => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-4"
                            >
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {category.title}
                                    </h2>
                                    {category.description && (
                                        <p className="text-gray-500 text-sm">
                                            {category.description}
                                        </p>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.items.map(amenity => (
                                        <motion.button
                                            key={amenity.id}
                                            onClick={() => handleAmenityToggle(amenity.id)}
                                            className={`flex items-center p-4 border-2 rounded-xl w-full text-left transition-all duration-200 ${
                                                selectedAmenities[amenity.id]
                                                    ? 'border-indigo-500 bg-indigo-50'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex-grow">
                                                <div className="flex items-center space-x-3">
                                                    {amenity.icon && (
                                                        <amenity.icon className={`h-5 w-5 ${
                                                            selectedAmenities[amenity.id]
                                                                ? 'text-indigo-500'
                                                                : 'text-gray-400'
                                                        }`} />
                                                    )}
                                                    <span className={`font-medium ${
                                                        selectedAmenities[amenity.id]
                                                            ? 'text-indigo-700'
                                                            : 'text-gray-700'
                                                    }`}>
                                                        {amenity.name}
                                                    </span>
                                                </div>
                                                {amenity.description && (
                                                    <p className={`mt-1 text-sm ${
                                                        selectedAmenities[amenity.id]
                                                            ? 'text-indigo-600'
                                                            : 'text-gray-500'
                                                    }`}>
                                                        {amenity.description}
                                                    </p>
                                                )}
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border-2 ml-4 flex items-center justify-center ${
                                                selectedAmenities[amenity.id]
                                                    ? 'border-indigo-500 bg-indigo-500'
                                                    : 'border-gray-300'
                                            }`}>
                                                {selectedAmenities[amenity.id] && (
                                                    <motion.svg
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="w-3 h-3 text-white"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </motion.svg>
                                                )}
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {getSelectedCount() > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                        >
                            <p className="text-indigo-700 font-medium">
                                {getSelectedCount()} amenities selected
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </main>
            <NavigationFooter 
                onNext={handleNext}
                onBack={handleBack}
                disableNext={getSelectedCount() === 0}
            />
        </div>
    );
}
