import React, {Fragment, useEffect, useState} from "react";

function EachListing({image, description, location, id}) {
    return (
        <Fragment>
            <img src={image} alt={description}/>
            <h2>{description}</h2>
            <p>{location}</p>

        </Fragment>
    )
}

export default EachListing;