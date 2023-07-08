import React from 'react';

import Nav from '../../components/nav/Nav';

import './landingPageStyle.css';
import Intro from '../../components/intro/Intro';
import Feature from '../../container/feature/Feature';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Feature />
    </div>
  );
};

export default LandingPage;
