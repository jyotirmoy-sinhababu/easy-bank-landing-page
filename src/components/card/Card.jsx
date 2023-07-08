import React from 'react';

import currency from '../../assests/img/image-currency.jpg';
import plane from '../../assests/img/image-plane.jpg';
import confetti from '../../assests/img/image-confetti.jpg';
import restaurant from '../../assests/img/image-restaurant.jpg';

import './cardStyle.css';

const Card = () => {
  return (
    <div className='card-cnt'>
      <div className='cardSub-cnt'>
        <img className='card-img' src={currency} alt='currency' />
        <p className='card-header'> By Claire Robinson</p>
        <p className='card-para-one'>
          {' '}
          Receive money in any currency with no fees
        </p>
        <p className='card-para-two'>
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …
        </p>
      </div>
      <div className='cardSub-cnt'>
        <img className='card-img' src={plane} alt='plane' />
        <p className='card-header'>By Wilson Hutton</p>
        <p className='card-para-one'>
          Treat yourself without worrying about money
        </p>
        <p className='card-para-two'>
          {' '}
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you …
        </p>
      </div>
      <div className='cardSub-cnt'>
        <img className='card-img' src={restaurant} alt='restaurant' />
        <p className='card-header'>By Wilson Hutton</p>
        <p className='card-para-one'>Take your Easybank card wherever you go</p>
        <p className='card-para-two'>
          {' '}
          We want you to enjoy your travels. This is why we don’t charge any
          fees on purchases while you’re abroad. We’ll even show you …
        </p>
      </div>
      <div className='cardSub-cnt'>
        <img className='card-img' src={confetti} alt='confetti' />
        <p className='card-header'>By Claire Robinson</p>
        <p className='card-para-one'>
          Our invite-only Beta accounts are now live!
        </p>
        <p className='card-para-two'>
          After a lot of hard work by the whole team, we’re excited to launch
          our closed beta. It’s easy to request an invite through the site ...
        </p>
      </div>
    </div>
  );
};

export default Card;
