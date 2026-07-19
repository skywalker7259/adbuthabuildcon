import React from 'react';
import './PortfolioPage.css';
import {portfolioItems} from '../constants/siteConfig';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h1>Our Projects</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;