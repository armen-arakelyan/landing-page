import React from 'react';
import './Navbar.css'

const Navbar=()=>{
    const toHome=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const toAbout=()=>{
        let about=document.getElementById('about').offsetTop
        window.scrollTo({top:about,behavior:'smooth'})
    }
    const toServices=()=>{
        let services=document.getElementById('services').offsetTop
        window.scrollTo({top:services,behavior:'smooth'})
    }
    const toPortfolio=()=>{
        let portfolio=document.getElementById('portfolio').offsetTop
        window.scrollTo({top:portfolio,behavior:'smooth'})
    }
    const toBlog=()=>{
        let blog=document.getElementById('blog').offsetTop;
        window.scrollTo({top:blog,behavior:'smooth'})
    }
    const toContact=()=>{
        let contact=document.getElementById('contact').offsetTop;
        window.scrollTo({top:contact,behavior:'smooth'})
    }
    return(
        <div className="navbar">
            <div className="nav_distance">
            <div className="logo">
            <h2 onClick={toHome}>Your Logo</h2>
            </div>
            <div className="nav_items">
            <a onClick={toHome}>Home</a>
            <a onClick={toAbout}>About</a>
            <a onClick={toServices}>Servicing</a>
            <a onClick={toPortfolio}>Portfolio</a>
            <a onClick={toBlog}>Blog</a>
            <a onClick={toContact}>Contact us</a>
            </div>
            </div>
        </div>
    )
}

export default Navbar