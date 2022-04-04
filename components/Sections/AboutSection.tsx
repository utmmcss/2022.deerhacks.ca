import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  isMobile: boolean;
}

const AboutSection: FC<IProps> = ({ isMobile }) => {
  return (
    <div className="about-us-section">
      <ParallaxLayer offset={0.85} speed={2.5}>
        <Image src="/top-bushes.svg" width={1834 * 2} height={603 * 2} priority />
      </ParallaxLayer>
      <ParallaxLayer offset={isMobile ? 0.89 : 0.95} speed={3.5}>
        <div className="bush-1-image-container">
          <Image src="/bottom-bush1.svg" width={1834 * 2} height={527 * 2} priority />
        </div>
        <div className="content-container">
          <h1>About DeerHacks</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor quam, pulvinar a
            neque ut, volutpat placerat ligula. Sed ac tellus eget magna pretium finibus. Praesent
            porta massa vel quam pellentesque molestie. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Vestibulum ut nisl elit.
          </p>
          <h1>What is a hackathon?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor quam, pulvinar a
            neque ut, volutpat placerat ligula. Sed ac tellus eget magna pretium finibus. Praesent
            porta massa vel quam pellentesque molestie. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Vestibulum ut nisl elit.
          </p>
          <h1>Sponsors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor quam, pulvinar a
            neque ut, volutpat placerat ligula. Sed ac tellus eget magna pretium finibus. Praesent
            porta massa vel quam pellentesque molestie. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Vestibulum ut nisl elit.
          </p>
        </div>
        <div className="bush-2-image-container">
          <Image src="/bottom-bush2.svg" width={1834 * 2} height={527 * 2} />
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default AboutSection;
