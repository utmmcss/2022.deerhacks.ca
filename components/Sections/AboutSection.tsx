import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  sectionIndex: number;
}

const AboutSection: FC<IProps> = ({ sectionIndex }) => {
  return (
    <>
      <ParallaxLayer offset={sectionIndex - 0.6} speed={2.5}>
        <div
          className="relative"
          style={{
            width: '150%',
            height: '200%',
            left: '-20%',
          }}
        >
          <Image src="/top-bush.svg" layout="fill" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={sectionIndex - 0.03} speed={3.5}>
        <div
          className="relative"
          style={{
            width: '200%',
            height: '200%',
            left: '-50%',
          }}
        >
          <Image src="/bottom-bush.svg" layout="fill" />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default AboutSection;
