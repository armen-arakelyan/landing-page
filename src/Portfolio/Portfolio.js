import React,{useState} from 'react';
import Pricing from '../Pricing Plan/Pricing';
import './Portfolio.css'

const Portfolio=()=>{
    const [all,setAll]=useState(true);
    const [web,setWeb]=useState(false);
    const [uiux,setUiUx]=useState(false);
    const [mockups,setMockups]=useState(false);
    return(
        <div id="portfolio">
            <div className="break"></div>
            <div className="services_content">
                <h2>Latest Works</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,</p>
                    <div className="btns">
            <a style={{backgroundColor:all?'#00897b':'white',color:all?'white':'#000'}} onClick={()=>{
                setAll(true)
                setWeb(false)
                setUiUx(false)
                setMockups(false)
            }}>All</a>
            <a style={{backgroundColor:web?'#00897b':'white',color:web?'white':'#000'}} onClick={()=>{
                setAll(false)
                setWeb(true)
                setUiUx(false)
                setMockups(false)
            }}>Web Design</a>
            <a style={{backgroundColor:uiux?'#00897b':'white',color:uiux?'white':'#000'}} onClick={()=>{
                setAll(false)
                setWeb(false)
                setUiUx(true)
                setMockups(false)
            }}>Ui/Ux design</a>
            <a style={{backgroundColor:mockups?'#00897b':'white',color:mockups?'white':'#000'}} onClick={()=>{
                setAll(false)
                setWeb(false)
                setUiUx(false)
                setMockups(true)
            }}>Mockups</a>
            </div>
            <div className="cards">
            <div style={{display:web || mockups?'none':'flex' || (uiux || all?'flex':'none')}} className="cards_content">
            <img src="works/first.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Wine</h4>
            <p>ui/ux design</p>
            </div>
            </div>
            <div style={{display:mockups || all?'flex':'none' || uiux?'none':'flex' || web?'none':'flex' }} className="cards_content">
            <img src="works/coffee.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Coffee</h4>
            <p>mockups</p>
            </div>
            </div>
            <div style={{display:web || all?'flex':'none' || uiux?'none':'flex'}} className="cards_content">
            <img src="works/suit.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Suit</h4>
            <p>web design</p>
            </div>
            </div>
            <div style={{display:uiux || all?'flex':'none' || web?'none':'flex'}} className="cards_content">
            <img src="works/time.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Time</h4>
            <p>ui/ux design</p>
            </div>
            </div>
            <div style={{display:mockups || all?'flex':'none' || uiux?'none':'flex' || web?'none':'flex'}} className="cards_content">
            <img src="works/banana.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Banana</h4>
            <p>mockups</p>
            </div>
            </div>
            <div style={{display:web || all?'flex':'none'}} className="cards_content">
            <img src="works/package.jpeg" alt="first" />
            <div className="cards_about">
            <h4>Package</h4>
            <p>web design</p>
            </div>
            </div>
            </div>
            </div>
            <Pricing />
            </div>
    )
}

export default Portfolio