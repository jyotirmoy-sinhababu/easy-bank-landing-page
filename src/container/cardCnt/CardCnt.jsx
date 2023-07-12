import React from 'react';
import './cardCntStyle.css';

import Card from '../../components/card/Card';

const CardCnt = () => {
  return (
    <div className='cardComp-cnt'>
      <div className='cardComp-para-cnt'>
        <p className='cardComp-para'>Latest Article</p>
      </div>
      <div className='main-cnt'>
        <Card />
      </div>
    </div>
  );
};

export default CardCnt;
