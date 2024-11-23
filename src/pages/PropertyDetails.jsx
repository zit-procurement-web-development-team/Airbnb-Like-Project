
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import PropertyDImg1 from "/assets/property-detail-img/property-d-img1.jpg"
import PropertyDImg2 from "/assets/property-detail-img/property-d-img2.jpeg"
import PropertyDImg3 from "/assets/property-detail-img/property-d-img3.jpeg"
import PropertyDImg4 from "/assets/property-detail-img/property-d-img4.jpeg"
import PropertyDImg5 from "/assets/property-detail-img/property-d-img-5.jpeg"
import PropertyOWner from "/assets/property-detail-img/property-owner.jpg"


import { TbGridDots } from "react-icons/tb";
import { GiInterleavedClaws } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { GiPoolDive } from "react-icons/gi";
import { FaKey } from "react-icons/fa";
import { LiaSnapchatGhost } from "react-icons/lia";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { MdOutlineYard } from "react-icons/md";
import { TbAlarmOff } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbRating12Plus } from "react-icons/tb";
import { MdCleanHands } from "react-icons/md";
import { FaAccusoft } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { RxValue } from "react-icons/rx";
// button message
 import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  

function Card () {
  const [showOption, setShowOption]= useState(false)
   const [showDatePicker, setShowDatePicker] = useState(false);
    
  const [selectedDate, setSelectedDate] = useState(null);
    
  
    return(
    <>
    <div className='flex flex-col sm:flex-row m-4 sm:m-10 lg:m-20 justify-between items-start sm:items-center'>
  <div className='text-black font-semibold text-xl sm:text-2xl'>Villa Prismar</div>

  <div className='flex justify-between sm:justify-evenly gap-4 sm:gap-10 mt-4 sm:mt-0 text-xs sm:text-sm'>
    <div className='flex items-center gap-1'>
      <FaArrowUpFromBracket />
      <p className='underline'>Share</p>
    </div>
    <div className='flex items-center gap-1'>
      <GiSelfLove />
      <p className='underline'>Save</p>
    </div>
  </div>
</div>

    



    {/* image section */}

   <div className='grid grid-cols-2 sm:grid-cols-4 mx-4 sm:mx-12 md:mx-24 lg:mx-48 gap-2'>
    <img src={PropertyDImg1} alt="" className=' row-span-2 col-span-2 ' />
    <img src={PropertyDImg2} alt="" className='w-44 h-30 rounded-sm' />
    <img src={PropertyDImg3} alt="" className='w-44 h-30 rounded-sm' />
    <img src={PropertyDImg4} alt="" className='w-44 h-30 rounded-sm' />
    <img src={PropertyDImg5} alt="" className='w-44 h-30 rounded-sm' />
    <div className='text-center text-sm text-gray-600 flex justify-evenly m-1 w-36 bg-gray-200
        border border-black h-5 align-text-top relative bottom-16 left-full rounded'>
    <TbGridDots />
    <p>Show all photos</p>
</div>

      
</div>


{/* data section */}

<div className="">
{/* data */}

<h2 className='font-bold text-lg sm:text-xl md:text-2xl mx-4 sm:mx-12 md:mx-24 lg:mx-48'>
  Entire villa in Praia do Estoril, Cape Verde <br />
  <span className='text-gray-800 font-thin block mt-1 text-sm sm:text-base'>
    2 guests • 1 bedroom • 1 bed • 1 bath
  </span>
</h2>


{/* 1-div */}
<div className="h-auto rounded-md flex flex-col sm:flex-row w-full sm:w-3/4 md:w-2/4 mx-4 sm:mx-12 md:mx-24 lg:mx-48 m-4 border p-4">
  <div className="flex items-center text-center gap-2 mb-4 sm:mb-0">
    <GiInterleavedClaws />
    <p className="text-xs sm:text-sm">Guest favorite</p>
    <GiInterleavedClaws />
  </div>

  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-10 text-center sm:text-left">
    <p className="text-xs sm:text-sm">One of the most loved homes on Airbnb according to guests</p>
    
    <div className="flex items-center gap-1">
      <h2 className="text-base sm:text-lg font-semibold">4.89</h2>
      <span className="flex">
        <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
      </span>
    </div>
    
    <div className="flex items-center gap-1">
      <h2 className="text-base sm:text-lg font-semibold">36</h2>
      <p className="text-xs sm:text-sm">Reviews</p>
    </div>
  </div>
</div>


{/* profile */}
<div className='flex flex-col sm:flex-row mx-4 sm:mx-12 md:mx-24 lg:mx-48 gap-4 items-center'>
  <div>
    <img src={PropertyOWner} alt="" className='w-8 h-8 sm:w-10 sm:h-10 rounded-full' />
  </div>
  <div>
    <h2 className='text-xs sm:text-sm text-black'>
      Hosted by Francesca
      <br />
      <span className='text-gray-500 text-xs sm:text-sm'>Superhost · 3 years hosting</span>
    </h2>
  </div>
</div>

<div className='mx-4 sm:mx-12 md:mx-24 lg:mx-48 my-4'>
  <hr />
</div>





{/* info */}
<div className='m-4 mx-4 sm:mx-12 md:mx-24 lg:mx-44'>
  <div className='flex flex-col sm:flex-row items-start gap-4 m-3'>
    <div className='flex items-start'>
      <GiPoolDive className='m-2 sm:m-3' />
      <h2 className='text-sm sm:text-base'>
        Dive right in <br />
        <span className='text-xs sm:text-sm text-gray-500'>
          This is one of the few places in the area with a pool.
        </span>
      </h2>
    </div>

    <div className='flex items-start'>
      <FaKey className='m-2 sm:m-3' />
      <h2 className='text-sm sm:text-base'>
        Great check-in experience <br />
        <span className='text-xs sm:text-sm text-gray-500'>
          Recent guests loved the smooth start to this stay.
        </span>
      </h2>
    </div>

    <div className='flex items-start'>
      <LiaSnapchatGhost className='m-2 sm:m-3' />
      <h2 className='text-sm sm:text-base'>
        Francesca is a Superhost <br />
        <span className='text-xs sm:text-sm text-gray-500'>
          Superhosts are experienced, highly rated hosts.
        </span>
      </h2>
    </div>
  </div>

  {/* line */}
  <div className='mx-4 sm:mx-12 md:mx-24 lg:mx-48 my-4'>
    <hr />
  </div>
</div>

{/* div-2 */}
<div className='bg-gray-200 w-full sm:w-3/4 md:w-2/4 lg:w-96 mx-4 sm:mx-12 md:mx-24 lg:mx-48 text-xs sm:text-sm rounded-sm text-center p-2'>
  <p>Some info has been automatically translated. <span className='underline'>Show original</span></p>
</div>


{/* TEXT-CYCLE */}
<div className='mx-4 sm:mx-12 md:mx-24 lg:mx-48 my-3'>
  <div>A haven of peace and elegance just steps from the sea with a wonderful pool</div>
  
  <div>
    <p className='text-sm sm:text-base m-2 font-bold'>
      The space <br />
      <span className='text-xs sm:text-sm font-thin'>
        Villa with a pool a few meters from the sea
      </span>
    </p>
  </div>

  <div className='font-bold text-sm sm:text-base m-2'>
    Guest access...
  </div>

  <div className='flex underline m-1 items-center'>
    <p className='text-sm'>Show more</p>
    <MdOutlineNavigateNext className='ml-1' />
  </div>
</div>

{/* place-offer */}
<h2 className='mx-4 sm:mx-12 md:mx-24 lg:mx-48 font-bold text-base sm:text-lg'>What this place offers</h2>

<div className='flex flex-col sm:flex-row sm:flex-wrap mx-4 sm:mx-12 md:mx-24 lg:mx-40'>
  <div className='m-4 sm:m-7 w-full sm:w-1/2 lg:w-1/2'>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <IoLockClosedOutline className='mr-2' />
      <p>Beach access - Beachfront</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <FaWifi className='mr-2' />
      <p>Wifi</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <PiSwimmingPoolBold className='mr-2' />
      <p>Pool</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <MdOutlineYard className='mr-2' />
      <p>Backyard</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <TbAlarmOff className='mr-2' />
      <p className='line-through'>Carbon monoxide alarm</p>
    </div>
  </div>

  <div className='m-4 sm:m-7 w-full sm:w-1/2 lg:w-1/2'>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <IoLockClosedOutline className='mr-2' />
      <p>Beach access - Beachfront</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <FaWifi className='mr-2' />
      <p>Wifi</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <PiSwimmingPoolBold className='mr-2' />
      <p>Pool</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <MdOutlineYard className='mr-2' />
      <p>Backyard</p>
    </div>
    <div className='flex items-center m-2 text-sm sm:text-base'>
      <TbAlarmOff className='mr-2' />
      <p className='line-through'>Carbon monoxide alarm</p>
    </div>
  </div>
</div>

 {/* button */}
    <div>
 < button onClick={()=>setShowOption(!showOption)} className=" border-4 text-black py-3 px-6  md:mx-40 rounded-md transition duration-300 ease-in-out hover:bg-gray-500 w-full md:w-auto">
  Show all amenities
</button>
  
{showOption&&
  
   <div class="flex flex-col items-center space-y-4 p-4 bg-gray-100 min-h-screen">
    <ul class="list-disc list-inside bg-white p-6 rounded shadow-lg w-full max-w-md">
      <li class="text-gray-800 text-lg font-medium">pool view</li>
      <hr />
      <li class="text-gray-800 text-lg font-medium">Bathroom</li>
      <hr />
      <li class="text-gray-800 text-lg font-medium">Bedroom</li>
    <hr />
      <li class="text-gray-800 text-lg font-medium">Home stafty</li>
      <hr />
      <li class="text-gray-800 text-lg font-medium">internet and office</li>
      <hr />
      <li class="text-gray-800 text-lg font-medium">Kitchen</li>
      <hr />
      <li class="text-gray-800 text-lg font-medium">Location</li>
      <hr />
      <li class="text-gray-800 text-lg font-medium">Out door</li>
    </ul>
  </div>
  
  }
</div>


    {/* button to open modal */}
    

        {/* Modal for date picker */}

                
{/* line */}
<div className='mx-4 sm:mx-12 md:mx-24 lg:mx-48 m-4'>
  <hr />
</div>


  
 {/* date-display */}
  
   

 <div className="w-full max-w-md h-80 relative md:bottom-40 md:left-52 rounded-md border-2 border-black mx-auto">
  <h2 className="font-bold m-4 text-center md:text-left">Add dates for prices</h2>
  <div className="border-2 m-3 rounded-md">
    <form action="" className="flex flex-col md:flex-row justify-center md:justify-between m-4">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        placeholderText="Select a date"
      />
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        placeholderText="Select a date"
      />
    </form>
    <div>
      <hr />
    </div>
    <div className="flex m-6 justify-between items-center">
      <div>Guests 1 guest</div>
      <div>
        <RiArrowDropDownLine className="text-3xl" />
      </div>
    </div>
  </div>
  <button className="w-full md:w-56 bg-rose-600 mx-auto md:mx-24 rounded-md text-white h-12">
    Check availability
  </button>
</div>



{/* date picker */}





{/* tree-2 */}
<div className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-72">
  <div className="mb-4 md:mb-0">
    <GiInterleavedClaws className="text-4xl md:text-6xl m-4" />
  </div>
  <div className="text-center">
    <h1 className="text-6xl md:text-8xl font-medium">4.83</h1>
  </div>
  <div className="mb-4 md:mb-0">
    <GiInterleavedClaws className="text-4xl md:text-6xl m-4" />
  </div>
</div>


{/* rate */}
<div className="mx-4 md:mx-52 text-center">
  <h1 className="font-bold text-2xl md:text-4xl">Guest favorite</h1>
  <p className="text-sm text-gray-600 md:text-base">
    One of the most loved homes on Airbnb
    <br />
    based on ratings, reviews, and reliability
  </p>
</div>

{/* view more */}
<div className="flex flex-col md:flex-row items-center justify-center m-4 md:m-24">
  <div className="flex flex-col items-center m-5 border-r border-gray-300 pr-5">
    <p className="font-bold">Overall rating</p>
    <TbRating12Plus className="text-2xl" />
  </div>

  <div className="flex flex-col items-center m-7 border-r border-gray-300 pr-5">
    <p className="font-bold">Cleanliness</p>
    <p>4.8</p>
    <MdCleanHands className="text-2xl" />
  </div>

  <div className="flex flex-col items-center m-7 border-r border-gray-300 pr-5">
    <p className="font-bold">Accuracy</p>
    <p>4.9</p>
    <FaAccusoft className="text-2xl" />
  </div>

  <div className="flex flex-col items-center m-7 border-r border-gray-300 pr-5">
    <p className="font-bold">Check-in</p>
    <p>4.9</p>
    <IoKeyOutline className="text-2xl" />
  </div>

  <div className="flex flex-col items-center m-7 border-r border-gray-300 pr-5">
    <p className="font-bold">Communication</p>
    <p>4.9</p>
    <FaMessage className="text-2xl" />
  </div>

  <div className="flex flex-col items-center m-7 border-r border-gray-300 pr-5">
    <p className="font-bold">Location</p>
    <p>4.7</p>
    <FaMapLocationDot className="text-2xl" />
  </div>

  <div className="flex flex-col items-center m-7">
    <p className="font-bold">Value</p>
    <p>4.8</p>
    <RxValue className="text-2xl" />
  </div>
</div>


<div><hr /></div>

{/* detail -pathners */}

<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">

          October 2024

          Stayed a few nights
           One of the best hosts ever. very friendly and helpful. the house is super clean with good smell</span>
        </div>
        <p className="font-bold underline mx-16">show more</p>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">
                     October 2024

                     Stayed one night
                     Elisabeth was a very nice hostess.
                      Communication went well and everything matched the description on Airbnb. 
                                  Only the address provided did not lead me directly to their house but</span>
        </div>
        <p className="font-bold underline mx-16">show more</p>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">

            October 2024
            Stayed one night
            Very nice room and very friendly hosts. Recommended</span>
        </div>
        <p className="font-bold underline mx-16">show more</p>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class= "flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">

           October 2024

           Stayed a few nights
           Lovely room with very reasonable pricing. Self checkin was very easy. The host was very friendly. Thank you Elisabeth for hosting us!           </span>
        </div>
        <p className="font-bold underline mx-16">show more</p>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">2 weeks ago
            Stayed a few nights
            Very nice and welcoming host... With my daughterbous 'etions like home... Thank you again for a pleasant stay.</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class=" flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">

                1 week ago

                Stayed one night
                Excellent stay, thank you</span>
        </div>
        <p className="font-bold underline mx-16">show more</p>
      </div>
    </div> 
    <button class="mt-4 sm:mt-8 lg:mt-16 text-black border-2 mx-4 sm:mx-8 lg:mx-48 py-2 px-4 sm:px-6 lg:px-8 focus:outline-none hover:bg-gray-700 rounded text-sm sm:text-base lg:text-lg">
  Show all 109 views
</button>




   {/* google map */}

    
   <div className="m-8 sm:m-12 lg:m-24">
  < div className="relative w-full" style={{ paddingTop: "56.25%" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6583659165262!2d-10.486487326272528!3d6.176468427101416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa0b03ae8d43961%3A0x492ff5aab49c79bf!2sLibassa%20Ecolodge!5e0!3m2!1sen!2s!4v1731932687088!5m2!1sen!2s"
      className="absolute top-0 left-0 w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


 
<section class="body-font">
  <div class="container mx-auto flex flex-col-reverse md:flex-row px-5 py-12 md:py-24 items-center">
    
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 shadow-md shadow-black">
      <div class="flex flex-col sm:flex-row items-center text-center sm:text-left m-8 p-6 bg-white rounded-lg">
       
        <div class="sm:mr-8 mb-4 sm:mb-0">
          <img src={PropertyOWner} alt="Host" class="w-20 h-20 rounded-full mx-auto sm:mx-0" />
          <h1 class="font-bold text-2xl text-black mt-4 sm:mt-0">Francesca</h1>
          <p class="text-gray-600">Superhost</p>
        </div>
        
        <div class="text-center sm:text-left text-black font-semibold">
          <p class="text-xl">170 views</p>
          <hr class="my-2" />
          <p class="text-xl">4.71 rating</p>
          <hr class="my-2" />
          <p class="text-xl">3 years hosting</p>
        </div>
      </div>
    </div>

    
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br class="hidden lg:inline-block" />readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote
        bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
      </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          Message Host
        </button> 
      </div>
      
    </div>
  </div>
  <div className="mx-36 font-bold"><p>Lives in Boa Vista, Cape Verde</p>
       <p className="font-medium underline">show more</p>
       </div>
  <hr />
</section>








{/* last  */}

<section class=" body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">

      <h1 class="sm:text-3xl font-medium title-font text-gray-900">Things to know</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full  p-8 flex-col">
          <div class="flex items-center mb-3">
            
            <h2 class="text-gray-900 text-lg title-font font-medium">House rules</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Flexible check-in <br />
            2 guests maximum <br />No pets</p>
            <a class="mt-3 text-black inline-flex items-center underline">show more
             
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full  p-8 flex-col">
          <div class="flex items-center mb-3">
           
            <h2 class="text-gray-900 text-lg title-font font-medium">Safety & property</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Carbon monoxide alarm not reported
Smoke alarm not reported
Exterior security cameras on property.</p>
            <a class="mt-3 text-black inline-flex items-center underline">show more
              
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full  p-8 flex-col">
          <div class="flex items-center mb-3">
           
            <h2 class="text-gray-900 text-lg title-font font-medium">Cancellation policy</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Add your trip dates to get the cancellation details for this stay.</p>
            <a class="mt-3 text-black inline-flex items-center underline">Add dates
             
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




















</div> 

  
    </>

    )
}

export default Card;