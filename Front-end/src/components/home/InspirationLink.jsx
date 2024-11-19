import React from "react";

function InspirationLink({description, title}) {
    return(
        <a href="#"><div class="mt-0 flex-col gap-0 leading-none w-32 md:w-52">
        <h2 className="text-gray-900 title-font text-sm  font-medium">{title}</h2>
        <p className=" text-sm font-semibold">{description}</p>
      </div></a>  
    )
}

export default InspirationLink;