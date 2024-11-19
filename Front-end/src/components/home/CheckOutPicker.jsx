import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckOutDatePicker = ({ endDate, setEndDate, startDate }) => {
  return (
    <div className="mb-4">
      <label htmlFor="endDate" className="block text-sm font-semibold">
        Check-out
      </label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Select Check-out Date"
        dateFormat="MMMM d, yyyy"
        className="w-full px-4 py-2 mt-1 border rounded-lg"
        minDate={startDate} // Ensure end date is after start date
      />
    </div>
  );
};

export default CheckOutDatePicker;
