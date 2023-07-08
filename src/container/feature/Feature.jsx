import React from 'react';

import { feature } from '../../utils/feature';
import FeatureCard from '../../components/featureCard/FeatureCard';

const Feature = () => {
  return (
    <div>
      <div>
        <p>Why choose Easybank?</p>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div>
        {feature.map((item) => {
          return (
            <div key={item.id}>
              <FeatureCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
