import React from 'react';
import Services from '../Services/Services';
import './About.css';

const About=()=>{
    return(
        <div id="about">
        <div className="about">
            <div className="break" />
            <div className="about_content">
                <div className="about_text">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,</p>
                </div>
                <div className="icons_about">
                <div className="card">
                <div className="icon">
                <img src="icons/internet.png" />
                </div>
                <div className="icon_main_text">
                    <h2>Awesome Icons</h2>
                </div>
                <div className="icon_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                </div>
                <div className="card">
                <div className="icon">
                <img src="icons/transfer.png" />
                </div>
                <div className="icon_main_text">
                    <h2>One Page</h2>
                </div>
                <div className="icon_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                </div>
                <div className="card">
                <div className="icon">
                <img src="icons/head.png" />
                </div>
                <div className="icon_main_text">
                    <h2>Fully Responsive</h2>
                </div>
                <div className="icon_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        <Services />
        </div>
    )
}

export default About