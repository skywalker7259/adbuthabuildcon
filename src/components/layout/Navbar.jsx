import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css';
import {navLinks} from '../../constants/siteConfig';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Adbutha Buildcon Logo" />
      </div>

      {/* Desktop Links */}
      <ul className="nav-links desktop-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className={({isActive}) => (isActive ? 'active-link' : '')}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Action Button */}
      <div className="nav-actions desktop-actions">
        <button className="btn-signin" onClick={() => navigate('/admin/login')}>
          Sign In
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'show' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <img src={logo} alt="Adbutha Buildcon Logo" />
          </div>
          <div className="menu-toggle" onClick={() => setIsOpen(false)}>
            ✕
          </div>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} onClick={() => setIsOpen(false)} className={({isActive}) => (isActive ? 'active-link' : '')}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions mobile-actions">
          <button 
            className="btn-signin" 
            onClick={() => {
              setIsOpen(false);
              navigate('/admin/login');
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;