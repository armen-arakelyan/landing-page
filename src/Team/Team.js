import React from 'react';
import './Team.css';

const Team=()=>{
    return(
        <div>
            <div className="services_content">
            <h2>Our Team Member</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam,</p>
             <div className="team">
                <div className="team_members">
                <img src="members/first.jpg" />
                <p>John Doe</p>
                <p>General Manager</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/second.jpg" />
                <p>Alexa Biru</p>
                <p>Official Director</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/third.jpg" />
                <p>Ronobir Sing</p>
                <p>Admin</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
             </div>
             <div className="slide_cursors">
                <p></p>
                <p></p>
                <p></p>
             </div>
            </div>
        </div>
    )
}

export default Team