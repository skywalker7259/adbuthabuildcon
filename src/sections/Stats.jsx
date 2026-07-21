import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
        <h2>30+</h2>
        <p>Projects Completed</p>
      </div>
      <div className="stat-item">
        <h2>15</h2>
        <p>Years of Experience</p>
      </div>
      <div className="stat-item">
        <h2>98%</h2>
        <p>Client Satisfaction</p>
      </div>
      <div className="stat-item">
        <h2>5+</h2>
        <p>Expert Team Members</p>
      </div>
    </section>
  );
};

export default Stats;