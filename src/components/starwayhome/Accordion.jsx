import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the accordion
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  const accordionData = [
    {
      title: "Top questions",
      content: " How do I get started? You can create a listing in just a few steps, all at your own pace. Start by telling us about your home, take some photos, and add details about what makes it unique. Start your listing. Do I have to host all the time? Nope—you control your calendar. You can host once a year, a few nights a month, or more often. What are Airbnb’s fees? It’s free to create a listing, and Airbnb typically collects a service fee of 3% of the reservation subtotal once you get paid. In many areas, Airbnb automatically collects and pays sales and tourism taxes on your behalf. Learn more about fees."
    },
    {
      title: "Hosting basics",
      content: "How do I get started? You can create a listing in just a few steps, all at your own pace. Start by telling us about your home, take some photos, and add details about what makes it unique. Start your listing. How do I get my home ready for guests? Make sure your home is clean, clutter-free, and that everything is working properly. Items like fresh linens and stocked toiletries help create a comfortable and inviting place to stay. Check out our guide to getting your home ready. How am I protected when I host? AirCover for Hosts provides top-to-bottom protection every time you host your home on Airbnb. Learn more about AirCover for Hosts and what’s included. Any tips on being a great host? From sharing a list of your favorite local places to responding quickly to guest messages, there are lots of ways to be an excellent host. Get more hosting tips."
    },
    {
      title: "Policy & regulations",
      content: "Are there any regulations that apply in my city? Some areas have laws and regulations for hosting your home. It’s important to familiarize yourself with any laws that may apply to your location. Also, depending on where you live, you may need to check with your HOA, read your lease agreement, or notify your landlord or neighbors about your plans to host on Airbnb. Learn more about responsible hosting. what if I have other questions? Local hosts are a great source for information and insights. We can connect you with an experienced Airbnb host in your area who may be able to answer additional questions. Ask a host."
    },
    {
      title: "Co-hosts",
      content: "What can co‑hosts help with? You can hire a co‑host to do one thing or everything. While each co‑host offers different services, they can help with things like setting up your Airbnb listing, getting your home ready, managing reservations and messages, cleaning and maintenance, and assisting with onsite requests your guests may have. Can I find a co‑host on Airbnb? Airbnb makes it easy to find and hire a high‑quality, local co‑host in the Airbnb app. Review, message, and choose the co‑host that best fits your needs. Learn about the Co‑Host Network. How do I pay my co‑host? You and your co‑host should agree on payment terms before they start helping you. You have the option to share a part of each booking’s payout with your co‑host directly through Airbnb. Some limitations may apply, depending on your location as well as the location of your listing and co‑host. Learn how co-host payouts work."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
        <h2 className="justify-center text-center text-7xl p-20 text-bold">Your questions, <br />answered</h2>
    <div className="w-[600px] mx-auto my-9 bg-gray-100"> {/* Increased width to 600px */}
    <h2></h2>
      <div className="">
        {accordionData.map((item, index) => (
          <div key={index} className="mb-4"> {/* Added margin-bottom for spacing */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-8 bg-gray-100 text-lg font-semibold focus:outline-none"
            >
              {item.title}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-700 ">
                {item.content}
              </div>
            )}

            {/* Horizontal line between accordion sections */}
            {index !== accordionData.length - 1 && (
              <hr className="border-t border-gray-300" /> // Adds a subtle horizontal line
            )}
          </div>
        ))}
      </div>
    </div>
    <section>
  <div className="w-full bg-gray-100">
    <h2 className="justify-center text-center text-4xl text-bold">
      Still have questions?
    </h2>

    <p className="justify-center text-center text-gray-500 text-2xl mt-3">
      Get answers from an experienced local host.
    </p>
    <Link to="/Find">
      <button className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded-full text-lg">
        Ask a host
      </button>
    </Link>
  </div>

  <section className="mt-20">
    <hr className="" />
    <p className="p-20 text-gray-500 mt-3 ">Hosts on the Co‑Host Network typically have high ratings, low cancellation rates, and established Airbnb hosting experience. Ratings are based on guest reviews for listings they host or co‑host and may not represent the co‑host’s unique services.
      Co‑Host Network is powered by Airbnb Global Services Limited, Airbnb Living LLC, and Airbnb Plataforma Digital Ltda. Available in select locations only.Learn more.</p>
  <hr />
  </section>
</section>

    </div>

    
  );
};

export default Accordion;
