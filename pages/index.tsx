import { useRef } from 'react';
import type { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';

import HomeSection from '@components/Sections/HomeSection';
import AboutSection from '@components/Sections/AboutSection';
import SponsorSection from '@components/Sections/SponsorSection';

const Home: NextPage = () => {
  const ref = useRef<IParallax>(null);
  return (
    <Parallax
      pages={2}
      style={{
        top: '0',
        left: '0',
        background:
          'linear-gradient(180deg, #1F73D2 0%, #78D2FF 16.51%, #54AAFE 54.69%, #492F94 91.57%, #F87891 96.42%, #FDB673 100%);',
      }}
      ref={ref}
    >
      <HomeSection sectionIndex={0} />
      <AboutSection sectionIndex={1} />
      <SponsorSection />
    </Parallax>
  );
};

export default Home;
