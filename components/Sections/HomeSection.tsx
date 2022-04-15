import { FC } from 'react';
import Image from 'next/image';

import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  isMobile: boolean;
}

const HomeSection: FC<IProps> = ({ isMobile }) => {
  return (
    <>
      <ParallaxLayer offset={0} speed={-7}>
        <div className="flex justify-end md:pr-10">
          <Image src="/sun.svg" width={isMobile ? 77 : 154} height={isMobile ? 77 : 154} priority />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div className="home-section">
          <div className="logo-container">
            <Image src="/logo.svg" width={192 * 1.2} height={157 * 1.2} priority />
          </div>
          <h1>DeerHacks</h1>
          <h2>April 29th - May 1st, 2022</h2>
          <div
            className="button-container"
            onClick={() => {
              window.location.href = 'https://njl3g96ng3s.typeform.com/to/HY9IidQc';
            }}
          >
            <button type="button">Apply Now</button>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default HomeSection;
