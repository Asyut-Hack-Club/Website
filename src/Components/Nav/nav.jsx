import "../Nav/nav.css"
import React from 'react'
import flag from "../../assets/flag.png"
import pillars from '../../assets/HCB/pillars.png'
import cal from '../../assets/Events/cal.png'
import tags from '../../assets/Events/tags.png'
import cropped from '../../assets/projects/cropped.png'
import right from '../../assets/projects/right.png'
import frame from '../../assets/Join/frame.png'
import moon from '../../assets/moon.png'
import home from '../../assets/HCB/home.png'
import clubimg from "../../assets/clubs.png"
import clubbers from "../../assets/clubbers.png"
import hcicon from'../../assets/hcicon.png'
import light from "../../assets/light.png"
import { Link } from "react-router"
const Nav = () => {
  return (
  
        
        <div className="navbar">
            <a href="https://hackclub.com"><img src={flag} className="flagimg" /></a>
             <div className="navItems">
                <Link to={'/'}>Home</Link>
                <Link to={'/about-us'}>About Us</Link>
                <Link>Events</Link>
                <Link>Projects</Link>
                <Link>YSWSs</Link>
                <Link>FAQ</Link>
            </div>
            <div className="don-dark">
                <div className="donation">
                  <img className="pillars" src={pillars} alt="" />
                  <img className="home" src={home} alt="" />
                </div>
                <div className="darkmode">
                  <div className="light">
                    <img className="sunbtn" src={light} alt="lightmode" />
                    <button className="btnbg"></button>
                  </div>
                  <div id="dark" className="light">
                    <img className="sunbtn" src={moon} alt="" />
                    <button id="darkbtn" className="btnbg"></button>
                  </div>
                </div>
            </div>
        </div>
        
  )
}

export default Nav