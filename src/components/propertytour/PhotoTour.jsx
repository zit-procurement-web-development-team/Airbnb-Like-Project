
import React from "react";
import image1 from "/assets/propertytourimgs/ptimg1.jpeg";
import image2 from "/assets/propertytourimgs/ptimg2.jpeg";
import image3 from "/assets/propertytourimgs/ptimg3.jpeg";
import image4 from "/assets/propertytourimgs/ptimg4.jpeg";
import image5 from "/assets/propertytourimgs/ptimg5.jpeg";

import image6 from "/assets/propertytourimgs/ptimg6.jpeg";
import image7 from "/assets/propertytourimgs/ptimg7.jpeg";
import image8 from "/assets/propertytourimgs/ptimg8.jpeg";
import image9 from "/assets/propertytourimgs/ptimg9.jpeg";
import image10 from "/assets/propertytourimgs/ptimg10.jpeg";

import image11 from "/assets/propertytourimgs/ptimg11.jpeg";
import image12 from "/assets/propertytourimgs/ptimg12.jpeg";
import image13 from "/assets/propertytourimgs/ptimg13.jpeg";
import image14 from "/assets/propertytourimgs/ptimg14.jpeg";
import image15 from "/assets/propertytourimgs/ptimg15.jpeg";

import PhotoTourLinks from "./PhotoTourLinks";
import PhotoTourImagesC from "./PhotoTourImagesC";

const PhotoTour = () => {
    const tourLinkContainer = [
        { image: image1, title: "Shared living room", id: "living-room" },
        { image: image2, title: "Shared full kitchen", id: "full-kitchen" },
        { image: image3, title: "Bedroom", id: "bedroom" },
        { image: image4, title: "Full bathroom", id: "full-bathroom" },
        { image: image5, title: "Exterior", id: "exterior" }
    ];

    const imageArrays = {
        "living-room": [image1, image6, image7, image8, image9],
        "full-kitchen": [image2, image10, image11, image12, image13],
        "bedroom": [image3, image14, image15, image7, image2],
        "full-bathroom": [image4, image9, image8, image11, image7],
        "exterior": [image5, image12, image13, image14, image15]
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Photo Tour</h2>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {tourLinkContainer.map((singleLink, index) => (
                        <PhotoTourLinks
                            key={index} // Use a unique ID for the key
                            image={singleLink.image}  // Preview image
                            title={singleLink.title}
                            targetId={singleLink.id}
                        />
                    ))}
                </div>
            </div>

            {/* Render PhotoTourImagesC for each section */}
            {tourLinkContainer.map((singleLink) => (
                <PhotoTourImagesC
                    key={singleLink.id} // Use the section's ID as the key
                    title={singleLink.title}
                    id={singleLink.id}
                    imageArray={imageArrays[singleLink.id]}  // Get the corresponding image array
                />
            ))}
        </section>
    );
};

export default PhotoTour;
