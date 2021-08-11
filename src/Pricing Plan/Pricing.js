import React from 'react';
import Team from '../Team/Team';
import './Pricing.css'

const Pricing=()=>{
    return(
        <div>
        <div id="pricing" style={{background:"#f0f1f1"}} className="break"></div>
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
                <a>Order Now</a>
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
                <a>Order Now</a>
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
                <a>Order Now</a>
                </div>
            </div>
         </div>
        </div>
        <Team />
        </div>
    )
}

export default Pricing