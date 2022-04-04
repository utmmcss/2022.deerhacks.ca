import { useEffect, useState } from 'react';

const useScreenPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document
        .querySelector('div.classNameOfChildOfParallax')!
        .parentElement!.classList.add('parallax-child');
      document.querySelector('div.parallax-child')!.parentElement!.classList.add('parallax-main');

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      // just trigger this so that the initial state
      // is updated as soon as the component is mounted
      // related: https://stackoverflow.com/a/63408216
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      document.querySelector('div.parallax-main')!.addEventListener('scroll', handleScroll);

      return () =>
        document.querySelector('div.parallax-main')!.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return scrollY;
};

export default useScreenPosition;
