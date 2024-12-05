import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavigationFooter from '../shared/NavigationFooter';
import DashboardHeader from '../shared/DashboardHeader';
import { 
    FiWifi, FiCoffee, FiMonitor, FiLock, FiHome,
    FiSun, FiWind, FiDroplet, FiPackage, FiTv
} from 'react-icons/fi';
import { 
    MdLocalParking, MdPool, MdFireplace, MdOutdoorGrill,
    MdLocalLaundryService, MdMeetingRoom
} from 'react-icons/md';

const amenitiesData = [
    { id: 'wifi', icon: FiWifi, label: 'Wi-Fi', category: 'Essential' },
    { id: 'pool', icon: MdPool, label: 'Swimming Pool', category: 'Outdoor' },
    { id: 'parking', icon: MdLocalParking, label: 'Free Parking', category: 'Essential' },
    { id: 'ac', icon: FiWind, label: 'Air Conditioning', category: 'Climate' },
    { id: 'washer', icon: MdLocalLaundryService, label: 'Washer', category: 'Essential' },
    { id: 'tv', icon: FiTv, label: 'TV', category: 'Entertainment' },
    { id: 'kitchen', icon: FiCoffee, label: 'Kitchen', category: 'Essential' },
    { id: 'workspace', icon: FiMonitor, label: 'Workspace', category: 'Essential' },
    { id: 'security', icon: FiLock, label: 'Security System', category: 'Safety' },
    { id: 'patio', icon: FiHome, label: 'Patio', category: 'Outdoor' },
    { id: 'fireplace', icon: MdFireplace, label: 'Fireplace', category: 'Indoor' },
    { id: 'bbq', icon: MdOutdoorGrill, label: 'BBQ Grill', category: 'Outdoor' },
    { id: 'extraRoom', icon: MdMeetingRoom, label: 'Extra Room', category: 'Indoor' },
    { id: 'storage', icon: FiPackage, label: 'Storage', category: 'Essential' }
];

const categories = [...new Set(amenitiesData.map(item => item.category))];

export default function AmenitiesSelector() {
    const [selectedAmenities, setSelectedAmenities] = useState(new Set());
    const [activeCategory, setActiveCategory] = useState('Essential');

    const toggleAmenity = (id) => {
        setSelectedAmenities(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const filteredAmenities = amenitiesData.filter(amenity => amenity.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
            <DashboardHeader />
            
            <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                What amenities do you offer?
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Select the amenities available at your property
                            </p>
                        </motion.div>

                        {/* Category Tabs */}
                        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                                        ${activeCategory === category 
                                            ? 'bg-indigo-500 text-white shadow-md' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Amenities Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredAmenities.map(({ id, icon: Icon, label }) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => toggleAmenity(id)}
                                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3
                                            ${selectedAmenities.has(id)
                                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}
                                    >
                                        <div className={`p-2 rounded-lg ${selectedAmenities.has(id) ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">{label}</span>
                                        {selectedAmenities.has(id) && (
                                            <motion.svg
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-5 h-5 text-indigo-500 ml-auto"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </motion.svg>
                                        )}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <NavigationFooter 
                nextPath="/basic-details"
                prevPath="/confirm-address"
                disableNext={selectedAmenities.size === 0}
            />
        </div>
    );
}
