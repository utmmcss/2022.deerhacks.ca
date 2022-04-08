import { FC } from 'react';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

interface IProps {
  isMobile: boolean;
}

const FooterSection: FC<IProps> = ({ isMobile }) => {
  return (
    <ParallaxLayer offset={2} className="footer-section">
      <Image src="/footer-bushes.svg" width={1834 * 10} height={194 * 10} priority />
      <div className="content-container">
        <div className="get-in-touch">
          <h2>Get In touch</h2>
          <p>mcss@utmsu.ca</p>
          <p>3359 Mississauga Rd, Mississauga, ON, Canada</p>
        </div>
        <div>
          <h2>Social Media</h2>
          <div className="media-icons">
            <a href="https://github.com/utmmcss">
              <GitHubIcon fontSize="large" />
              <span>Github</span>
            </a>
            <a href="https://www.instagram.com/utmmcss/?hl=en">
              <InstagramIcon fontSize="large" />
              <span>Instagram</span>
            </a>
            <a href="https://discord.gg/t477RN2q7N">
              <Image src="/discord.svg" width={35} height={35} />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default FooterSection;
