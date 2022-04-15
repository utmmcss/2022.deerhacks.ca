import { FC, RefObject } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { IParallax } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';

interface IProps {
  parallaxRef: RefObject<IParallax>;
  scrollY: number;
}

const NavBar: FC<IProps> = ({ parallaxRef, scrollY }) => {
  const NavBarLinks = {
    Home: 0,
    About: 0.26,
    Sponsors: 0.9,
    'Q&A': 1.8,
    Contact: 3,
  };
  const props = useSpring({
    backgroundColor: scrollY <= 50 ? 'rgb(31, 115, 210, 0)' : 'rgb(31, 115, 210, 1)',
  });

  return (
    <animated.div className={classNames('navbar')} style={props}>
      <div className="image-container" onClick={() => parallaxRef?.current?.scrollTo(0)}>
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
    </animated.div>
  );
};

export default NavBar;
