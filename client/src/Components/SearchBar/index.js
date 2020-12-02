import React from "react";
import Search from "../../pages/Search";

function SearchBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar;