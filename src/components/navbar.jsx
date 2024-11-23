import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-[999] w-full px-20 -mt-4 font-['Neue Montreal'] flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'backdrop-blur-md bg-black/5' : 'bg-transparent'}`}>
      <div className="logo">
        <img
          src="./images/bslogo.png"
          className="w-28 h-28 -ml-4"
          alt="Logo"
        />
      </div>
      <div className="links">
        <ul className='flex gap-10 mt-1'>
          <li>
            <Link to="home" smooth={true} duration={500}>
              <a href='#'>Home</a>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              <a href='#'>About & Resume</a>
            </Link>
          </li>
          <li>
            <Link to="works" smooth={true} duration={500}>
              <a href='#'>My Works</a>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              <a href='#'>Contact</a>
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500}>
              <a href='#'>LinkedIn</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;