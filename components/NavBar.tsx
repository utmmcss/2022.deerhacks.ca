import { FC } from 'react';
import Image from 'next/image';

const NavBarLinks = {
  Home: 0,
  About: 1,
  Sponsors: 2,
  'Q&A': 3,
  Contact: 4,
};

const NavBar: FC = () => {
  return (
    <div className="navbar">
      <div className="image-container">
        <Image src="/logo.svg" layout="fill" priority />
      </div>
      {Object.entries(NavBarLinks).map(([label, _]) => (
        <div className="navbar-link">{label}</div>
      ))}
    </div>
  );
};

export default NavBar;
