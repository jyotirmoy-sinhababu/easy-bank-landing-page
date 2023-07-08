import React from 'react';

import './featureCardStyle.css';

import api from '../../assests/img/icon-api.svg';
import onboarding from '../../assests/img/icon-onboarding.svg';
import budgeting from '../../assests/img/icon-budgeting.svg';

const FeatureCard = () => {
  return (
    <div className='featureCard-cnt'>
      <div className='featureCard-sub-cnt'>
        {' '}
        <img className='featureCard-img' src={budgeting} alt='img' />
        <p className='featureCard-header'>Online Banking</p>
        <p className='featureCard-para'>
          {' '}
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>
      <div className='featureCard-sub-cnt'>
        {' '}
        <img className='featureCard-img' src={onboarding} alt='img' />
        <p className='featureCard-header'>Simple Budgeting</p>
        <p className='featureCard-para'>
          {' '}
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </p>
      </div>
      <div className='featureCard-sub-cnt'>
        {' '}
        <img className='featureCard-img' src={api} alt='img' />
        <p className='featureCard-header'>Fast Onboarding</p>
        <p className='featureCard-para'>
          {' '}
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
