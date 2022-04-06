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
    <div className="footer-section">
      <ParallaxLayer offset={2} className="footer-section">
        <Image src="/footer-bush.svg" width={1834 * 2} height={375 * 2} priority />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={3.5}>
        <div className="content-container">
          <div className="get-in-touch">
            <h1>Get In touch</h1>
            <p>mcss@utmsu.ca</p>
            <p>3359 Mississauga Rd, Mississauga, ON, Canada</p>
          </div>
          <div className="social">
            <h1>Social Media</h1>
            <div className="icons">
              <p>
                <a href="https://github.com/utmmcss">
                  <GitHubIcon fontSize="large" />
                  Github
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/utmmcss/?hl=en">
                  <InstagramIcon fontSize="large" />
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/utmmcss/?hl=en">
                  <GitHubIcon fontSize="large" />
                  Discord
                </a>
              </p>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default FooterSection;
