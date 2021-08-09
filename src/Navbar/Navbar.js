import React from 'react';
import './Navbar.css'

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="container">
            <div className="nav_distance">
            <div className="logo">
            <h2>Your Logo</h2>
            </div>
            <div className="nav_items">
            <a>Home</a>
            <a>About</a>
            <a>Servicing</a>
            <a>Portfolio</a>
            <a>Blog</a>
            <a>Contact us</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar