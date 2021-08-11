import React,{useState} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About'

const Home=()=>{
    const [rotate,setRotate]=useState(false);
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
            <a onClick={()=>{
                let services=document.getElementById('services').offsetTop;
                window.scrollTo({top:services,behavior:'smooth'})
            }}>Our services</a>
            <a onClick={()=>{
                let pricing=document.getElementById('pricing').offsetTop;
                window.scrollTo({top:pricing,behavior:'smooth'})
            }}>Hire is now</a>
            </div>
            <div className="down_arrow">
            <p style={{transform:rotate?"rotate(270deg)":"rotate(90deg)"}} onClick={()=>setRotate(!rotate)}>&#10095;</p>
            </div>
            <div style={{opacity:rotate?'1':'0'}} className="home_about_text">
            <h1>About this page</h1>
            <p>An About page is a special web page on a site where your readers/visitors learn more about you and what you do. ...
                 Often, this web page tells the story of the site owner's journey from struggling to finally achieving success (or vice versa).</p>
            </div>
            </span>
        </div>
        </div>
        <About />
        </div>
    )
}

export default Home