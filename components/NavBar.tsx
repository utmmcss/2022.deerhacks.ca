import { FC, RefObject } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { IParallax } from '@react-spring/parallax';

interface IProps {
  parallaxRef: RefObject<IParallax>;
  scrollY: number;
}

const NavBar: FC<IProps> = ({ parallaxRef, scrollY }) => {
  const NavBarLinks = {
    Home: 0,
    About: 0.25,
    Sponsors: 0.9,
    'Q&A': 1.9,
    Contact: 3,
  };

  return (
    <div
      className={classNames('navbar', {
        navbar__active: scrollY !== 0,
      })}
    >
      <div className="image-container">
        <Image src="/logo.svg" layout="fill" priority />
      </div>
      {Object.entries(NavBarLinks).map(([label, offset]) => (
        <button
          type="button"
          className="navbar-link"
          onClick={() => parallaxRef?.current?.scrollTo(offset)}
          key={label}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
