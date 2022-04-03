import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  goToAbout: () => void;
}

const HomeSection: FC<IProps> = ({ goToAbout }) => {
  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <p>Home Section</p>
      <button type="button" onClick={goToAbout}>
        Scroll to About
      </button>
    </ParallaxLayer>
  );
};

export default HomeSection;
