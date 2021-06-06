import React from 'react'
import './About.css'
import profile from '../../images/profile.jpg'


function About() {
    return (
        <div className="aboutcontainer">
            <div className="aboutheading">
            <div className="aboutimage">
            <img loading="lazy" src={profile} alt="Profile of Edirin"/>
            <h1>ABOUT ME</h1>
            <p>I have more than 4 years of expereince working with and developing GIS products with the use of ESRI's ArcGIS Desktop 10.5 - 10.8, ArcGIS Pro 2.4.1, ArcGIS Online, ArcGIS collector and other GIS software applications line QGIS, Map View and Jupyter (using ArcGIS and Pandas libraries). I have earned Bachelor of Science degree from The Facualty of Applied Computer Science in The University of Winnipeg and I also have a minor in Geography.My GIS development and technical skills comes from both work and school experince and also personal learning because I enjoy learning about GIS.
                </p>
            </div>
            </div>
        </div>
    )
}

export default About
