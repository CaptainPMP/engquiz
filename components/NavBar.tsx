import React from 'react';
import logo from '../assets/Logo.png';

function Navbar() {
  return (
    <nav className="bg-custom-navbar h-16 px-4 w-full">
        <div className = "flex items-center">
            <img src={logo.src} className="w-15 h-10 ml-4 mt-2"/>
        </div>
    </nav>
  )
}
export default Navbar