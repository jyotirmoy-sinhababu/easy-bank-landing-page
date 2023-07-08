import React from 'react';

import Logo from '../logo/Logo';
import Btn from '../button/Btn';

import './navStyle.css';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <div className='nav-logo-cnt'>
        <Logo />
      </div>
      <div className='nav-btn-cnt'>
        <button className='nav-btn'>Home </button>
        <button className='nav-btn'>About</button>
        <button className='nav-btn'>Contact</button>
        <button className='nav-btn'>Blog</button>
        <button className='nav-btn'>Careers</button>
      </div>
      <div>
        <Btn />
      </div>
    </div>
  );
};

export default Nav;
