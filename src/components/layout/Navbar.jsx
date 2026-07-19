import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {navLinks} from '../../constants/siteConfig';
import logo from '../../assets/images/logo.png'; // Update 'logo.png' if your file name differs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Adbutha Buildcon Logo" />
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>

      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} onClick={() => setIsOpen(false)}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Kept out of mobile for a cleaner look */}
      <div className="nav-actions">
        <button className="btn-signin">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;