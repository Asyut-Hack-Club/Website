import React from 'react'
import { Link } from 'react-router'
import flag from '../../assets/flagstandlone.png'
import facebook from '../../assets/Footer/facebook.png'
import slack from '../../assets/Footer/slack.png'
import twet from '../../assets/Footer/twet.png'
import github from '../../assets/Footer/github.png'
import youtube from '../../assets/Footer/youtube.png'
import figma from '../../assets/Footer/figma.png'
import instagram from '../../assets/Footer/instagram.png'
import mail from '../../assets/Footer/mail.png'
import linkedin from '../../assets/Footer/linkedin.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='first-prt'>
                <div className='links-sec'>
                <h1>Asyut Hack Club</h1>
                <div className='links'>
                  <div className='links1'>
                      <Link>Home</Link>
                      <Link>About Us</Link>
                      <Link>Events</Link>
                      <Link>Projects</Link>
                      <Link>You Ship We Ship (YSWS)</Link>
                      <Link>FAQ</Link>
                      <Link>Donate</Link>
                  </div>
                  <div className='links1'>
                    <Link>Hackathons</Link>
                    <Link>Competitions</Link>
                    <Link>Programs</Link>
                    <Link>Feedbacks</Link>
                    <Link>Certificates</Link>
                    <Link>Dashboard</Link>
                    <Link>Join</Link>
                  </div>
              </div>    
              </div>      
              <div className='pages'>
                <img className='flagstand' src={flag} alt="" />
                <div>
                  <img className="icons" src={facebook} alt="" />
                  <img className="icons" src={slack} alt="" />
                  <img className="icons" src={twet} alt="" />
                </div>
                <div>
                  <img className="icons" src={github} alt="" />
                  <img className="icons" src={youtube} alt="" />
                  <img className="icons" src={figma} alt="" />
                </div>
                <div> 
                  <img className="icons" src={instagram} alt="" />
                  <img className="icons" src={mail} alt="" />
                  <img className="icons" src={linkedin} alt="" />
                </div>
                <p>+20-150-041-0989</p>
              </div>
            </div>
            <p>© 2025 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)</p>
        </div>
    </>
  )
}

export default Footer