import React, { useState } from "react";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If not open, don't render anything

  return (
    <div
      className="absolute w-[500px] right-10 z-20"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-lg w-full "
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {children}
      </div>
    </div>
  );
};

const AddGuests = () => {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleGuestCountChange = (type, action) => {
    setGuests((prevGuests) => {
      const newCount = action === "increase" ? prevGuests[type] + 1 : prevGuests[type] - 1;
      return {
        ...prevGuests,
        [type]: Math.max(newCount, 0),
      };
    });
  };

  return (
    <div className="max-w-3xl mx-auto ">
      {/* <h2 className="text-2xl font-semibold mb-4">Add Guests</h2> */}
      {["adults", "children", "infants", "pets"].map((guestType) => (
        <div key={guestType} className=" flex justify-between p-4">
          <div>
          <h3 className="text-xl font-medium">{guestType.charAt(0).toUpperCase() + guestType.slice(1)}</h3>
          <p className="text-sm text-gray-500">Ages 13 or above</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleGuestCountChange(guestType, "decrease")}
              disabled={guests[guestType] === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-xl cursor-pointer disabled:opacity-50"
            >
              -
            </button>
            <span className="text-lg font-bold">{guests[guestType]}</span>
            <button
              onClick={() => handleGuestCountChange(guestType, "increase")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-xl cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      {/* This is the div where the popup will be triggered when clicked */}
      <div className="flex justify-between items-center  w-[250px] cursor-pointer" onClick={toggleModal}>
        <h3>
          Who <br />
          <span className="text-gray-500">Add guests</span>
        </h3>
        <i
          className="fa fa-search  cursor-pointer text-2xl p-2 bg-red-500 text-white rounded-lg"
          aria-hidden="true"
        ></i>
      </div>

      {/* Modal to show AddGuests */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <AddGuests />
      </Modal>
    </div>
  );
};

export default Popup;
