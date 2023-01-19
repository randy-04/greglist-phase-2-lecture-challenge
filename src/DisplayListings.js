import React, { useEffect, useState, Fragment } from "react";
import EachListing from "./EachListing";
import ListingForm from "./ListingForm";
import ListingData from "./ListingData";
import { Route, Routes, Link, Outlet } from "react-router-dom";
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
      <Routes>
            <Route path="/" element={<h1>Karibu Nyumbani</h1>}/>
            
            <Route path="/addlisting" element={<ListingForm onAdd={handleAddListing}/>}/>
            
            <Route path="/showlistings" element={<>
                <h1> Available Listings </h1>        
                <div style={{display: "flex"}}>
                {listLoop}
                </div>
                <Outlet />
            </>}> 
                <Route path="new" element={<><h1>Wozzaaahhh</h1></>} />
                <Route path="details/:listingId" element={<ListingData />} />
            </Route>
        </Routes>
        <Link to={'/addlisting'}>Take Me to Form</Link>
        <Link to={'/showlistings'}>Shows Listings</Link>
        <Link to={'/'}> Go Home </Link>

        <Link to={'/showlistings/new'}>Wozzaaahhh</Link>
    </Fragment>
  )
}

export default DisplayListings;