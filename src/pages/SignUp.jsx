import React, { useState } from 'react';
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoGoogle } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { FaGlobe } from 'react-icons/fa';
import LanguageSelector from '../components/home/LanguageSelector';

const SignUp = () => {
  const navigate = useNavigate();
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-">
        {/* Language Selector Button */}
        <div className="fixed top-4 right-4 z-50">
          <button 
            className="flex items-center gap-2 p-3 rounded-full hover:bg-gray-100 transition"
            onClick={() => setIsLanguageSelectorOpen(true)}
          >
            <FaGlobe className="h-5 w-5" />
            <span className="text-sm font-medium">Language</span>
          </button>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="relative bg-white p-8 rounded-lg shadow-lg w-96"
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute left-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back"
          >
            <IoArrowBack className="w-5 h-5" />
          </button>
          <h5 className='pl-20'>Log in or sign up</h5> <hr /> <br />
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to Style Way</h2>

          <div className="">
            <label className="block  text-sm font-medium" htmlFor="">

            </label>

            <select
              name="name"  // Use the name to bind to the form data
              value={formData.name}  // Bind value to formData
              onChange={handleChange}  // Handle change in dropdown selection
              required
              className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              id="country-code"
            >
              {/* Dropdown options */}
              <option value="" disabled>Country code</option>
              <option value="+1">+1 (USA/Canada)</option>
              <option value="+231">+231 (Liberia)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+91">+91 (India)</option>
              {/* Add more country codes as needed */}
            </select>
          </div>

          <div className="">
            <label className="block mb-1 text-sm font-medium" htmlFor="email">

            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='+231 Phone number'

              className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <p>we'll call or text you to confirm your number.Standard message and data rates apply. <a href="#" className="text- hover:underline">Privacy</a></p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition duration-200"
          >
            <div className="mr-2 text-[#DB4437]" /> Continue
            l
          </button>

          <p className="mt-4 text-sm text-center">
            Already have an account? <a href="#" className="text-red-500 hover:underline">Log in</a>
          </p> <br />
          <hr />    

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-white text-gray-500 font-bold py-2 rounded hover:bg-green-600 transition duration-200 border text-[14px]"  // Custom font size for text
          >
            <RiFacebookBoxFill className="mr-2 text-[#1877F2]" /> Continue with Facebook
          </button>

          <p className="mt-4 text- text-center">
            <a href="#" className="text- hover:"></a>
          </p>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-white text-gray-500 font-bold py-2 rounded hover:bg-green-600 transition duration-200 border text-sm"  // Added text-sm class here
          >
            <IoLogoGoogle className="mr-2 text-[#DB4437]" /> Continue with Google
          </button>

          <p className="mt-4 text- text-center">
            <a href="#" className="text- hover:"></a>
          </p>

          <p className="mt-4 text- text-center">
            <a href="#" className="text- hover:"></a>
          </p>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-white text-gray-500 font-bold py-2 rounded hover:bg-green-600 transition duration-200 border text-sm"  // Reduced font size for text
          >
            <FaApple className="mr-2 text-[#A7A7A7]" /> Continue with Apple
          </button>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-white text-gray-500 font-bold py-2 rounded hover:bg-green-600 transition duration-200 border text-sm"  // Reduced font size for text
          >
            <MdOutlineMail className="mr-2 text-[#0073e6]" /> Continue with email
          </button>

          <p className="mt-4 text- text-center">
            <a href="#" className="text- hover:"></a>
          </p>
        </form>
      </div>

      {/* Language Selector Modal */}
      <LanguageSelector 
        isOpen={isLanguageSelectorOpen} 
        onClose={() => setIsLanguageSelectorOpen(false)}
      />
    </>
  );
};

export default SignUp;
