import React,{useState} from 'react';
import Blog from '../Blog/Blog';
import './Team.css';

const Team=()=>{
    const [first,setFirst]=useState('#3949ab');
    const [second,setSecond]=useState('#00897b');
    const [third,setThird]=useState('#00897b');
    const [team,setTeam]=useState('0%')
    return(
        <div>
            <div className="services_content">
            <h2>Our Team Member</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam,</p>
             <div className="teams">
             <div style={{marginLeft:team}} className="team">                 
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
                <div className="team_members">
                <img src="members/developer1.jpeg" />
                <p>Jim Harper</p>
                <p>Developer</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/developer2.jpg" />
                <p>Jake Richards</p>
                <p>Developer</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/developer3.jpg" />
                <p>Reyaz Ahmed</p>
                <p>Developer</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/developer4.jpg" />
                <p>Mike Philips</p>
                <p>Developer</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/developer5.jpg" />
                <p>Frank Rijkaard</p>
                <p>Developer</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                <div className="team_members">
                <img src="members/developer6.jpg" />
                <p>Bruno Williams</p>
                <p>Developer</p>
                <div className="icons">
                    <img src="team_icons/facebook.png" />
                    <img src="team_icons/twitter.png" />
                    <img src="team_icons/messages.png" />
                    <img src="team_icons/ball.png" />
                </div>
                </div>
                </div>
             </div>
             <div className="slide_cursors">
                <p style={{backgroundColor:first}} onClick={()=>{
                    setFirst('#3949ab');
                    setSecond('#00897b');
                    setThird('#00897b');
                    setTeam('0%')
                }}></p>
                <p style={{backgroundColor:second}} onClick={()=>{
                    setFirst('#00897b');
                    setSecond('#3949ab');
                    setThird('#00897b');
                    setTeam('-100%')
                }}></p>
                <p style={{backgroundColor:third}} onClick={()=>{
                    setFirst('#00897b');
                    setSecond('#00897b');
                    setThird('#3949ab');
                    setTeam('-200%');
                }}></p>
             </div>
            </div>
            <Blog />
        </div>
    )
}

export default Team