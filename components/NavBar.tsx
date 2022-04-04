import { FC, RefObject } from 'react';
import Image from 'next/image';

import { IParallax } from '@react-spring/parallax';

interface IProps {
  parallaxRef: RefObject<IParallax>;
}

const NavBar: FC<IProps> = ({ parallaxRef }) => {
  const NavBarLinks = {
    Home: 0,
    About: 0.25,
    Sponsors: 0.9,
    'Q&A': 1.9,
    Contact: 3,
  };

  return (
    <div className="navbar">
      <div className="image-container">
        <Image src="/logo.svg" layout="fill" priority />
      </div>
      {Object.entries(NavBarLinks).map(([label, offset]) => (
        <button
          type="button"
          className="navbar-link"
          onClick={() => parallaxRef?.current?.scrollTo(offset)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
