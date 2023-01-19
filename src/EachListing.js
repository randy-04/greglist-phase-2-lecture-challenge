import React, {Fragment, useEffect, useState} from "react";
import { Link } from "react-router-dom";

function EachListing({image, description, location, id}) {
    return (
        <Fragment>
            <img src={image} alt={description}/>
            <h2>{description}</h2>
            <p>{location}</p>
            <Link to={`details/${id}`}>View Details</Link>

        </Fragment>
    )
}

export default EachListing;