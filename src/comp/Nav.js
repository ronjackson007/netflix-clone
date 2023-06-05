import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    
// Navbar transition effect
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect(() => {
  window.addEventListener("scroll", transitionNavBar)

  return () => {
    window.removeEventListener("scroll", transitionNavBar)
  }
}, [])


  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
        <img className='nav_logo' src="Nlogo.png" alt="" />
        <img className='nav_avatar' src="Netflix-avatar.png" alt="avatar" />

        </div>
    </div>
  )
}

export default Nav