import React from 'react'
import './Landingpage.css'

import {
Link
  } from "react-router-dom";
function Landingpage() {
    return (
        <div className="container">
            <div className="heading">
            <h1>I am Edirin A GIS Developer/Technician</h1>
            <h3>A creative GIS Developer and Technician with a knack for GIS data manipulation and visualization</h3>
            <div className="skill">
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>D3</li>
              </ul>
            </div>
            <Link className="dasboardbtn" to="/dashboard">See Works</Link>
            </div>
        </div>
    )
}

export default Landingpage
