import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">TRUSTED CONSTRUCTION PARTNER</p>
        <h1>Building Your Vision,<br />One Brick at a Time</h1>
        <p>From the first blueprint to the final handover, we're your trusted partner in crafting spaces that stand the test of time.</p>
        <div className="hero-actions">
          <button className="primary-btn">Get a Free Quote</button>
          <button className="secondary-btn">Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;