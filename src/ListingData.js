import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ListingData() {
    let params = useParams();

    const [myListingData, setMyListingData] = useState({});
    // console.log(params.listingId);
    

    useEffect(() => {
        fetch(`http://localhost:3000/listings/${params.listingId}`)
        .then((r) => r.json())
        .then((data) => setMyListingData(data))
    }, [params.listingId])
    console.log(myListingData);
    return (
        <Fragment>
            <h2>{myListingData.description}</h2>
            <small>{myListingData.location}</small>
        </Fragment>

    )
    
}

export default ListingData;