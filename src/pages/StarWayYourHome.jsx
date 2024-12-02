import React from "react";
import Accordion from "../components/starwayhome/Accordion";
import ListYYourHome from "../components/starwayhome/ListYYourHome";
import SecondHero from "../components/starwayhome/SecondHero"
import StarWayYourHomeHeader from "../components/starwayhome/StarWayYourHomeHeader"
import Footer from "../components/home/Footer";

export default function StarWayYourHome() {
  return( 
    <>
      <StarWayYourHomeHeader />
      <SecondHero />
      <ListYYourHome />
      <Accordion />
      <Footer />
    </>
  )
}