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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam vestibulum.  </p>
            </div>
            </div>
        </div>
    )
}

export default About
