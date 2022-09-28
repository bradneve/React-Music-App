import React from "react";
import { NavLink } from "react-router-dom";
// import { BackButton } from "../../components";
import './style.css'

function Header() {
    const activeClass = (({ isActive }) =>
        isActive ? 'current' : undefined)


    return (
        <>
            <ul>
                <NavLink className={activeClass} to="/" end>Home</NavLink>
                <NavLink className={activeClass} to="artists" end>Artists</NavLink>
                {/* <NavLink className={activeClass} to="about" end>About</NavLink> */}
            </ul>
            {/* <BackButton /> */}
        </>


    );
}

export default Header;