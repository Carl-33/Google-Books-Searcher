import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    return (
        <nav className="navbar navbar expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Book Finder</a>
            <ul className="nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" || location.pathname === "/search"  ? "nav-link active" : "nav-link"}>
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                            Saved
                        </Link>
                    </li>
            </ul>
        </nav>
    );
}

export default Nav;