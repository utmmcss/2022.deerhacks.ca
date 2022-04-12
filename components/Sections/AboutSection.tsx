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
            For the 1st time in UTM, DeerHacks, will bring together 500 innovators,
            technology enthusiasts, designers, and entrepreneurs in a thrilling
            competition where they will embark on a journey to
            build unique and impactful projects.
          </p>
          <h1>What is a hackathon?</h1>
          <p>
            An event, typically lasting several days, in which a large number of
            people meet to engage in collaborative computer programming.
            We look past this traditional definition of
            a hackathon and take it to new heights.
            DeerHacks is the University of Toronto's Mississauga first hackathon.
            At DeerHacks, we bring people together to make new friends, learn new
            things, and bring new ideas to life.
          </p>
          <h1>Sponsors</h1>
          <p>
            We're currently in the process of finding sponsors to make DeerHacks
            2022 even greater than before.
            If you are interested in sponsoring for DeerHacks,
            please email us at
            <a href="mailto:mcss@utmsu.ca"> mcss@utmsu.ca</a>
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
