import React from "react";


function SearchBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input  
                value={props.search} 
                onChange={props.handleInputChange}
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
               ></input>
                <button className="btn btn-outline-dark my-2 my-sm-0" onClick={props.handleFormSubmit} type="submit">Search</button>
            </form>
        </nav>
    );
}

export default SearchBar;