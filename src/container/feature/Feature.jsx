import React from 'react';

import FeatureCard from '../../components/featureCard/FeatureCard';

import './featureStyle.css';

const Feature = () => {
  return (
    <div className='feature-cnt'>
      <div className='feature-txt-cnt'>
        <p className='feature-header'>Why choose Easybank?</p>
        <p className='feature-para'>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className='feature-featureCard-cnt'>
        <FeatureCard />
      </div>
    </div>
  );
};

export default Feature;
