import React from "react";
import { Link } from "react-router-dom";

function InspirationLink({description, title}) {
    return(
        <Link to="/host/stays"><div className="mt-0 flex-col gap-0 leading-none w-32 md:w-52">
        <h2 className="text-gray-900 title-font text-sm  font-medium">{title}</h2>
        <p className=" text-sm font-semibold">{description}</p>
      </div></Link>  
    )
}

export default InspirationLink;