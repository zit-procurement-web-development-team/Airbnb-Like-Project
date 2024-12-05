import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/assets/starwayhomeimgs/STARRWAY-02.png';

export default function DashboardHeader() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="StarWay Logo"
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Utility Buttons */}
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={() => navigate('/help')}
                            className="px-4 py-2 text-gray-500 hover:text-gray-900 font-medium transition-colors duration-150"
                        >
                            Help
                        </button>
                        <button 
                            onClick={() => navigate('/logout')}
                            className="px-4 py-2 text-gray-500 hover:text-gray-900 font-medium transition-colors duration-150"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
