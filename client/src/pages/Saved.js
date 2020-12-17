import React from "react";
import Nav from "../Components/Nav";
import SavedBookCard from "../Components/SavedBookCard";
import API from "../utils/API"




function Saved() {
    const getDemBooks = () => {
        let dbData = API.getSavedBooks();
        console.log(dbData.data);
    }
    getDemBooks();

    return (
        <div>
            <Nav />
            <SavedBookCard />
        </div>
    )
}



export default Saved;