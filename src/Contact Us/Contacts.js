import React,{useState} from 'react';
import './Contacts.css';
import {useForm} from 'react-hook-form'

const Contacts=()=>{
    const [send,setSend]=useState(false);
    const [close,setClose]=useState(false);
    const {register,handleSubmit}=useForm();

    const sendToContact=()=>{
        setClose(true)
    }
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
                <form className="contact_form_content" onSubmit={handleSubmit(sendToContact)}>
                <div className="contact_form_places">
                    <div className="contact_form_inputs">
                    <input required {...register('name')} placeholder="Your Name" />
                    <input required {...register('mail')} placeholder="Your Email" />
                    </div>
                <div className="write_message">
                <textarea required  {...register('comment')} placeholder="Write Message" />
                </div>
                <div className="send_button">
                <button>Send</button>
                </div> 
                </div>
                </form>
            <div className="footer">
            <b>All rights Reserved © 2017</b>
            </div>
            <div style={{display:close?'flex':'none'}} className="modal">
                <div className="modal_contact">
                    <div className="modal_close">
                    <p onClick={()=>setClose(false)}>&#10006;</p>
                    </div>
                    <div className="modal_order">
                    <h2>Sended Successfull</h2>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contacts