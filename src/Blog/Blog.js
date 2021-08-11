import React from 'react';
import Contacts from '../Contact Us/Contacts';
import './Blog.css'

const Blog=()=>{
    return(
        <div id="blog">
            <div className="services_content blog">
            <div className="break" />
            <h2>Blog</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam,</p>
             <div className="blog_cards">
             <div className="blog_card">
                <div className="blog_img" />
                <div className="blog_card_content">
                <h2>Seo Quis Vestibulum</h2>
                <span className="blog_date">
                <img src="blog_icons/date.png" />
                <b>14.07.2017</b>
                <img src="blog_icons/file.png" />
                <b>Development</b>
                </span>
                <span className="blog_about">
                <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                </span>
                </div>
                </div>
                <div className="blog_card">
                <div className="blog_card_content">
                <h2>Seo Quis Vestibulum</h2>
                <span className="blog_date">
                <img src="blog_icons/date.png" />
                <b>14.07.2017</b>
                <img src="blog_icons/file.png" />
                <b>Development</b>
                </span>
                <span className="blog_about">
                <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                </span>
                </div>
                <div className="blog_img" />
                </div>
                <div className="blog_card">
                <div className="blog_img_3" />
                <div className="blog_card_content">
                <h2>Seo Quis Vestibulum</h2>
                <span className="blog_date">
                <img src="blog_icons/date.png" />
                <b>14.07.2017</b>
                <img src="blog_icons/file.png" />
                <b>Development</b>
                </span>
                <span className="blog_about">
                <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                </span>
                </div>
                </div>
             </div>
             <div className="more_blog">
                <a>More View</a>
            </div>
            </div>
            <Contacts />
        </div>
    )
}

export default Blog