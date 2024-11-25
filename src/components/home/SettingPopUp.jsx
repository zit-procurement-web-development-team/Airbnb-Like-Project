import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"

const SettingPopUp = () => {
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
      <div onClick={handleClick} className="flex justify-evenly items-center gap-2 h-10 w-20 rounded-full border cursor-pointer">
        <i className="fa-solid fa-bars"></i>
        <button className="w-7 h-7 rounded-full bg-black text-white text-center">E</button>
      </div>

      {isVisible && (
        <div ref={popUpRef} className="w-64 rounded shadow-2xl p-3 right-7 bg-white absolute mt-2 z-20">
          <button className="w-60 text-left p-2 hover:bg-slate-200">Sign up</button>
          <button className="w-60 text-left p-2 hover:bg-slate-200">Log in</button>
          <hr />
          <button className="w-60 text-left p-2 hover:bg-slate-200">Gift card</button>
          <Link to="/stay-way-your-home" className="w-60 text-left p-2 hover:bg-slate-200">StarrWay your home</Link>
          <button className="w-60 text-left p-2 hover:bg-slate-200">Host an experience</button>
          <button className="w-60 text-left p-2 hover:bg-slate-200">Help center</button>
        </div>
      )}
    </div>
  );
};

export default SettingPopUp;
