import React from 'react';
import logo from '../assets/Logo.png';

function Footer() {
  return (
    <footer className="bg-custom-footer flex-col md:flex-row flex justify-center items-center w-full">
        <div className="items-center">
            <img src={logo.src} className="w-40 h-20 mt-6 mb-6"/>
        </div>
    </footer>
  )
}

export default Footer
