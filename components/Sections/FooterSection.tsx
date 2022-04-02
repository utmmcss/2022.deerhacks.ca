import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  isMobile: boolean;
}

const FooterSection: FC<IProps> = ({ isMobile }) => {
  return (
    <div className="footer-section">
      <ParallaxLayer offset={isMobile ? 0.89 : 0.95} speed={3.5}>
        <div className="footerbush-image-container">
          <Image src="/footer-bush.svg" width={1834 * 2} height={527 * 2} priority />
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default FooterSection;
