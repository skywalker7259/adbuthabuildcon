import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Portfolio.css';
import {portfolioItems} from '../constants/siteConfig';

const Portfolio = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryId) => {
    navigate(`/portfolio/${categoryId}`);
  };

  return (
    <section className="portfolio-section">
      <p className="section-label">PORTFOLIO</p>
      <h2>Our Work Speaks</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="portfolio-card"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`}}
            onClick={() => handleCardClick(item.id)}
          >
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Portfolio;