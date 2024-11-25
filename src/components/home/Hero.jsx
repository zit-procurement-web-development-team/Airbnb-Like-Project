import React from "react";
import Card from "./Cards";
import image1 from "/assets/images/card1.jpg"
import image2 from "/assets/images/beach1.webp";
import image3 from "/assets/images/beach2.webp";
import image4 from "/assets/images/beach3.webp";
import image5 from "/assets/images/beach4.webp";

const cardData = [
  { date: "02 May - 4 Jan", cost: "$44 USD", location: "Freetown, Sierra Leone", hostname: "Victoria", images: [image1, image2, image3, image4, image5] },
  { date: "02 Mar - 4 Feb", cost: "$64 USD", location: "Abuja, Nigeria", hostname: "Thompson", images: [image5, image4, image3, image2, image1] },
  { date: "15 Apr - 15 Jun", cost: "$88 USD", location: "Accra, Ghana", hostname: "Kwame", images: [image2, image1, image3, image4, image5] },
  { date: "01 Jul - 15 Aug", cost: "$120 USD", location: "Lagos, Nigeria", hostname: "Ademola", images: [image3, image2, image1, image4, image5] },
  { date: "10 May - 20 Aug", cost: "$100 USD", location: "Monrovia, Liberia", hostname: "Ellen", images: [image1, image2, image3, image4, image5] },
  { date: "18 Feb - 28 Apr", cost: "$150 USD", location: "Nairobi, Kenya", hostname: "Mwangi", images: [image1, image2, image3, image4, image5] },
  { date: "22 Apr - 30 May", cost: "$55 USD", location: "Dakar, Senegal", hostname: "Omar", images: [image1, image2, image3, image4, image5] },
  { date: "14 Jan - 20 Mar", cost: "$75 USD", location: "Mombasa, Kenya", hostname: "Amina", images: [image1, image2, image3, image4, image5] },
  { date: "01 Mar - 10 May", cost: "$40 USD", location: "Lome, Togo", hostname: "Femi", images: [image1, image2, image3, image4, image5] },
  { date: "02 Dec - 05 Feb", cost: "$90 USD", location: "Banjul, Gambia", hostname: "Salifu", images: [image4, image2, image3,  image5, image1] },
  { date: "11 Jan - 05 Apr", cost: "$130 USD", location: "Cotonou, Benin", hostname: "Marcel", images: [image1, image2, image3, image4, image5] },
  { date: "17 Jul - 20 Sep", cost: "$110 USD", location: "Conakry, Guinea", hostname: "Saidou", images: [image1, image2, image3, image4, image5] },
  { date: "19 Mar - 15 May", cost: "$95 USD", location: "Abidjan, Ivory Coast", hostname: "Kwasi", images: [image1, image2, image3, image4, image5] },
  { date: "12 Jan - 03 Mar", cost: "$60 USD", location: "Lagos, Nigeria", hostname: "Ngozi", images: [image1, image2, image3, image4, image5] },
  { date: "01 Jun - 25 Oct", cost: "$120 USD", location: "Accra, Ghana", hostname: "Kojo", images: [image1, image2, image3, image4, image5] },
  { date: "04 Apr - 28 Jul", cost: "$150 USD", location: "Harare, Zimbabwe", hostname: "Tariro", images: [image1, image2, image3, image4, image5] },
];

function Hero() {
  return (
    <div>
    <main className="my-16 mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          images={card.images}
          date={card.date}
          cost={card.cost}
          location={card.location}
          hostname={card.hostname}
        />
      ))}
    </main>
     <div className="m-auto flex justify-center flex-col items-center mb-4" >
      <p className="font-semibold text-sm">Continue exploring beach homes</p>
    <button className="bg-black text-white w-[6rem] text-xs font-bold h-[2.5rem] rounded-md mt-1 hover:opacity-70">See more</button>
    </div> 
    </div>
  );
}

export default Hero;
