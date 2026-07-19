import React from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Services from '../sections/Services'; // Summary version
import Portfolio from '../sections/Portfolio'; // Summary version

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
    </>
  );
};

export default Home;