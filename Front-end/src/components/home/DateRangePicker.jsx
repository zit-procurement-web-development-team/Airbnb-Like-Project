import React, { useState, useRef } from 'react';

const DateRangePicker = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [hoveredDate, setHoveredDate] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const checkoutRef = useRef(null);

    // Function to generate all the dates between check-in and check-out
    const getDatesInRange = (startDate, endDate) => {
        const dates = [];
        const currentDate = new Date(startDate);
        const end = new Date(endDate);

        while (currentDate <= end) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };

    // Handle check-in and check-out date changes
    const handleCheckInChange = (event) => {
        const newCheckIn = event.target.value;
        setCheckIn(newCheckIn);

        // If there's already a check-out date, calculate the range
        if (checkOut) {
            const dates = getDatesInRange(newCheckIn, checkOut);
            setHoveredDate(dates);
        }
    };

    const handleCheckOutChange = (event) => {
        const newCheckOut = event.target.value;
        setCheckOut(newCheckOut);

        // If there's already a check-in date, calculate the range
        if (checkIn) {
            const dates = getDatesInRange(checkIn, newCheckOut);
            setHoveredDate(dates);
        }
    };

    const handleDateSelect = (date) => {
        setCheckOut(date);
        setPopupVisible(false); // Close popup after selecting a date
    };

    // Function to check if the date is hovered or selected
    const isHovered = (date) => {
        if (hoveredDate) {
            return hoveredDate.some(
                (hovered) => hovered.toDateString() === date.toDateString()
            );
        }
        return false;
    };

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    // Close the popup if the user clicks outside the popup
    const handleOutsideClick = (event) => {
        if (checkoutRef.current && !checkoutRef.current.contains(event.target)) {
            setPopupVisible(false);
        }
    };

    React.useEffect(() => {
        // Add event listener for outside clicks
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto ">
            <div className="grid grid-cols-2 lg:gap-2 pb-2 ">
                <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Check In</label>
                    <input
                        type="date"
                        id="checkin"
                        name="checkin"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={checkIn}
                        onChange={handleCheckInChange}
                    />
                </div>
                <div className="relative">
                    <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Check Out</label>
                    <input
                        type="date"
                        id="checkout"
                        name="checkout"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={checkOut}
                        onChange={handleCheckOutChange}
                        ref={checkoutRef}
                        onFocus={togglePopup} // Show the popup when focused
                    />
                </div>
            </div>

            {/* Display selected dates */}
            {checkIn && checkOut && (
                <div className="mt-6 text-gray-700">
                    <p>
                        Selected Dates: <strong>{checkIn}</strong> to <strong>{checkOut}</strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export default DateRangePicker;
