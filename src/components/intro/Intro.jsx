import React from 'react';

import './introStyle.css';

import desktop from '../../assests/img/bg-intro-desktop.svg';
import Btn from '../button/Btn';

const Intro = () => {
  return (
    <div className='intro-cnt'>
      <div className='intro-txt-cnt'>
        <h1 className='intro-header'>Next generation digital banking</h1>
        <p className='intro-para'>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Btn />
      </div>
      <div className='intro-img-cnt'>
        <img className='intro-img' src={desktop} alt='desktop' />
      </div>
    </div>
  );
};

export default Intro;
