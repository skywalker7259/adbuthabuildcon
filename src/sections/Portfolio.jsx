import React from 'react';
import './Portfolio.css';
import {portfolioItems} from '../constants/siteConfig';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <p className="section-label">PORTFOLIO</p>
      <h2>Our Work Speaks</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Projects</button>
    </section>
  );
};

export default Portfolio;