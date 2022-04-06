import { useRef, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Parallax } from '@react-spring/parallax';
import type { IParallax } from '@react-spring/parallax';

import HomeSection from '@components/Sections/HomeSection';
import AboutSection from '@components/Sections/AboutSection';
import SponsorSection from '@components/Sections/SponsorSection';
import FooterSection from '@components/Sections/FooterSection';
import QAndASection from '@components/Sections/QAndASection';
import NavBar from '@components/NavBar';

interface IProps {
  isMobile: boolean;
}

const Home: NextPage<IProps> = ({ isMobile }) => {
  const parallaxRef = useRef<IParallax>(null);
  const [scrollY, setScrollY] = useState(0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const updateScrollPosition = (e: any) => {
      setScrollY(e.target.scrollTop);
    };

    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.container.current.addEventListener('scroll', updateScrollPosition, false);
      return () => {
        parallaxRef?.current?.container.current.removeEventListener(
          'scroll',
          updateScrollPosition,
          false,
        );
      };
    }
  }, []);

  return (
    <>
      {!isMobile && <NavBar parallaxRef={parallaxRef} scrollY={scrollY} />}
      <Parallax
        pages={3}
        style={{
          height: '100vh',
          top: '0',
          left: '0',
          background:
            'linear-gradient(180deg, #1F73D2 0%, #78D2FF 16.51%, #54AAFE 54.69%, #492F94 91.57%, #F87891 96.42%, #FDB673 100%)',
        }}
        ref={parallaxRef}
      >
        <HomeSection />
        <AboutSection isMobile={isMobile} />
        <SponsorSection />
        <QAndASection />
        <FooterSection isMobile={isMobile} />
      </Parallax>
    </>
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

  // uncomment this line to force mobile mode while developing
  // isMobile = true;

  return {
    isMobile,
  };
};

export default Home;
