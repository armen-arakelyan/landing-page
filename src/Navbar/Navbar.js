import React from 'react';
import './Navbar.css'

const Navbar=()=>{
    const toHome=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const toAbout=()=>{
        let about=document.getElementById('about').offsetHeight
        window.scrollTo({top:about,behavior:'smooth'})
    }
    const toServices=()=>{
        let about=document.getElementById('about').offsetHeight
        window.scrollTo({top:about+800,behavior:'smooth'})
    }
    const toPortfolio=()=>{
        let about=document.getElementById('about').offsetHeight
        window.scrollTo({top:about+1800,behavior:'smooth'})
    }
    return(
        <div className="navbar">
            <div className="container">
            <div className="nav_distance">
            <div className="logo">
            <h2 onClick={toHome}>Your Logo</h2>
            </div>
            <div className="nav_items">
            <a onClick={toHome}>Home</a>
            <a onClick={toAbout}>About</a>
            <a onClick={toServices}>Servicing</a>
            <a onClick={toPortfolio}>Portfolio</a>
            <a>Blog</a>
            <a>Contact us</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar