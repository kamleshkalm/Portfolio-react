import './Navv.css';
import React, { useState } from 'react';
import img1 from '../../assets/pi.png';
import img2 from '../../assets/Hamburger.png';
import img3 from '../../assets/cc.png';

const Nav = () => {
  const [menuu, setMenuu] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setMenuu(!menuu);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setMenuu(false);
    setIsOpen(true);
  };

  return (
    <div className="mai-main">
      <div className='main'>
        <div className='title'>
          <img className='menubtn1' src={img1} alt="Title" />
        </div>
        <div className='menu'>
          <div className='circmen' onClick={toggleMenu}>
            {isOpen ? (
              <img className='menubtn' src={img2} alt="Menu" />
            ) : (
              <img className='closebtn1' src={img3} alt="Close" />
            )}
          </div>
          <ul className='menuitems'>
            <li><a href='#aboutus' onClick={closeMenu}>About Us</a></li>
            <li><a href='#experince' onClick={closeMenu}>Experience</a></li>
            <li><a href='#skill' onClick={closeMenu}>Skills</a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={menuu ? 'phn-opt' : 'phn-off'}>
        <ul className='menuitemsphn'>
          <li><a href='#aboutus' onClick={closeMenu}>About Us</a></li>
          <li><a href='#experince' onClick={closeMenu}>Experience</a></li>
          <li><a href='#skill' onClick={closeMenu}>Skills</a></li>
          <li><a href='#contact' onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
