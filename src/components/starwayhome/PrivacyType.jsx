// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaHome, FaArrowRight, FaArrowLeft, FaLock, FaUsers, FaDoorOpen } from 'react-icons/fa';

// const PrivacyType = () => {
//   const navigate = useNavigate();
//   const [selectedType, setSelectedType] = useState(null);

//   const privacyTypes = [
//     {
//       id: 'entire',
//       title: 'An entire place',
//       description: 'Guests have the whole place to themselves',
//       icon: FaHome,
//     },
//     {
//       id: 'private',
//       title: 'A private room',
//       description: 'Guests sleep in a private room but some areas may be shared',
//       icon: FaLock,
//     },
//     {
//       id: 'shared',
//       title: 'A shared room',
//       description: 'Guests sleep in a room or common area that may be shared with others',
//       icon: FaUsers,
//     },
//   ];

//   const handleNext = () => {
//     if (selectedType) {
//       navigate('/become-a-host/location');
//     }
//   };

//   const handleBack = () => {
//     navigate('/become-a-host/structure-type');
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100">
//         <div className="h-full bg-black w-[30%]" />
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
//             What type of space will guests have?
//           </h1>

//           <div className="space-y-4">
//             {privacyTypes.map((type) => {
//               const Icon = type.icon;
//               return (
//                 <button
//                   key={type.id}
//                   onClick={() => setSelectedType(type.id)}
//                   className={`w-full p-6 border rounded-xl text-left transition-all flex items-center ${
//                     selectedType === type.id
//                       ? 'border-black bg-gray-50'
//                       : 'border-gray-200 hover:border-black'
//                   }`}
//                 >
//                   <div className="mr-4">
//                     <Icon className="w-8 h-8 text-gray-700" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium mb-1">{type.title}</h3>
//                     <p className="text-gray-600">{type.description}</p>
//                   </div>
//                 </button>
//               );
//             })}
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

// export default PrivacyType;
