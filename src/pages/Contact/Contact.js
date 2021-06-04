import React from 'react'
import linkedin from '../../images/linkedin.svg'
import phone from '../../images/phonelogo.svg'
import email from '../../images/email.svg'
import Footer from '../../component/Footer/Footer'
import './Contact.css'

function Contact() {
    return (
        <div className="contactcontainer">
            <div className="contactheading">
            <h1>Looking to Hire <span>Me?</span></h1>
            <h3>Contact me @:</h3>
            </div>
        <div className="contactinfo">
          <a href="https://www.linkedin.com/in/edirin-okpikpi-558286140/</div>" target="_blank"  rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
          
        
           <a href = "mailto: edirinokpikpi@gmail.com"><img src={email} alt="email" /></a>
          
          <a href="tel:204-952-2212"><img src={phone} alt="phone" /></a>
        
        </div>
        <Footer />
        </div>
    )
}

export default Contact
