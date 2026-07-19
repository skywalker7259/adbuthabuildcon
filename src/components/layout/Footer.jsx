import React from 'react';
import './Footer.css';
import {contactDetails} from '../../constants/siteConfig';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Adbutha Buildcon</h3>
          <p>Building your vision with precision, care, and craftsmanship.</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>{contactDetails.address}</p>
          <p>{contactDetails.phone}</p>
          <p>{contactDetails.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Adbutha Buildcon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;