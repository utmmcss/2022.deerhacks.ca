import { FC } from 'react';
import Image from 'next/image';

const AboutSection: FC = () => {
  return (
    <div className="about-us-section">
      <div className="background-img">
        <Image src="/bushes.svg" layout="fill" />
      </div>
    </div>
  );
};

export default AboutSection;
