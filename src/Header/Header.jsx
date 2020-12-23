import React from "react";
import {Link} from "react-router-dom";

import './Header.css';

function Header() {
    return (

        <nav
            className="navbar navbar-expand-md navbar-dark fixed-top bg-dark " id="top-bar">


            <div className="collapse navbar-collapse " id="collapsed">
                <ul className="navbar-nav mx-auto nav-top">
                    <li className="nav-item px-3 Home ">
                        <Link to='/map' className='nav pt-2 text-decoration-none'>Map</Link>
                    </li>
                    <li className="nav-item px-3 About">
                        <Link to='/about' className='nav pt-2 text-decoration-none'>About</Link>
                    </li>
                    <li className="nav-item px-3 Team">
                        <Link to='/' className=' brand text-decoration-none'>Smart Parking</Link>
                    </li>
                    <li className="nav-item px-3 Pricing">
                        <Link to='/partnership' className='nav pt-2 text-decoration-none'><p>Become a partner</p></Link>
                    </li>

                </ul>


            </div>
        </nav>
    );
}

export default Header;
