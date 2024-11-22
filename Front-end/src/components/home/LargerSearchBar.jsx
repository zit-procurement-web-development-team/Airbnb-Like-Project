import React from "react";
// import CheckOutDatePicker from "./CheckOutPicker";
// import CheckInDatePicker from "./CheckInDatePicker";
import DateRangePicker from "./DateRangePicker";
import BookLocation from "./BookLocation";
const LargerSearchBar = () =>{
    return(
        <div className="flex gap-4 px-6 mt-2  rounded-full shadow-md border justify-center items-center text-base md537:gap-1 md768:w-[700px] lg:w-[900px]">
    
       {/* <div className="text-sm font-semibold text-black rounded-full border-none">
        <h3>Where</h3>
        <input
        className="px-5 py-2   border-none"
        placeholder="Anywhere"
      />
      </div> */}
      {/*    */}
      <BookLocation />
      {/* <CheckInDatePicker />
     <CheckOutDatePicker /> */}
       <DateRangePicker />
      <div className="flex">
        <h3>Who <br /> <span>Add guests</span></h3>
        <i
        className="fa fa-search cursor-pointer bg-red-500 text-white rounded-full p-2"
        aria-hidden="true"
      ></i>
      </div>
      
    </div>
    )
}

export default LargerSearchBar