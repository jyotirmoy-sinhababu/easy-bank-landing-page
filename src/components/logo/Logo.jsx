import React from 'react';

import './logoStyle.css';

import logo from '../../assests/img/logo.svg';

const Logo = () => {
  return (
    <div className='logo-cnt'>
      <img className='logo-img' src={logo} alt='logo' />
    </div>
  );
};

export default Logo;
