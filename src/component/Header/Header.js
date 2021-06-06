import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/Logo.svg'
import './Header.css'
function Header() {

    const [expand, setExpand] = useState(false);
    
    

   const handleToggle = ()=>{
    !expand ? setExpand(true) : setExpand(false)
   }

  
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
            {/* mobile nav */}
            <div id="mySidepanel" style={{ width: expand ? "250px" : "0px"}} className="sidepanel">
        <Link to="/" >Home</Link>
        <Link to="/works" >Works</Link>
        <Link to="/about" >About</Link>
       <Link  to="/contact">Contact</Link>
    </div>
    {!expand ? <button className="openbtn" onClick={handleToggle}>&#9776; </button> : <button className="closebtn" onClick={handleToggle}>&#10006;</button> }
        </div>
    )
}

export default Header
