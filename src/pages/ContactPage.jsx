import React from 'react';
import './ContactPage.css';
import {contactDetails} from '../constants/siteConfig';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>{contactDetails.address}</p>
          <p><strong>Phone:</strong> {contactDetails.phone}</p>
          <p><strong>Email:</strong> {contactDetails.email}</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="cta-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;