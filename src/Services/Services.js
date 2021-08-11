import React,{useState} from 'react'
import './Services.css'
import Portfolio from '../Portfolio/Portfolio.js'

const Services=()=>{
    const [aboutMore,setAboutMore]=useState(false);
    const [aboutMore2,setAboutMore2]=useState(false);
    const [aboutMore3,setAboutMore3]=useState(false);
    const [aboutMore4,setAboutMore4]=useState(false);
    const [aboutMore5,setAboutMore5]=useState(false);
    const [aboutMore6,setAboutMore6]=useState(false);
    return(
        <div id="services">
            <div className="services">
            <div className="break"></div>
            <div className="services_content">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,</p>
            </div>
            <div className="services_cards">
            <div className="services_card">
            <img src="icons/smartphone.png" />
            <h3>Research</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
            <p style={{display:aboutMore?'block':'none',transition:'.5s'}}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone.</p>
            <a onClick={()=>setAboutMore(more=>!more)}>{aboutMore?'Read Small':'Read more'}</a>
            </div>
            <div className="services_card">
            <img src="icons/smartphone.png" />
            <h3>Portfolio</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
            <p style={{display:aboutMore2?'block':'none',transition:'.5s'}}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone.</p>
            <a onClick={()=>setAboutMore2(more=>!more)}>{aboutMore2?'Read Small':'Read more'}</a>
            </div>
            <div className="services_card">
            <img src="icons/smartphone.png" />
            <h3>Support</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
            <p style={{display:aboutMore3?'block':'none',transition:'.5s'}}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone.</p>
            <a onClick={()=>setAboutMore3(more=>!more)}>{aboutMore3?'Read Small':'Read more'}</a>
            </div>
            <div className="services_card">
            <img src="icons/smartphone.png" />
            <h3>Documentation</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
            <p style={{display:aboutMore4?'block':'none',transition:'.5s'}}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone.</p>
            <a onClick={()=>setAboutMore4(more=>!more)}>{aboutMore4?'Read Small':'Read more'}</a>
            </div>
            <div className="services_card">
            <img src="icons/smartphone.png" />
            <h3>Development</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
            <p style={{display:aboutMore5?'block':'none',transition:'.5s'}}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone.</p>
            <a onClick={()=>setAboutMore5(more=>!more)}>{aboutMore5?'Read Small':'Read more'}</a>
            </div>
            <div className="services_card">
            <img src="icons/smartphone.png" />
            <h3>Design</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</p>
            <p style={{display:aboutMore6?'block':'none',transition:'.5s'}}>A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone.</p>
            <a onClick={()=>setAboutMore6(more=>!more)}>{aboutMore6?'Read Small':'Read more'}</a>
            </div>
            </div>
            </div>
            <Portfolio />
        </div>
    )
}

export default Services