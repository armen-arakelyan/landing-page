import React from 'react';
import './Portfolio.css'

const Portfolio=()=>{
    return(
        <div>
            <div className="break"></div>
            <div className="services_content">
                <h2>Latest Works</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,</p>
                    <div className="btns">
            <a>All</a>
            <a>Web Design</a>
            <a>Ui/Ux design</a>
            <a>Mockups</a>
            </div>
            <div className="cards">
            <img src="works/first.jpeg" alt="" />
            <img src="works/banana.jpeg" alt="" />
            <img src="works/coffee.jpeg" alt="" />
            <img src="works/time.jpeg" alt="" />
            <img src="works/package.jpeg" alt="" />
            <img src="works/suit.jpeg" alt="" />
            </div>
            <a className="view_btn">View All</a>
            </div>
            </div>
    )
}

export default Portfolio