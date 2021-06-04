import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/Logo.svg'
import './Header.css'
function Header() {
    return (
        <div className="headercontainer">
            <nav className="nav">
                <ul>
                    <li><Link to="/"><img src={Logo} alt="Portfolio Emblem" /></Link></li>
                    <li className="listitem"><Link to="/" >Home</Link></li>
                    <li className="listitem"><Link to="/works" >Works</Link></li>
                    <li className="listitem"><Link to="/about">About</Link></li>
                    <li className="listitem"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
