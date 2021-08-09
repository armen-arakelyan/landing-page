import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About'

const Home=()=>{
    return(
        <div>
        <Navbar />
        <div className="break"></div>
        <div className="home">
        <div className="home_bg_color">
            <span className="home_text">
            <h1>Web development project</h1>
            <p>Very suitable to support all web development projects</p>
            </span>
            <span className="home_content">
            <div className="home_btns">
            <a>Our services</a>
            <a>Hire is now</a>
            </div>
            <div className="down_arrow">
            <p>&#10095;</p>
            </div>
            </span>
        </div>
        </div>
        <About />
        </div>
    )
}

export default Home