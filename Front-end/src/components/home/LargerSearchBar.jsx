import React from "react";
import BookLocation from "./BookLocation";
import CheckDatePicker from "./CheckDatePicker";
import AddGuests from "./AddGuests";
const LargerSearchBar = () =>{
    return(
        <div className="flex justify-center  gap-10 mt-3 rounded-full shadow-md border   items-center text-base w-[1000px]">
    
       {/* <div className="text-sm font-semibold text-black rounded-full border-none">
        <h3>Where</h3>
        <input
        className="px-5 py-2   border-none"
        placeholder="Anywhere"
      />
      </div> */}
      {/*    */}
      <BookLocation />
    <CheckDatePicker />
      {/* <div className="flex justify-center">
        <h3>Who <br /> <span>Add guests</span></h3>
        <i
        className="fa fa-search cursor-pointer bg-red-500 text-white rounded-full"
        aria-hidden="true"
      ></i>
      </div>
       */}
       <AddGuests />
    </div>
    )
}

export default LargerSearchBar