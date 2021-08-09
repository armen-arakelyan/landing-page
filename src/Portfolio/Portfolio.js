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
            <div className="cards_content">
            <img src="works/first.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Wine</h4>
            <p>ui/ux design</p>
            </div>
            </div>
            <div className="cards_content">
            <img src="works/coffee.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Coffee</h4>
            <p>mockups</p>
            </div>
            </div>
            <div className="cards_content">
            <img src="works/suit.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Suit</h4>
            <p>web design</p>
            </div>
            </div>
            <div className="cards_content">
            <img src="works/time.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Time</h4>
            <p>ui/ux design</p>
            </div>
            </div>
            <div className="cards_content">
            <img src="works/banana.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Banana</h4>
            <p>mockups</p>
            </div>
            </div>
            <div className="cards_content">
            <img src="works/package.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Package</h4>
            <p>web design</p>
            </div>
            </div>
            </div>
            <a className="view_btn">View All</a>
            </div>
            </div>
    )
}

export default Portfolio