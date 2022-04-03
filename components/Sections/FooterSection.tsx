import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  isMobile: boolean;
}

const FooterSection: FC<IProps> = ({ isMobile }) => {
  return (
    <div className="footer-section">
      <ParallaxLayer offset={2} className="footer-section">
        <Image src="/footer-bush.svg" width={1834 * 2} height={527 * 2} priority />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={3.5}>
        <div className="content-container">
          <div className="get-in-touch">
            <h1>Get In touch</h1>
            <p>mcss@utmsu.ca</p>
            <p>3359 Mississauga Rd, Mississauga, ON, Canada</p>
          </div>
          <div className="social">
            <p>Github</p>
            <p>Instagram</p>
            <p>Discord</p>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default FooterSection;
