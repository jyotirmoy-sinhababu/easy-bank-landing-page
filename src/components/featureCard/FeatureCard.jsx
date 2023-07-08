import React from 'react';

const FeatureCard = ({ item }) => {
  return (
    <div>
      <img src={item.imgUrl} alt='img' />
      <p>{item.header}</p>
      <p>{item.para}</p>
    </div>
  );
};

export default FeatureCard;
