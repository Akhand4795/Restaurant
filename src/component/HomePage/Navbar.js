import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const navList = ["/", "/shop", "/contact"];
    const navName = ["Home", "Shop", "Contact us"];
    return <>
        <nav>
            <ul className="nav-flex-row">

                {navList.map((nav, index) => (
                    <li key={index} className="nav-item">
                        <Link to={navList[index]}>{navName[index]}</Link>
                    </li>
                ))}

            </ul>
        </nav>
    </>
}

export default Navbar
