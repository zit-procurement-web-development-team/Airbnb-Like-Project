import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckInDatePicker = ({ startDate, setStartDate }) => {
  return (
    <div className="mb-4">
      <label htmlFor="startDate" className="block text-sm font-semibold">
        Check-in
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select Check-in Date"
        dateFormat="MMMM d, yyyy"
        className="w-full px-4 py-2 mt-1 border rounded-lg"
      />
    </div>
  );
};

export default CheckInDatePicker;
