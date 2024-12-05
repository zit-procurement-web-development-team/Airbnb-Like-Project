import React from "react";
import logo from '/assets/starwayhomeimgs/STARRWAY-02.png';
import { Link } from "react-router-dom";

export default function StarWayYourHomeHeader() {
    return (
        <header className="text-gray-600 body-font fixed top-0 left-0 w-full z-20 bg-white">
            <div className="flex justify-between items-center p-4 mx-20">
                <Link to="/" className="flex title-font font-medium md:mb-0">
                    <img
                        className="w-12"  // You can add a specific size or leave it empty
                        alt="Logo"  // Added alt text for accessibility
                        src={logo}  // Use the imported logo image
                    />
                </Link>
                
                    <Link to="/dash-board-host">
                        <button className="inline-flex items-center font-bold text-white bg-gray-100 border-0 py-3 px-4 focus:outline-none hover:bg-gradient-to-r rounded-full p-7 bg-gradient-to-r from-red-500 to-pink-500 text-base mt-4 md:mt-0">
                            List your home
                        </button>
                    </Link>

                </div>
        </header>
    );
}


