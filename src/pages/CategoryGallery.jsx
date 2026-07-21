import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './CategoryGallery.css';

import buildingImg1 from '../assets/images/building 1.jpg';
import buildingImg2 from '../assets/images/building 2.jpg';
import buildingImg3 from '../assets/images/building 3.jpg';
import buildingImg4 from '../assets/images/building 4.jpg';
import planImg from '../assets/images/plan.jpg';
import elevationImg from '../assets/images/elevations.jpg';
import interiorImg from '../assets/images/interior.jpg';

const galleryData = {
  buildings: [
    {id: 1, src: buildingImg1, alt: 'Completed Building Project 1'},
    {id: 2, src: buildingImg2, alt: 'Completed Building Project 2'},
    {id: 3, src: buildingImg3, alt: 'Completed Building Project 3'},
    {id: 4, src: buildingImg4, alt: 'Completed Building Project 4'}
  ],
  plans: [
    {id: 1, src: planImg, alt: 'Architectural Plan 1'},
    {id: 2, src: planImg, alt: 'Architectural Plan 2'},
    {id: 3, src: planImg, alt: 'Architectural Plan 3'},
    {id: 4, src: planImg, alt: 'Architectural Plan 4'}
  ],
  'elevation-designs': [
    {id: 1, src: elevationImg, alt: 'Elevation Design 1'},
    {id: 2, src: elevationImg, alt: 'Elevation Design 2'},
    {id: 3, src: elevationImg, alt: 'Elevation Design 3'},
    {id: 4, src: elevationImg, alt: 'Elevation Design 4'}
  ],
  'interior-works': [
    {id: 1, src: interiorImg, alt: 'Interior Work 1'},
    {id: 2, src: interiorImg, alt: 'Interior Work 2'},
    {id: 3, src: interiorImg, alt: 'Interior Work 3'},
    {id: 4, src: interiorImg, alt: 'Interior Work 4'}
  ]
};

const CategoryGallery = () => {
  const {categoryId} = useParams();
  const navigate = useNavigate();

  const formattedTitle = categoryId
    ? categoryId.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Gallery';

  const photos = galleryData[categoryId] || [];

  return (
    <div className="category-gallery-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back to Home</button>
      <h1>{formattedTitle} - Completed Proof</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src} alt={photo.alt} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGallery;