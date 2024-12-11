import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => (
  <nav className="bg-white py-4 border-b border-gray-300">
    <div className="flex items-center gap-4 max-w-5xl mx-auto">
      <FontAwesomeIcon icon={faAngleLeft} className="text-lg cursor-pointer" />
      <span>Confirm and pay</span>
    </div>
  </nav>
);

const BookingDetails = () => (
  <div className="bg-white p-8 rounded-lg flex-1">
    <h2 className="text-2xl font-semibold">Your trip</h2>
    
    <div className="my-8">
      <h2 className="text-xl font-semibold">Dates</h2>
      <div className="flex justify-between items-center mt-4">
        <span>Dec 8 – 13</span>
        <button className="text-blue-500">Edit</button>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-lg font-semibold">Log in or sign up to book</h3>
      <div className="flex gap-4 mt-4">
        <select className="w-1/3 px-4 py-2 border border-gray-300 rounded-md">
          <option value="+1">+1 (US)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+91">+91 (IN)</option>
        </select>
        <input
          type="tel"
          placeholder="Phone number"
          className="w-2/3 px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex gap-8 justify-center my-4">
        <FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer" />
        <FontAwesomeIcon icon={faGoogle} className="text-2xl cursor-pointer" />
        <FontAwesomeIcon icon={faApple} className="text-2xl cursor-pointer" />
      </div>
      <button className="w-full py-4 bg-red-500 text-white rounded-md font-bold">
        Continue with phone
      </button>
    </div>
  </div>
);

const PropertyDetails = () => (
  <div className="bg-white p-8 rounded-lg flex-1">
    <div className="flex gap-4 mb-8">
      <img
        src="https://via.placeholder.com/150"
        alt="House"
        className="w-30 h-30 object-cover rounded-md"
      />
      <div>
        <h3 className="text-xl font-semibold mb-2">Refúgio dos Ventos - 15km from downtown Gonçalves</h3>
        <p>Entire place</p>
        <div className="mt-2">
          <span className="block">Rating 4.98 out of 5; 63 reviews</span>
          <span>4.98 (63 reviews)</span>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Price details</h3>
      <div className="mt-4">
        <div className="flex justify-between my-2">
          <span>$198.52 USD x 5 nights</span>
          <span>$992.60 USD</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Cleaning fee</span>
          <span>$24.82 USD</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Airbnb service fee</span>
          <span>$166.86 USD</span>
        </div>
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-300 font-bold">
          <span>Total (USD)</span>
          <span>$1,184.28 USD</span>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-white py-4 border-t border-gray-300 fixed bottom-0 w-full">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <a href="#" className="text-gray-700">Terms</a>
        <span>·</span>
        <a href="#" className="text-gray-700">Sitemap</a>
        <span>·</span>
        <a href="#" className="text-gray-700">Privacy</a>
        <span>·</span>
        <a href="#" className="text-gray-700">Your Privacy Choices</a>
      </div>
      <div className="flex gap-4">
        <select className="px-2 bg-transparent border-none">
          <option>English (US)</option>
        </select>
        <select className="px-2 bg-transparent border-none">
          <option>$ USD</option>
        </select>
      </div>
    </div>
  </footer>
);

const BookingPage = () => {
  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto p-4 flex gap-8 mt-8">
        <BookingDetails />
        <PropertyDetails />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
