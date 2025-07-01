'use client';
import React from 'react';
import Footer from '@/app/layout/footer/footer';
import Header from '@/app/layout/header/header';
import AboutPage from '@/app/movies/about/components/aboutPage';

const About = () => {

  return (
    <React.Fragment>
      <Header />
      <AboutPage />
      <Footer />
    </React.Fragment>
  );
};

export default About;
