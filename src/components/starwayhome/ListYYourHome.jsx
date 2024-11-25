import React from 'react';
import Phone from '/assets/starwayhomeimgs/starwayhome9.jpeg';  // Ensure the image path is correct
import left from '/assets/starwayhomeimgs/starwayhome11.jpeg';
import right from '/assets/starwayhomeimgs/starwayhome10.jpeg';
import downleft from '/assets/starwayhomeimgs/starwayhome3.jpeg';
import downright from '/assets/starwayhomeimgs/starwayhome5.jpeg'
import AirCover from '/assets/starwayhomeimgs/STARRWAY-02.png';
import { FaCheck } from "react-icons/fa6";
import sma from '/assets/starwayhomeimgs/starwayhome2.jpeg';
import { CiTimer } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import smart from "/assets/starwayhomeimgs/starwayhome4.jpeg";
import uncle from "/assets/starwayhomeimgs/starwayhome2.jpeg"



function ListYourHome() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex items-center justify-center text-center flex-col">
          <h2 className='title-font text-6xl font-medium text-gray-900 '>It’s easy to list your  <br /> home on Airbnb</h2>
          {/* Hero Image */}
          <img
            className="object-cover object-center rounded"
            alt="Phone"
            src={Phone}  // Use the imported Phone variable here
          />
          {/* Text Content */}
          <div className="text-center lg:w-6/3 ">
            <section className="text-gray-600 body-font">
              <div className="container  mx-auto">
                <div className="flex flex-wrap">
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-5 flex-shrink-0">
                    <CiHome />
                    </div>
                    <p className="text-gray-900 text-lg title-font font-medium mb-3">Get 1:1 support from experienced hosts at any time</p>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-5 flex-shrink-0">
                    <CiTimer />
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-900 text-lg title-font font-medium mb-3">Go at your own pace, and make changes whenever</p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-indigo-500 mb-5 flex-shrink-0">
                    <AiOutlineComment />
                    </div>
                    <p className="text-gray-900 text-lg title-font font-medium mb-3">Get 1:1 support from experienced hosts at any time</p>
                  </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-black mt-{-40px} border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                  List your home
                </button>
                <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div class="text-center w-full">
                <h2 class="title-font  text-6xl text-black mb-4 font-medium">A co-host can do the hosting for you</h2>
                <p class="mb-8 ding-relaxed text-2xl">Now you can hire a high-quality, local co‑host to take care of your home and guests.</p>
                
                
              </div>
            </div>
          </section>
          <section class="text-gray-600 body-font flex w-full gap-9 lg:w-7/3">

          <div className="max-w-sm h-50 overflow-hidden  w-full rounded shadow-lg bg-gray-100">
      {/* Image section */}
      <img
        src={sma}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mt-4"
      />
      
      {/* Content section */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Sid</h2>
        <p className="text-gray-600 mt-2">
        Co-host in London, UK
        </p>
      </div>
      
      {/* Footer section */}
      <div className="px-6 py-4 justify-center flex items-center">
       <div className='bg-white rounded p-3 flex '>

        <div className='flex'>
        <div className=' flex font-bold text-xl text-black justify-center p-2 '>
        <span className='h-5 '><IoIosStar /></span>   4.93 <br />
          guest rating
        </div>
        <br />
        |
        |
    <div className=' font-bold text-xl text-black justify-center p-2'>
      <span className='block font-bold text-black justify-center text-xl'>7</span>
      <span className='block font-bold text-black'>years hosting</span>
    </div>
        
        </div>
       </div>
      </div>
    </div>









    {/* ======================================================================================================== */}



    <div className="max-w-sm h-50 overflow-hidden rounded  w-full shadow-lg bg-gray-100">
      {/* Image section */}
      <img
        src={sma}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mt-4"
      />
      
      {/* Content section */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Mariam</h2>
        <p className="text-gray-600 mt-2">
        Co-host in Los Angeles, USA
        </p>
      </div>
      
      {/* Footer section */}
      <div className="px-6 py-4 flex justify-center items-center">
       <div className='bg-white rounded p-3 flex '>

        <div className='flex'>
        <div className=' flex font-bold text-1xs text-black justify-center p-2 '>
        <span className='h-5  text-sm'><IoIosStar /></span>   4.96 <br />
          guest rating
        </div>
        <br />
        |
        |
    <div className=' font-bold text-black justify-center p-2'>
      <span className='block font-bold text-black justify-center'>7</span>
      <span className='block font-bold text-black'>years hosting</span>
    </div>
        
        </div>
       </div>
      </div>
    </div>




    <div className="max-w-sm h-50  overflow-hidden rounded  w-full shadow-lg bg-gray-100">
      {/* Image section */}
      <img
        src={sma}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mt-4"
      />
      
      {/* Content section */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Sid</h2>
        <p className="text-gray-600 mt-2">
        Co-host in London, UK
        </p>
      </div>
      
      {/* Footer section */}
      <div className="px-6 py-4 flex justify-center items-center">
       <div className='bg-white rounded p-3 flex '>

        <div className='flex'>
        <div className=' flex font-bold text-xl text-black justify-center p-2 '>
        <span className='h-5 '><IoIosStar /></span>   4.93 <br />
          guest rating
        </div>
        <br />
        |
        |
    <div className=' font-bold text-xl text-black justify-center p-2'>
      <span className='block font-bold text-black justify-center text-xl'>7</span>
      <span className='block font-bold text-black'>years hosting</span>
    </div>
        
        </div>
       </div>
      </div>
    </div>









</section>









              </div>
            </section>
          </div>
        </div>
      </section>

      <section class="text-gray-600 mt-{-50px}">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-black">Co-hosts can do it all</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
            className="w-32 h-32 object-cover object-center rounded"
            alt=""
            src={left}  // Use the imported Phone variable here
          />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Set up your listing</h2>
            <p class="mb-4">Take photos, set prices, and create an arrival guide</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
            className="w-32 h-32 object-cover object-center rounded"
            alt=""
            src={right}  // Use the imported Phone variable here
          />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Get your home ready</h2>
            <p class="mb-4">Prepare, clean, and maintain your home</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
            className="w-32 h-32 object-cover object-center rounded"
            alt=""
            src={downleft}  // Use the imported Phone variable here
          />
          <hr />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Manage your reservations</h2>
            
            <p class="mb-4">Stay on top of your bookings and guest messages</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
            className="w-32 h-32 object-cover object-center rounded"
            alt=""
            src={downright}  // Use the imported Phone variable here
          />
      
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Assist your guests</h2>
            <p class="mb-4">Handle check-ins, checkouts, and onsite requests</p>
            
          </div>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-black mt-{-40px} border-0 py-2 px-9 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Find a co-host</button>
  </div>
</section>


{/* section CoverAirBnb */}
<section class="text-gray-600 body-font container mx-auto flex items-center justify-center text-center flex-col">
  <div class="container px-5 py-24 mx-auto flex flex-wrap flex-colitems-center justify-center text-center">
  <img
            className="w-48 justify-center"
            alt=""
            src={AirCover}  // Use the imported Phone variable here
          />
    <div class="flex flex-col text-center w-full"> 
      <h1 class="text-6xl font-medium title-font mb-4 mt-3 text-gray-900">However you host, <br />you’re protected</h1>
      <p class="mx-auto text-3xl lg:w-3/5  leading-relaxed ">Top-to-bottom protection, included every time you host your home on Airbnb.</p>
    </div>
  </div>
</section>

{/* another section fo passing vib */}

  <div class="container px-5 py-24 mx-auto mt-{-34}">

    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Up to $3M damage protection</h2>
      </div>
      <div class=" sm:order-none order-first inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
     <i><FaCheck /></i> 
      </div>
    </div>


    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Up to $1M liability insurance</h2>
      </div>
      <div class=" sm:order-none order-first inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
     <i><FaCheck /></i> 
      </div>
    </div>


    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">24-hour safety line</h2>
      </div>
      <div class=" sm:order-none order-first inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
     <i><FaCheck /></i> 
      </div>
    </div>

    <button className="flex mx-auto mt-16 text-white bg-black mt-{-40px} border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
    Learn about AirCover
                </button>

                <div className='title-font flex mx-auto text-center lg:w-5/6 text-gray-900'>
    <p className='mt-4 text-gray-500'>Host Damage Protection reimburses for certain guest damages during Airbnb stays. It’s not insurance and may apply if guests don’t pay. Liability insurance is provided by 3rd parties. <a href="#"><u>See details and exclusions.</u></a></p>
  </div>
  </div>

    


    {/* ---------------------------------------------------------------- */}
    <section class="text-gray-600 body-font">
  <div class="container px-9 mx-auto p-4 md:w-5/3 sm:mb-0 mb-6 text-center">
  <h2 className=' title-font text-gray-900 mt-5 md:w-2/3 mb-20 mx-auto text-4xl'>All the tools you need to host, all in one app</h2>
    <div class="flex flex-col">
     
      
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden object-cover object-center">
        <img
            className="object-cover object-center rounded justify-center"
            alt=""
            src={Phone}  // Use the imported Phone variable here
          />
           <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Listing editor</h2>
           <p class="text-base leading-relaxed mt-2">Showcase every detail of your home</p>
        </div>
       
       
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
        <img
            className="w-max justify-center"
            alt=""
            src={Phone}  // Use the imported Phone variable here
          />
           <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Calendar</h2>
           <p class="text-base leading-relaxed mt-2">Manage your availability and pricing</p>
        </div>
       
       
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
        <img
            className="w-100 justify-center"
            alt=""
            src={Phone}  // Use the imported Phone variable here
          />
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Message</h2>
          <p class="text-base leading-relaxed mt-2">Quickly message guests and support</p>
        </div>
        
       
      </div>
    </div>
    <br />
    <br /><br /><br /><br />
    <hr  />
  </div>
 


 
</section>










<section class="text-gray-600 body-font  px-40 lg:w-3/2 justify-center">
  <div class="container mx-auto flex px-5 py-24 md:flex-row justify-center flex-col items-center">
    <div class=" md:w-2/1 w-1/4 mb-10 md:mb-0 justify-center">
    <img
            className=" rounded justify-center"
            alt=""
            src={smart}  // Use the imported Phone variable here
          />
    </div>
    <div class="lg:flex-grow md:w-1/2 justify-center lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
      Hosting isn’t only for homeowners
        {/* <br class="hidden lg:inline-block">readymade gluten */}
      </h1>
      <p class="mb-8 leading-relaxed">Airbnb-friendly apartments make it easy for you to rent, host, and earn extra income when you’re away.</p>
      <div class="flex justify-center">
    <a href="#"> <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a></a> 

      </div>
    </div>
  </div>

  
</section>


{/* ---------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------- */}
    
    
    </main>

  );
}

export default ListYourHome;
