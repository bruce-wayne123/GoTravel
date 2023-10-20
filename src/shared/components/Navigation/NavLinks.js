import React, { useContext } from "react";
import "../../styles/NavLinks.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
const NavLinks = () => {
    const auth = useContext(AuthContext);
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>
                All USERS
            </NavLink>
        </li>

        {auth.isLoggedIn && <li><NavLink to="/u1/places">
            MY PLACES
        </NavLink></li>}
        {auth.isLoggedIn && <li>
            <NavLink to="/places/new">
                ADD PLACE
            </NavLink>
        </li>}
        {!auth.isLoggedIn && <li>
            <NavLink to="/user/login">
                LOGIN
            </NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <button onClick={() => auth.logout()}>LOG OUT</button>
        </li>
        }
    </ul >
};

export default NavLinks;