import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './CategoryGallery.css';

const CategoryGallery = () => {
  const {categoryId} = useParams();
  const navigate = useNavigate();

  const formattedTitle = categoryId
    ? categoryId.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Gallery';

  return (
    <div className="category-gallery-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back to Home</button>
      <h1>{formattedTitle} - Completed Proof</h1>
      <div className="photo-grid">
        <div className="photo-card">Construction Proof 1</div>
        <div className="photo-card">Construction Proof 2</div>
        <div className="photo-card">Construction Proof 3</div>
        <div className="photo-card">Construction Proof 4</div>
      </div>
    </div>
  );
};

export default CategoryGallery;