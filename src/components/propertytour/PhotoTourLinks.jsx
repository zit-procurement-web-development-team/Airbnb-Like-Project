import React from "react";

const PhotoTourLinks = ({ image, title, targetId }) => {
    return (
        <a href={`#${targetId}`} className="inline-block">
            <div className="bg-gray-100 p-1 rounded-lg">
                <img className="h-24 w-36 rounded object-cover object-center mb-2" src={image} alt="content" />
                <p className="leading-relaxed text-base">{title}</p>
            </div>
        </a>
    );
};

export default PhotoTourLinks;
