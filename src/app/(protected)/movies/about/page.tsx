'use client';
import React from 'react';
import Footer from '@/app/(protected)/layout/footer/footer';
import Header from '@/app/(protected)/layout/header/header';
import AboutPage from '@/app/(protected)/movies/about/components/aboutPage';

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
