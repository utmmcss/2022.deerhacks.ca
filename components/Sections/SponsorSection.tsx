import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const SponsorSection: FC = () => {
  return (
    <ParallaxLayer offset={1} speed={1}>
      <h1 className="text-white text-5xl text-center">Sponsor</h1>
    </ParallaxLayer>
  );
};

export default SponsorSection;
