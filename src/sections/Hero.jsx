import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-top-content">
        <h1 className="hero-title"></h1>
      </div>

      <div className="hero-bottom-content">
        <p className="hero-description">
          From the first blueprint to the final handover, we're your trusted partner in crafting spaces that stand the test of time.
        </p>
        <div className="hero-actions">
          <button className="btn-outline" onClick={() => navigate('/contact')}>
            Get a Free Quote
          </button>
          <button className="btn-filled" onClick={() => navigate('/contact')}>
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;