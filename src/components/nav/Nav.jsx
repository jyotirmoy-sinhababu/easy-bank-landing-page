import React, { useState } from 'react';

import Logo from '../logo/Logo';
import Btn from '../button/Btn';

import './navStyle.css';
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    if (!isMobile) {
      setIsMobile(true);
    }
    if (isMobile) {
      setIsMobile(false);
    }
  };
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
      <div className='nav-req-btn-cnt'>
        <Btn />
      </div>
      <div className='mobile-view'>
        <div className='ham-bur-btn-cnt'>
          {' '}
          <button onClick={handleClick} className='ham-bur-btn'>
            <RxHamburgerMenu />
          </button>
        </div>

        {!isMobile ? (
          <div className='mobile-view-allBtn'>
            <div className='nav-mobile-btn-cnt'>
              <button className='nav-mobile-btn'>Home </button>
              <button className='nav-mobile-btn'>About</button>
              <button className='nav-mobile-btn'>Contact</button>
              <button className='nav-mobile-btn'>Blog</button>
              <button className='nav-mobile-btn'>Careers</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
