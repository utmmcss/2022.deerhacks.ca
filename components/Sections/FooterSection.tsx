import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';

interface IProps {
  isMobile: boolean;
}

const FooterSection: FC<IProps> = ({ isMobile }) => {
  return (
    <ParallaxLayer offset={2} className="footer-section">
      <Image src="/footer-bush.svg" width={1834 * 2} height={527 * 2} priority />
    </ParallaxLayer>
  );
};

export default FooterSection;
