import React, { useState } from "react";
import { FaFacebookF, FaSquareInstagram, FaArrowDownLong, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import InspirationLink from "./InspirationLink";
import Categories from "./Categories";
import LanguageAndRegion from "./LanguageAndRegion";
import Currency from "./Currency";

const Footer = () => {
  const footerDate = new Date().getFullYear(); // Get the current year

  const categories = [
    "Popular", "Arts & Culture", "Outdoors", "Mountains", "Beach", "Unique stays",
    "Categories", "Things to do", "Travel tips & inspiration", "Airbnb-friendly apartments"
  ];
  

  const singleInspireLink = [
    { title: "Benalmadena", description: "Beach house rentals", category: "Beach" },
    { title: "Marbella", description: "Apartment rentals", category: "Beach" },
    { title: "Mijas", description: "Apartment rentals", category: "Beach" },
    { title: "Prescott", description: "Cabin rentals", category: "Outdoors" },
    { title: "Scottsdale", description: "Rentals with pool", category: "Outdoors" },
    { title: "Ibiza", description: "Luxury villas", category: "Beach" },
    { title: "Amsterdam", description: "Canal-side apartments", category: "Popular" },
    { title: "Paris", description: "Studio apartments in the heart of the city", category: "Popular" },
    { title: "Tokyo", description: "Modern city apartments", category: "Popular" },
    { title: "London", description: "Charming cottages", category: "Outdoors" },
    { title: "New York", description: "Penthouse apartments", category: "Popular" },
    { title: "Barcelona", description: "Contemporary beachfront homes", category: "Beach" },
    { title: "Rome", description: "Historic villa rentals", category: "Outdoors" },
    { title: "Los Angeles", description: "Luxury mansion rentals", category: "Popular" },
    { title: "Sydney", description: "Coastal retreats", category: "Outdoors" },
    { title: "Bali", description: "Private villas with pools", category: "Beach" },
    { title: "Cape Town", description: "Seaside apartments", category: "Beach" },
    { title: "Lisbon", description: "Charming neighborhood apartments", category: "Popular" },
    { title: "Hawaii", description: "Tropical bungalow rentals", category: "Beach" },
    { title: "Dubai", description: "Luxury high-rise apartments", category: "Popular" },
    { title: "Copenhagen", description: "Modern design lofts", category: "Popular" },
    { title: "Berlin", description: "Stylish city flats", category: "Popular" },
    { title: "Stockholm", description: "Scandinavian-style homes", category: "Outdoors" },
    { title: "Vancouver", description: "Mountain-view apartments", category: "Outdoors" },
    { title: "Zurich", description: "Ski resort cabins", category: "Outdoors" },
    { title: "Vienna", description: "Elegant townhouses", category: "Popular" },
    { title: "Athens", description: "Luxury villas with acropolis view", category: "Popular" },
    { title: "Budapest", description: "Central flats in historic buildings", category: "Popular" },
    { title: "Portland", description: "Quaint cabins by the lake", category: "Outdoors" },
    { title: "Chicago", description: "Luxury apartments downtown", category: "Popular" },
    { title: "Miami", description: "Beachfront condo rentals", category: "Beach" },
    { title: "Las Vegas", description: "Resort-style rentals with spas", category: "Popular" },
    { title: "Nashville", description: "Cozy homes near the music scene", category: "Popular" },
    { title: "Montreal", description: "Chic lofts in the city center", category: "Popular" },
    { title: "Bangkok", description: "Luxury condos with river views", category: "Popular" },
    { title: "Singapore", description: "Modern serviced apartments", category: "Popular" },
    { title: "Helsinki", description: "Lakefront cabins", category: "Outdoors" },
    { title: "Lagos", description: "Beachfront villas with pools", category: "Beach" },
    { title: "Buenos Aires", description: "Stylish city apartments", category: "Popular" },
    { title: "Toronto", description: "Modern condos in downtown", category: "Popular" },
    { title: "Sydney", description: "Penthouse apartments near the beach", category: "Beach" },
    { title: "Prague", description: "Rustic cottages in the woods", category: "Outdoors" }
  ];

  const [activeCategory, setActiveCategory] = useState("Popular"); // Initially show "Popular" category
  const [visibleItems, setVisibleItems] = useState(14); // Initially show 6 items per category
  const [isEnlarge, setIsEnlarge] = useState(false); // Toggle for "Show More" button zoom

  // Filter links based on selected category
  const filteredLinks = singleInspireLink.filter(link => link.category === activeCategory);

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleItems(6); // Reset visible items when changing category
  };

  // Handle "Show More" click
  const handleShowMore = () => {
    setVisibleItems(filteredLinks.length); // Show all items for the active category
    setIsEnlarge(false); // Hide the "Show More" button after clicking
  };

  return (
    <footer className="text-gray-600 body-font overflow-x-hidden">
      <div className="container px-5 py-8 flex flex-wrap mx-auto items-center border-t border-gray-200">
        <div>
          <h2 className="text-2xl font-semibold text-black-800 gap-4 mb-8">
            Inspiration for Future Getaways
          </h2>
          {/* Categories Grid */}
          <div className="m-auto">
          <Categories categories={categories} handleCategoryClick={handleCategoryClick} />
          </div>
        </div>

        <div className="container px-1 py-8 mx-auto w-full">
          <div className="flex flex-wrap -m-4 w-full">
            <div className="grid pl-3 m-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredLinks.slice(0, visibleItems).map((inspireLink, index) => (
                <InspirationLink
                  key={index}
                  description={inspireLink.description}
                  title={inspireLink.title}
                />
              ))}
              
              {visibleItems < filteredLinks.length && (
                   
                   <button className="flex items-center hover:underline justify-center text-black font-semibold text-sm"   onClick={handleShowMore}><span>Show More</span> <FaArrowDownLong className="ml-1"/></button>  
                  
              )}
             
            </div>
          </div>
        </div>
      </div>
        <div class="container px-5 py-12 mx-auto border-t border-gray-200">
            <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full mx-20">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Support</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Help Center</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">AirCover</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Anti-discrimination</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Disability support</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Cancellation options</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Report neighbourhood concern</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full mx-20">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Hosting</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Airbnb your home</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">AirCover for Hosts</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Hosting resources</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Community forum</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Hosting responsibly</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Join a free hosting class</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fimd a co-host</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full mx-20">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Airbnb</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Newsroom</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">New features</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Investors</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Gift cards</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Airbnb.org emergency styles</a>
                </li>
                </nav>
            </div>
            </div>
        </div>
            <hr className="w-98" />
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© {footerDate} Airbnb,Inc. 
                    <a className="mx-2" href="#">Terms</a> . <a className="mx-2" href="#">Sitemap</a> . <a className="mx-2" href="#">Privacy</a>
                    <a href="https://zongeatech.com" class="text-gray-600 ml-2" target="_blank" rel="noopener noreferrer">Created by:Zongea Institute Of Technology</a>
                </p>
                <div className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm flex align-middle items-center ">
                <LanguageAndRegion />
                 <a href=""></a>   <span className="ml-3 flex align-middle cursor-pointer hover:underline">English (CA)</span>
                    <Currency />
                    <span className="ml-3 cursor-pointer"><FaSquareTwitter /></span>
                    <span className="ml-3 cursor-pointer"><FaFacebookF /></span>
                    <span className="ml-3 cursor-pointer"><FaSquareInstagram /></span>
                    <span className="ml-3 cursor-pointer"><FaLinkedin /></span>
                </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer; 