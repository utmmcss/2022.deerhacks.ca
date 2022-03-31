import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  sectionIndex: number;
}

const AboutSection: FC<IProps> = ({ sectionIndex }) => {
  return (
    <div className="about-us-section">
      <ParallaxLayer offset={sectionIndex - 0.55} speed={2.5}>
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
      <ParallaxLayer offset={sectionIndex - 0.05} speed={3.5}>
        <div className="bottom-bush-container">
          <div className="image-container">
            <Image src="/bottom-bush.svg" layout="fill" />
          </div>
          <div className="content-container">
            <h1>About DeerHacks</h1>
            For the 1st time in UTM, DeerHacks, will bring together 500 innovators, technology
            enthusiasts, designers, and entrepreneurs in a thrilling competition where they will
            embark on a journey to build unique and impactful projects. What is a hackathon? An
            event, typically lasting several days, in which a large number of people meet to engage
            in collaborative computer programming. We look past this traditional definition of a
            hackathon and take it to new heights. DeerHacks is the University of Toronto's
            Mississauga first hackathon. At DeerHacks, we bring people together to make new friends,
            learn new things, and bring new ideas to life. Sponsors We're currently in the process
            of finding sponsors to make DeerHacks 2022 even greater than before. If you are
            interested in sponsoring for DeerHacks, please email us at bla@mcss.ca
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default AboutSection;
