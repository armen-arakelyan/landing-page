import React from 'react';
import './Contacts.css';

const Contacts=()=>{
    return(
        <div>
            <div id="contact" className="contacts">
            <div className="contacts_bg">
            <div className="break" />
            <div className="services_content contact_content">
            <h2>Contacts Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,</p>
            </div>
            <div className="contacts_adresses">
            <div className="contact_adress">
            <img src="contact_icons/location.png" />
            <p>Nobinagar savar,Dhaka Bangladesh</p>
            </div>
            <div className="contact_adress">
            <img src="contact_icons/call.png" />
            <p>+8801743331996
            +8801928737807</p>
            </div>
            <div className="contact_adress">
            <img src="contact_icons/mail.png" />
            <p>quickmasud@gmail.com
            quickmasud@yahoo.com</p>
            </div>
            </div>
            <div className="contact_form">
                <div className="contact_form_inputs">
                <input placeholder="Your NAME" />
                <input placeholder="Your Email" />
                </div>
            <textarea placeholder="Write Message" />
            <div className="send_button">
            <a>Send</a>
            </div> 
            <div className="footer">
            <b>All rights Reserved © 2017</b>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contacts