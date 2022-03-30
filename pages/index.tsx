import type { NextPage } from 'next';

import AboutSection from '@components/Sections/AboutSection';

const Home: NextPage = () => {
  return (
    <div className="text-orange-700">
      Deerhack
      <AboutSection />
    </div>
  );
};

export default Home;
