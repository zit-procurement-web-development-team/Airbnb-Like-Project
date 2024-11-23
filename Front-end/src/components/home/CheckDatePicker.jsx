import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckDatePicker = () => {
  // State to store start and end dates
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });

  const handleStartDateChange = (date) => {
    setDates((prevState) => ({
      ...prevState,
      startDate: date,
      // Ensure that endDate is always after startDate
      endDate: date && prevState.endDate && prevState.endDate < date ? null : prevState.endDate,
    }));
  };

  const handleEndDateChange = (date) => {
    setDates((prevState) => ({
      ...prevState,
      endDate: date,
    }));
  };

  return (
    <div className="grid grid-cols-2 gap-4 mb-4 items-center mt-3">
      <div>
        <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
          Check In
        </label>
        <DatePicker
          selected={dates.startDate}
          onChange={handleStartDateChange}
          startDate={dates.startDate}
          endDate={dates.endDate}
          selectsStart
          dateFormat="MMMM d, yyyy"
          minDate={new Date()} // Ensure check-in cannot be in the past
          className="mt-1 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholderText="Select Check-in Date"
        />
      </div>

      <div>
        <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
          Check Out
        </label>
        <DatePicker
          selected={dates.endDate}
          onChange={handleEndDateChange}
          startDate={dates.startDate}
          endDate={dates.endDate}
          selectsEnd
          minDate={dates.startDate} // Disable selecting a checkout date before the check-in date
          dateFormat="MMMM d, yyyy"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholderText="Select Check-out Date"
        />
      </div>
    </div>
  );
};

export default CheckDatePicker;
