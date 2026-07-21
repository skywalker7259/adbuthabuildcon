import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './CategoryGallery.css';

import buildingImg1 from '../assets/images/building 1.jpg';
import buildingImg2 from '../assets/images/building 2.jpg';
import buildingImg3 from '../assets/images/building 3.jpg';
import buildingImg4 from '../assets/images/building 4.jpg';
import buildingImg5 from '../assets/images/building 5.jpg';
import buildingImg6 from '../assets/images/building 6.jpg';
import buildingImg7 from '../assets/images/building 7.jpg';
import buildingImg8 from '../assets/images/building 8.jpg';
import buildingImg9 from '../assets/images/building 9.jpg';
import buildingImg10 from '../assets/images/building 10.jpg';
import buildingImg11 from '../assets/images/building 11.jpg';
import buildingImg12 from '../assets/images/building 12.jpg';
import buildingImg13 from '../assets/images/building 13.jpg';
import buildingImg14 from '../assets/images/building 14.jpg';
import buildingImg15 from '../assets/images/building 15.jpg';
import buildingImg16 from '../assets/images/building 16.jpg';
import buildingImg17 from '../assets/images/building 17.jpg';
import buildingImg18 from '../assets/images/building 18.jpg';
import buildingImg19 from '../assets/images/building 19.jpg';
import buildingImg20 from '../assets/images/building 20.jpg';
import buildingImg21 from '../assets/images/building 21.jpg';
import buildingImg22 from '../assets/images/building 22.jpg';
import buildingImg23 from '../assets/images/building 23.jpg';
import buildingImg24 from '../assets/images/building 24.jpg';
import buildingImg25 from '../assets/images/building 25.jpg';
import buildingImg26 from '../assets/images/building 26.jpg';
import buildingImg27 from '../assets/images/building 27.jpg';
import buildingImg28 from '../assets/images/building 28.jpg';
import buildingImg29 from '../assets/images/building 29.jpg';
import buildingImg30 from '../assets/images/building 30.jpg';
import buildingImg31 from '../assets/images/building 31.jpg';

import elevationImg1 from '../assets/images/elevations 1.jpg';
import elevationImg2 from '../assets/images/elevations 2.jpg';
import elevationImg3 from '../assets/images/elevations 3.jpg';
import elevationImg4 from '../assets/images/elevations 4.jpg';
import elevationImg5 from '../assets/images/elevations 5.jpg';
import elevationImg6 from '../assets/images/elevations 6.jpg';
import elevationImg7 from '../assets/images/elevations 7.jpg';
import elevationImg8 from '../assets/images/elevations 8.jpg';
import elevationImg9 from '../assets/images/elevations 9.jpg';
import elevationImg10 from '../assets/images/elevations 10.jpg';
import elevationImg11 from '../assets/images/elevations 11.jpg';
import elevationImg12 from '../assets/images/elevations 12.jpg';
import elevationImg13 from '../assets/images/elevations 13.jpg';

import planImg from '../assets/images/plan.jpg';

import interiorImg from '../assets/images/interior.jpg';

const galleryData = {
  buildings: [
    {id: 1, src: buildingImg1, alt: 'Completed Building Project 1'},
    {id: 2, src: buildingImg2, alt: 'Completed Building Project 2'},
    {id: 3, src: buildingImg3, alt: 'Completed Building Project 3'},
    {id: 4, src: buildingImg4, alt: 'Completed Building Project 4'},
    {id: 5, src: buildingImg5, alt: 'Completed Building Project 5'},
    {id: 6, src: buildingImg6, alt: 'Completed Building Project 6'},
    {id: 7, src: buildingImg7, alt: 'Completed Building Project 7'},
    {id: 8, src: buildingImg8, alt: 'Completed Building Project 8'},
    {id: 9, src: buildingImg9, alt: 'Completed Building Project 9'},
    {id: 10, src: buildingImg10, alt: 'Completed Building Project 10'},
    {id: 11, src: buildingImg11, alt: 'Completed Building Project 11'},
    {id: 12, src: buildingImg12, alt: 'Completed Building Project 12'},
    {id: 13, src: buildingImg13, alt: 'Completed Building Project 13'},
    {id: 14, src: buildingImg14, alt: 'Completed Building Project 14'},
    {id: 15, src: buildingImg15, alt: 'Completed Building Project 15'},
    {id: 16, src: buildingImg16, alt: 'Completed Building Project 16'},
    {id: 17, src: buildingImg17, alt: 'Completed Building Project 17'},
    {id: 18, src: buildingImg18, alt: 'Completed Building Project 18'},
    {id: 19, src: buildingImg19, alt: 'Completed Building Project 19'},
    {id: 20, src: buildingImg20, alt: 'Completed Building Project 20'},
    {id: 21, src: buildingImg21, alt: 'Completed Building Project 21'},
    {id: 22, src: buildingImg22, alt: 'Completed Building Project 22'},
    {id: 23, src: buildingImg23, alt: 'Completed Building Project 23'},
    {id: 24, src: buildingImg24, alt: 'Completed Building Project 24'},
    {id: 25, src: buildingImg25, alt: 'Completed Building Project 25'},
    {id: 26, src: buildingImg26, alt: 'Completed Building Project 26'},
    {id: 27, src: buildingImg27, alt: 'Completed Building Project 27'},
    {id: 28, src: buildingImg28, alt: 'Completed Building Project 28'},
    {id: 29, src: buildingImg29, alt: 'Completed Building Project 29'},
    {id: 30, src: buildingImg30, alt: 'Completed Building Project 30'},
    {id: 31, src: buildingImg31, alt: 'Completed Building Project 31'}
  ],
  plans: [
    {id: 1, src: planImg, alt: 'Architectural Plan 1'},
    {id: 2, src: planImg, alt: 'Architectural Plan 2'},
    {id: 3, src: planImg, alt: 'Architectural Plan 3'},
    {id: 4, src: planImg, alt: 'Architectural Plan 4'}
  ],
  'elevation-designs': [
  {id: 1, src: elevationImg1, alt: 'Elevation Design 1'},
    {id: 2, src: elevationImg2, alt: 'Elevation Design 2'},
    {id: 3, src: elevationImg3, alt: 'Elevation Design 3'},
    {id: 4, src: elevationImg4, alt: 'Elevation Design 4'},
    {id: 5, src: elevationImg5, alt: 'Elevation Design 5'},
    {id: 6, src: elevationImg6, alt: 'Elevation Design 6'},
    {id: 7, src: elevationImg7, alt: 'Elevation Design 7'},
    {id: 8, src: elevationImg8, alt: 'Elevation Design 8'},
    {id: 9, src: elevationImg9, alt: 'Elevation Design 9'},
    {id: 10, src: elevationImg10, alt: 'Elevation Design 10'},
    {id: 11, src: elevationImg11, alt: 'Elevation Design 11'},
    {id: 12, src: elevationImg12, alt: 'Elevation Design 12'},
    {id: 13, src: elevationImg13, alt: 'Elevation Design 13'}

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
      <h1>{formattedTitle} - OUR PREVIOUS WORK</h1>
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