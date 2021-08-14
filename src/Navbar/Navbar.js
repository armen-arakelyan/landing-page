import React,{useState} from 'react';
import './Navbar.css'

const Navbar=()=>{
    const [mobile,setMobile]=useState(false)
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
            <div className="burger_menu">
            <p onClick={()=>setMobile(!mobile)}>&#9776;</p>
            </div>
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
            <div className="nav_items_mobile">
            <div style={{left:mobile?'0px':'-5000px'}} className="nav_items_content_mobile">
             <div className="mobile_all_content">
                 <div className="modal_close">
                     <p onClick={()=>setMobile(false)}>&#10006;</p>
                 </div>
            <a onClick={()=>{
                toHome()
                setMobile(false)
            }}>Home</a>
            <a onClick={()=>{
                toAbout()
                setMobile(false)
            }}>About</a>
            <a onClick={()=>{
                toServices()
                setMobile(false)
            }}>Servicing</a>
            <a onClick={()=>{
                toPortfolio()
                setMobile(false)
            }}>Portfolio</a>
            <a onClick={()=>{
                toBlog()
                setMobile(false)
            }}>Blog</a>
             <a onClick={()=>{
                toContact()
                setMobile(false)
            }}>Contact us</a>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar