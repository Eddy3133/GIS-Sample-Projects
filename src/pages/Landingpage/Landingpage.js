import React from 'react'
import github from '../../images/Github.svg'
import linkedin from '../../images/linkedin.svg'
import Footer from '../../component/Footer/Footer'
import './Landingpage.css'

import {
Link
  } from "react-router-dom";
function Landingpage() {
    return (
        <div className="container">
            <div className="heading">
            <h1>I am Edirin Okpikpi A GIS Developer/Technician</h1>
            <h3>A creative GIS Developer and Technician with a knack for GIS data manipulation and visualization</h3>
            <Link className="dasboardbtn" to="/works">See Works</Link>
            </div>
            <div className="social">
             <a href="https://github.com/Eddy3133" rel="noreferrer" target="_blank"><img src={github} alt="github" /></a>
             <a href="https://www.linkedin.com/in/edirin-okpikpi-558286140/" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" /></a>
            </div>
            <Footer />
        </div>
    )
}

export default Landingpage
