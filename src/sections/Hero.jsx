import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Title movement */}
      <h1 className="hero-title" style={{transform: "translateY(20px)"}}>
       
      </h1>
      
      <div className="hero-bottom-content">
        {/* Description movement */}
        <p className="hero-description" style={{transform: "translateY(90px)"}}>
          From the first blueprint to the final handover, we're your trusted partner in crafting spaces that stand the test of time.
        </p>
        
        {/* Button container movement */}
        <div className="hero-actions" style={{transform: "translateY(75px)"}}>
          <button className="btn-outline">Get a Free Quote</button>
          <button className="btn-filled">Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;