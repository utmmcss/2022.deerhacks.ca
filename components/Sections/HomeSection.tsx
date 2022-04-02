import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const HomeSection: FC = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <p>Home Section</p>
    </ParallaxLayer>
  );
};

export default HomeSection;
