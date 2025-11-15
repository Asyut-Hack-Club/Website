import React, { useState } from 'react'
import Nav from '../../Components/Nav/nav'
import hclogo from '../../assets/hclogo.png'
import hamza from '../../assets/hamza.png'
import mostafa from '../../assets/mostafa.png'
import Footer from '../../Components/Footer/Footer'
import "./About.css"


const About = () => {
    const[active, setActive]=useState('leader')
  return (
    <>
        <div className='about-hero'>
            <Nav />
            <p>About Us</p>
        </div>
        <div className='hc'>
            <h1>What is Hack Club ?</h1>
            <div className='content'>
                <p>Hack Club is a global nonprofit network of high school computer programming clubs founded in 2014 by Zach Latta and Jonathan Leung. It now includes more than 1,100 high school clubs and 111,000 students. It has been featured on the TODAY Show, and profiled in the Wall Street Journal.</p>
                <img src={hclogo} alt="HC logo" />
            </div>
        </div>
        <div className='hc'>
            <h1>Hisotry!</h1>
            <p>Hack Club was founded in 2014 by Zach Latta and Jonathan Leung. At that time, Latta was a 16-year-old who had graduated high school early and was employed by Yo. Latta would win a 2015 Thiel Fellowship for Hack Club in June of that year, at which point he did not plan on attending college. In 2016, Latta and Leung would be placed on Forbes 30 Under 30 list for education. At that point, Hack Club was in a total of 52 schools, 12 US states, and 5 countries. At the time of a profile of Latta by Business Insider at the end of January 2016, Hack Club had established clubs in the United States, Canada, Australia, India, Estonia, and Zimbabwe.<br></br>
                In March 2020, Hack Club relocated from Silicon Valley to Shelburne, Vermont. In April 2020, the Hack Club facilitated an AMA (Ask Me Anything) between its members and Elon Musk. The event was originally planned to last 30 minutes, but Musk was impressed enough with the participants to allow it to extend for over an hour. In 2021, the organization accepted a $1 million donation from Musk. That same year, the organization had clubs in 400 different schools. In January 2022, Hack Club had over 20,000 students in clubs located in over 22 countries. In July 2025, the number of students jumped to over 70,000. <br></br>
                Today Hack Club has more than 100,000 student around the world and more than 1000 Club around the world and we are one of these clubs!
            </p>
        </div>
        <div className='team'>
            <h1>Meet Our Team</h1>
            <div className='team-nav'>
                <p 
                    className={active === "leader" ? "active" : ""} 
                    onClick={() => {setActive("leader");
                        document.getElementById('leaders').style.display="flex";
                    }}
                >
                Leaders
                </p>
                <p 
                className={active === "non-tech" ? "active" : ""} 
                onClick={() => {setActive("non-tech");document.getElementById('leaders').style.display="none";}}
                >
                Non-Technical Team
                </p>

                <p 
                className={active === "tech" ? "active" : ""} 
                onClick={() => {setActive("tech");document.getElementById('leaders').style.display="none";}}
                >
                Technical Team
                </p>
            </div>
            <div className="team-mem">
                <div id='leaders' className='members'>
                    <div className='member'>
                        <div>
                            <img src={hamza} alt="" />
                            <p>Hamza Sayed</p>
                        </div>
                            <h1>Club Leader</h1>                                                
                    </div>
                    <div className='member'>
                        <div>
                            <img src={mostafa} alt="" />
                            <p>Mostafa Mohammed</p> 
                        </div>
                           <h1>Vice-Leader</h1>                                                
                    </div>
                </div>
                <div className='members'></div>
                <div className="members"></div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About