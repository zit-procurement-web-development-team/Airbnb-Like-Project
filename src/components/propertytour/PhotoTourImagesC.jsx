import React, { useState } from "react";

const PhotoTourImagesC = ({ imageArray, title, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Open the modal with the clicked image and its index
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  // Show the next image
  const nextImage = () => {
    if (currentImageIndex < imageArray.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Show the previous image
  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section id={id} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          {imageArray.map((image, index) => (
            <div key={index} className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image}
                  onClick={() => openModal(index)} // Pass the index of the clicked image
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the modal content
          >
           
            <img
              src={imageArray[currentImageIndex]}
              alt={imageArray[currentImageIndex].title}
              className="w-full max-w-2xl rounded-lg"
            />

             {/* Left Arrow Button */}
             <button
              className="absolute left-0 text-white text-4xl font-bold p-4"
              onClick={prevImage}
            >
              &#8592;
            </button>

            {/* Right Arrow Button */}
            <button
              className="absolute right-0 text-white text-4xl font-bold p-4"
              onClick={nextImage}
            >
              &#8594;
            </button>

            <button
              className="absolute top-0 right-0 text-white text-4xl font-bold p-4"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoTourImagesC;
