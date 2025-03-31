import React from 'react'
import './About.css'
import profile from '../../images/profile.jpg'


function About() {
    return (
        <div className="aboutcontainer">
            <div className="aboutimage">
            <img style={{ width: "300px" }} src={profile} alt="Pineapple" />
            </div>
           
            <div className="aboutinfo">
            <h1>About Me</h1>
                <p>
                    GIS Developer and Analyst with 6+ years of experience in spatial data analysis,  thematic mapping, database management, and GIS automation. Expertise in ArcGIS  Pro, ArcGIS Enterprise, FME, SQL, Python, and ETL workflows for geospatial data  integration. Skilled in spatial analysis, geostatistical modeling, and mapping to  support government initiatives. Adept at automating GIS processes, developing  interactive mapping applications, and managing enterprise geodatabases. I have earned Bachelor of Science degree from The Facualty of Applied Computer Science in The University of Winnipeg and I also have a minor in Geography.My GIS development and technical skills comes from both work and school experince and also personal learning because I enjoy learning about GIS.
              </p>
            </div>



        </div>
    )
}

export default About
