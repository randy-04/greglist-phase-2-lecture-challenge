import React, { useEffect, useState, Fragment } from "react";
import EachListing from "./EachListing";
import ListingForm from "./ListingForm";

//see all listings => fetch data from api, then store the data in a state variable. After that, find a way to render the state data to components.
// add a listing from form 

function DisplayListings() {
const [listings, setListings] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then((r)=>r.json())
    .then((data) => setListings(() => data))
},[])

const listLoop = listings.map((listing) => {
    return (
        <EachListing key={listing.id} id={listing.id} image={listing.image} location={listing.location} description={listing.description}/>
    )
})

// function to pass as prop for adding listings
function handleAddListing(data) {
    console.log(data);
    setListings([...listings, data])
}
  

  return (
    <Fragment>
    {listLoop}
    <ListingForm onAdd={handleAddListing}/>
    </Fragment>
  )
}

export default DisplayListings;