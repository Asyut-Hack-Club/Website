import React from 'react'
import Nav from '../../Components/Nav/nav'
import './Home.css'
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

const Home = () => {
  return (
  <div className='hero'>
    <Nav />
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
  </div>
  )
}

export default Home