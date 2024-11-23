import React,{useState} from "react";
import SubNav1 from "./SubNav1";
import SubNav2 from "./SubNav2";
import SearchBar from "./SearchBar";
import StickyHeader from "./StickyHeader";


const NavBar = function (){
  
  return(
    <>
    <header>
       <SubNav1 />
     <StickyHeader/>
    </header>
   
      </>
  );
};

export default NavBar;