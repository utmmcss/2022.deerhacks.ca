import { FC } from 'react';
import Image from 'next/image';

import { ParallaxLayer } from '@react-spring/parallax';

interface ICloud {
  size: 'small' | 'medium' | 'large';
  imgSrc: string;
}

const Cloud: FC<ICloud> = ({ size, imgSrc }) => {
  const SIZE_MAP = {
    small: {
      width: 216,
      height: 145,
    },
    medium: {
      width: 256,
      height: 185,
    },
    large: {
      width: 391,
      height: 250,
    },
  };

  return (
    <div className="relative mx-5">
      <div className="relative z-50 top-1">
        <Image src={imgSrc} width={SIZE_MAP[size].width} height={SIZE_MAP[size].height} />
      </div>
      <div className="absolute left-0 top-0">
        <Image src="/cloud.svg" width={SIZE_MAP[size].width} height={SIZE_MAP[size].height} />
      </div>
    </div>
  );
};

const SponsorSection: FC = () => {
  const sponsors = {
    large: ['/uipath-logo.svg', '/green-light-consulting.png'],
    medium: [],
    small: [],
  };

  return (
    <ParallaxLayer offset={1} speed={0.6}>
      <h1 className="text-white text-5xl text-center mb-10">Sponsors</h1>
      <div className="flex justify-center flex-wrap">
        {sponsors.large.map((imgSrc) => (
          <Cloud key={imgSrc} imgSrc={imgSrc} size="large" />
        ))}
      </div>
      <div className="flex justify-center flex-wrap">
        {sponsors.medium.map((imgSrc) => (
          <Cloud key={imgSrc} imgSrc={imgSrc} size="medium" />
        ))}
      </div>
      <div className="flex justify-center flex-wrap">
        {sponsors.small.map((imgSrc) => (
          <Cloud key={imgSrc} imgSrc={imgSrc} size="small" />
        ))}
      </div>
    </ParallaxLayer>
  );
};

export default SponsorSection;
