import React,{useState} from 'react';
import Team from '../Team/Team';
import './Pricing.css'

const Pricing=()=>{
    const [close,setClose]=useState(false);
    const [free,setFree]=useState(false);
    const [basic,setBasic]=useState(false);
    const [ultimate,setUltimate]=useState(false);
    const [name,setName]=useState('');
    const [mail,setMail]=useState('');
    const [contentClose,setContentClose]=useState(true)
    const [sendContent,setSendContent]=useState(false)
    return(
        <div>
        <div id="pricing" style={{background:"#f0f1f1"}} className="break"></div>
        <div style={{display:close?'flex':'none'}} className="modal">
        <div style={{display:sendContent?'flex':'none'}} className="send_content">
            {name.length===0 || mail.length===0? 'Please choose your Name and Mail':
        <div>
        <h2>Dear {name}</h2>
        <p>Contract is sended to your mail {mail}</p>
        </div>
        }
        <div className="price_order">
                <a onClick={()=>{
                    setClose(false)
                    setContentClose(false)
                    setSendContent(false)
                }}>Close</a>
                </div>
        </div>
        <div style={{display:contentClose?'block':'none'}} className="modal_content">
        <div className="modal_close">
            <p onClick={()=>setClose(false)}>&#10006;</p>
        </div>
        <div className="modal_order">
        <h2>
            {free?'Free Trial':''}
            {basic?'Basic':''}
            {ultimate?'Ultimates':''}
        </h2> 
        <span className="price">
                <p>$</p>
                <p>
                {free?'00':''}
                {basic?'50':''}
                {ultimate?'99':''}
                </p>
                <p>per month</p>
          </span>
          <span className="price_about">
                <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                <input placeholder="Mail" onChange={(e)=>setMail(e.target.value)} />
                </span>
                <div className="price_order">
                <a onClick={()=>{
                    setContentClose(false)
                    setSendContent(true)
                }}>Order Now</a>
                </div>
        </div>
        </div>
        </div>
        <div className="services_content pricing_plan">
        <h2>Pricing Plan</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam,</p>
         <div className="pricing_cards">
            <div className="pricing_card">
                <p>Free Trail</p>
                <span className="price">
                <p>$</p>
                <p>00</p>
                <p>per month</p>
                </span>
                <span className="price_about">
                <p>30 Free Trail</p>
                <p>5 Free Projects</p>
                <p>PHP 5 Enabled</p>
                <p>24/7 Suports</p>
                </span>
                <div className="price_order">
                <a onClick={()=>{
                    setFree(true)
                    setBasic(false)
                    setUltimate(false)
                    setClose(true);
                    setContentClose(true)
                    }}>Order Now</a>
                </div>
            </div>
            <div className="pricing_card">
                <p>Basic</p>
                <span className="price">
                <p>$</p>
                <p>50</p>
                <p>per month</p>
                </span>
                <span className="price_about">
                <p>30 Free Trail</p>
                <p>5 Free Projects</p>
                <p>PHP 5 Enabled</p>
                <p>24/7 Suports</p>
                </span>
                <div className="price_order">
                <a onClick={()=>{
                    setFree(false)
                    setBasic(true)
                    setUltimate(false)
                    setClose(true);
                    setContentClose(true)
                    }}>Order Now</a>
                </div>
            </div>
            <div className="pricing_card">
                <p>Ultimates</p>
                <span className="price">
                <p>$</p>
                <p>99</p>
                <p>per month</p>
                </span>
                <span className="price_about">
                <p>30 Free Trail</p>
                <p>5 Free Projects</p>
                <p>PHP 5 Enabled</p>
                <p>24/7 Suports</p>
                </span>
                <div className="price_order">
                <a onClick={()=>{
                    setFree(false)
                    setBasic(false)
                    setUltimate(true)
                    setClose(true);
                    setContentClose(true)
                    }}>Order Now</a>
                </div>
            </div>
         </div>
        </div>
        <Team />
        </div>
    )
}

export default Pricing