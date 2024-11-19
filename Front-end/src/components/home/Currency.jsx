import React, { useState, useRef, useEffect } from "react";

const Currency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const popUpRef = useRef(null);

  const handleClick = () => setIsVisible((prev) => !prev);

  const handleOutsideClick = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      {/* <div onClick={handleClick} className="cursor-pointer">
        <i className="fa-solid fa-globe"></i>
      </div> */}
      <span onClick={handleClick} className="ml-3 cursor-pointer">$CAD</span>

      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" style={{ zIndex: 30 }}>
          <div ref={popUpRef} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Hello,</h2>
            <p>This is just an example of the pop-up message on Airbnb.</p>
            <button onClick={() => setIsVisible(false)} className="mt-4 bg-white text-blue-500 px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;