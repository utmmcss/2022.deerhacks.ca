import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  sectionIndex: number;
}

const HomeSection: FC<IProps> = ({ sectionIndex }) => {
  return (
    <ParallaxLayer
      offset={sectionIndex}
      speed={1}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <p>Home Section</p>
    </ParallaxLayer>
  );
};

export default HomeSection;
