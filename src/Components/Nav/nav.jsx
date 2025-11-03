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
const Nav = () => {
  return (
    <body className="hero">
        
        <div className="navbar">
            <a href="https://hackclub.com"><img src={flag} className="flagimg" /></a>
             <div className="navItems">
                <h1>Home</h1>
                <h1>About Us</h1>
                <h1>Events</h1>
                <h1>Projects</h1>
                <h1>YSWSs</h1>
                <h1>FAQ</h1>
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
        <div className="hero-scnprt">
          <div className="glass">
            <div className="hero-text">
            <h1>Welcome To Asyut Hack Club</h1>
            <p>We're the largest coding community for teens in Asyut, where creativity meets code!</p></div>
          <div className="hero-btns">
            <div className="btns">
              <p>Join Now!</p>
              <div className="join-icon">
                <img className="frame" src={frame} alt="" />
              </div>
            </div>
            <div className="btns">
              <p>Learn More</p>
              <img className="hcicon" src={hcicon} alt="" />
            </div>
          </div>
          </div>
          <div className="sidebar">
            <p>Info</p>
            <div className="side-items">
              <p>+1.1K</p>
              <img className="clubimg" src={clubimg} alt="" />
            </div>
            <div className="side-items">
              <p>+111k</p>
              <img className="clubbers" src={clubbers} alt="" />
            </div>
            <div className="side-items">
              <p>+500</p>
              <div>
                <img className="cal" src={cal} alt="" />
                <img className="tags" src={tags} alt="" />
              </div>
            </div>
            <div className="side-items">
              <p>+75k</p>
              <div>
                <img className="cropped" src={cropped} alt="" />
                <img className="right" src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
    </body>
  )
}

export default Nav