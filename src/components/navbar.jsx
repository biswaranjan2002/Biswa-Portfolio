import React, { useState, useEffect } from 'react';

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
      <div className="links flex gap-10 mt-1">
        {["Services", "My Work", "About Me", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-16"}`}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
