import React from 'react';
import './AboutPage.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="section-label">ABOUT US</p>
        <h1>Building Trust, Delivering Excellence</h1>
        <p className="about-subtitle">
          Welcome to Adbutha Buildcon, your trusted partner in turning architectural visions into reality.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text-block">
          <h2>Who We Are</h2>
          <p>
            Founded and led by <strong>Satish G</strong> and <strong>Varun R</strong>—both holding engineering degrees and specialized qualifications in construction management—Adbutha Buildcon brings technical precision, rigorous oversight, and professional management to every project we undertake. We combine industry expertise with innovative building solutions to deliver residential and commercial spaces of exceptional quality.
          </p>
        </div>

        <div className="about-services-overview">
          <h2>Our Comprehensive Expertise</h2>
          <p>
            We offer end-to-end execution across a wide spectrum of construction and real estate services, ensuring every phase of your project is handled under one roof:
          </p>
          <ul className="services-bullet-list">
            <li>Architectural & BBMP Sanction Plans</li>
            <li>Civil Construction & Expert Site Supervision</li>
            <li>Structural & MEP Design</li>
            <li>PEB & LGS Structure Solutions</li>
            <li>Interior Design & Project Management</li>
            <li>Estimation, Valuation, and Real Estate Services</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;