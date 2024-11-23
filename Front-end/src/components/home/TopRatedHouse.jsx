// import React, { useState } from "react";

// const TopRatedHouse = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const items = [
//     { id: 1, image: "./src/assets/images/beach1.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 2, image: "./src/assets/images/beach4.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 3, image: "./src/assets/images/beach2.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 4, image: "./src/assets/images/beach3.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 5, image: "./src/assets/images/beach4.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 6, image: "./src/assets/images/beach1.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 7, image: "./src/assets/images/beach2.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 8, image: "./src/assets/images/beach3.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//     { id: 9, image: "./src/assets/images/beach4.webp", title: "Home in Liberia", description: "VILLA ON THE BEACH IN MALAGA CITY" },
//   ];

//   const itemsPerSlide = 4;
//   const maxIndex = Math.max(0, items.length - itemsPerSlide);

//   const handleNext = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="py-8 px-8">
//       <h2 className="text-2xl font-bold mb-1">Top-rated beach house rentals in Marbella</h2>
//       <p className="mb-6">Guests agree: these beach houses are highly rated for location, cleanliness, and more.</p>

//       <div className="relative">
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / (items.length > 4 ? itemsPerSlide : items.length))}%)`,
//             }}
//           >
//             {items.map((item) => (
//               <div key={item.id} className="flex-shrink-0 w-full sm:w-72 md:w-1/3 lg:w-1/4 text-center shadow rounded mx-2">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-t"
//                 />
//                 <div className="p-4">
//                   <div className="flex items-center justify-center">
//                     <h4 className="text-lg font-semibold">{item.title}</h4>
//                     <span className="text-yellow-500 ml-2">&#9733;</span>
//                   </div>
//                   <p className="text-sm text-gray-600">{item.description}</p>
//                   <p className="text-xs text-gray-500">
//                     Located on the first line of the Chanquete beach, 10 meters from
//                     the sand. Enjoy the unique Estrella de Mar villa in the city of
//                     Malaga for a perfect stay.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Left Arrow */}
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
//           <button
//             className="bg-gray-700 text-white p-2 rounded-full"
//             onClick={handlePrev}
//             disabled={currentIndex === 0}
//           >
//             <i className="fa fa-chevron-left"></i>
//           </button>
//         </div>

//         {/* Right Arrow */}
//         <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
//           <button
//             className="bg-gray-700 text-white p-2 rounded-full"
//             onClick={handleNext}
//             disabled={currentIndex === maxIndex}
//           >
//             <i className="fa fa-chevron-right"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRatedHouse;
 