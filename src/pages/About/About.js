import React from 'react'
import './About.css'
import profile from '../../images/profile.jpg'


function About() {
    return (
        <div className="aboutcontainer">
            <div className="aboutheading">
            <div className="aboutimage">
            <img src={profile} alt="Profile of Edirin"/>
            <h1>About Me</h1>
            <p>I am a GIS Developer and Technician with a background both in GIS and software and web development. I have a Bachelor of Science degree from The Facualty of Applied Computer Science in The University of Winnipeg and I also have a minor in Geography. My GIS development and technical skills comes from both work and school experince and I enjoy developing GIS products.  </p>
            </div>
            </div>
        </div>
    )
}

export default About
