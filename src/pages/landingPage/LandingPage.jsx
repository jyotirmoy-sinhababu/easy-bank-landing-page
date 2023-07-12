import React from 'react';

import Nav from '../../components/nav/Nav';

import './landingPageStyle.css';
import Intro from '../../components/intro/Intro';
import Feature from '../../container/feature/Feature';
import CardCnt from '../../container/cardCnt/CardCnt';
import Footer from '../../components/footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Feature />
      <CardCnt />
      <Footer />
    </div>
  );
};

export default LandingPage;
