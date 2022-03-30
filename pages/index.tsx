import { useRef } from 'react';
import type { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';

import HomeSection from '@components/Sections/HomeSection';
import AboutSection from '@components/Sections/AboutSection';

const Home: NextPage = () => {
  const ref = useRef<IParallax>(null);
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }} ref={ref}>
      <HomeSection sectionIndex={0} />
      <AboutSection sectionIndex={1} />
    </Parallax>
  );
};

export default Home;
