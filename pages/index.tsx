import { useRef, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
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
      <Head>
        <title>DeerHacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!isMobile && <NavBar parallaxRef={parallaxRef} scrollY={scrollY} />}
      <Parallax
        pages={3}
        style={{
          height: '100vh',
          top: '0',
          left: '0',
        }}
        ref={parallaxRef}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            background: 'linear-gradient(180deg, rgba(31,115,210,1) 0%, rgba(120,210,255,1) 100%)',
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            background: 'linear-gradient(180deg, rgba(120,210,255,1) 0%, rgba(84,170,254,1) 100%)',
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            background:
              'linear-gradient(180deg, rgba(84,170,254,1) 0%, rgba(73,47,148,1) 80%, rgba(248,120,145,1) 90%, rgba(253,182,115,1) 100%)',
          }}
        />
        <HomeSection isMobile={isMobile} />
        <AboutSection isMobile={isMobile} />
        <SponsorSection />
        <FooterSection isMobile={isMobile} />
        <QAndASection />
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
