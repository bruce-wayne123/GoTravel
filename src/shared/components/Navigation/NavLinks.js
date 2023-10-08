import React from "react";
import "../../styles/NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>
                All USERS
            </NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">
                MY PLACES
            </NavLink>
        </li>
        <li>
            <NavLink to="/places/new">
                ADD PLACE
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                LOGIN
            </NavLink>
        </li>
    </ul>

};

export default NavLinks;