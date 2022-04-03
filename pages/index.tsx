import { useRef } from 'react';
import type { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';

import HomeSection from '@components/Sections/HomeSection';
import AboutSection from '@components/Sections/AboutSection';
import SponsorSection from '@components/Sections/SponsorSection';

const Home: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  const ref = useRef<IParallax>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => ref?.current?.scrollTo(0.3);

  return (
    <Parallax
      pages={2}
      style={{
        height: '100vh',
        top: '0',
        left: '0',
        background:
          'linear-gradient(180deg, #1F73D2 0%, #78D2FF 16.51%, #54AAFE 54.69%, #492F94 91.57%, #F87891 96.42%, #FDB673 100%)',
      }}
      ref={ref}
    >
      <HomeSection goToAbout={executeScroll} />
      <AboutSection isMobile={isMobile} contentRef={contentRef} />
      <SponsorSection />
    </Parallax>
  );
};

Home.getInitialProps = (ctx) => {
  // eslint-disable-next-line prefer-const
  let isMobile = Boolean(
    // @ts-ignore
    (ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );

  // uncomment this line to force mobile mode
  // isMobile = true;

  return {
    isMobile,
  };
};

export default Home;
