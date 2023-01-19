import React, { Fragment, useState } from "react";

function ListingForm({onAdd}) {
    // declare state variable to hold user input
    const [userData, setUserData] = useState({})

    function handleInput(e) {
        e.preventDefault();
        // console.log(e.target.value);
        // console.log(e.target.name);
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    function hanldeSubmit(e) {
        e.preventDefault()
        // onAdd(userData)

        // post request after submission
        fetch("http://localhost:3000/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then((r)=>r.json())
        .then(() => onAdd(userData))
    }

    return(
        <Fragment>
            <form onSubmit={hanldeSubmit}>
                <label>
                    Image:
                    <input onChange={handleInput} type="text" name="image" placeholder="image"/>
                </label>
                <label>
                    Description:
                    <input onChange={handleInput} type="text" name="description" placeholder="description"/>
                </label>
                <label>
                    Location:
                    <input onChange={handleInput} type="text" name="location" placeholder="location"/>
                </label>
                <button>Submit</button>
            </form>

        </Fragment>
    )
}

export default ListingForm;