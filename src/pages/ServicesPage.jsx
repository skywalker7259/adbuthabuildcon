import React from 'react';

import {services} from '../constants/siteConfig';

const Services = () => {
  return (
    <section className="services-section">
      <p className="section-label">OUR SERVICES</p>
      <h2>What We Build</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-id">{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;