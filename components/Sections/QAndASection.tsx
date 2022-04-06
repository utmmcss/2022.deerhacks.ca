import { FC } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const QAndASection: FC = () => {
  return (
    <ParallaxLayer offset={2}>
      <h1 className="text-white text-5xl text-center">Q&A</h1>
    </ParallaxLayer>
  );
};

export default QAndASection;
