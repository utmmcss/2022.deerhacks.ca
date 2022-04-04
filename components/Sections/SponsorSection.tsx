import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const SponsorSection: FC = () => {
  return (
    <ParallaxLayer offset={1} speed={0.6}>
      <h1 className="text-white text-5xl text-center">Sponsors</h1>
    </ParallaxLayer>
  );
};

export default SponsorSection;
